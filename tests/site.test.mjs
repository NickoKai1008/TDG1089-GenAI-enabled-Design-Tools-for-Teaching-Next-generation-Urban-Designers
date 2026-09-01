import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import {
  createRatingRecord,
  loadRatingRecords,
  ratingsToCsv,
  saveRatingRecord,
} from '../assets/js/rating.js';

const testDirectory = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(testDirectory, '..');

const sixRatings = {
  safety: 6,
  liveliness: 5,
  beauty: 7,
  wealthiness: 4,
  depressing: 2,
  boring: 3,
};

test('site contains the proposal-defined phases and analytical sequence', () => {
  const html = readFileSync(resolve(packageRoot, 'index.html'), 'utf8');
  for (const heading of [
    'Site Information Collection',
    'Predictive User Behavior Analysis',
    'Iterative Design Ideation',
    'Analysis 1',
    'Analysis 2',
    'Analysis 3',
  ]) {
    assert.match(html, new RegExp(heading));
  }
  assert.doesNotMatch(html, /project group/i);
  assert.doesNotMatch(html, /Task\s*[0-9]/i);
});

test('site presents one six-action loop with explicit evidence levels', () => {
  const html = readFileSync(resolve(packageRoot, 'index.html'), 'utf8');
  for (const action of ['Reveal', 'Reconstruct', 'Ground', 'Interpret', 'Generate', 'Re-audit']) {
    assert.match(html, new RegExp(`>${action}<`));
  }
  for (const label of ['Research Prototype', 'Validation Evidence', 'Student Outcome']) {
    assert.match(html, new RegExp(label));
  }
});

test('website typography uses Arial without Times-style display fonts', () => {
  const css = readFileSync(resolve(packageRoot, 'assets/css/styles.css'), 'utf8');
  assert.match(css, /font-family:\s*Arial,\s*Helvetica,\s*sans-serif/i);
  assert.doesNotMatch(css, /Georgia|Times New Roman/i);
});

test('curated research previews are present and source boundaries are documented', () => {
  const assetNames = [
    'tdg-nightdiff-workflow.png',
    'tdg-nightdiff-comparison.png',
    'tdg-nightdiff-lux-validation.png',
    'tdg-behaviour-prediction.png',
    'tdg-gan-morphology-scenarios.png',
    'tdg-gan-environment-feedback.png',
  ];

  const html = readFileSync(resolve(packageRoot, 'index.html'), 'utf8');
  const register = readFileSync(resolve(packageRoot, 'docs/EVIDENCE_REGISTER.md'), 'utf8');
  for (const name of assetNames) {
    assert.ok(existsSync(resolve(packageRoot, 'assets/images', name)), `Missing curated evidence preview: ${name}`);
    assert.match(html, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.match(register, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  const publicText = `${html}\n${register}`;
  assert.doesNotMatch(publicText, /1000\s+volunteers|virtual volunteer|unfinished diffusion|\bSHAP\b/i);
  assert.match(publicText, /not presented as one dataset|not represented as one dataset|not the same dataset or experiment/i);
});

test('public narrative follows the approved cumulative sequence', () => {
  const html = readFileSync(resolve(packageRoot, 'index.html'), 'utf8');

  assert.ok(
    html.indexOf('class="workflow-grid"') < html.indexOf('class="narrative-loop"'),
    'The three proposal-defined phases must precede the six detailed actions.',
  );
  assert.ok(
    html.indexOf('class="workflow-grid"') < html.indexOf('class="return-path"')
      && html.indexOf('class="return-path"') < html.indexOf('class="narrative-loop"'),
    'The return path must close the three-phase diagram before the six detailed actions.',
  );
  assert.ok(
    html.indexOf('id="analysis-3"') < html.indexOf('tdg-behaviour-prediction.png'),
    'Phase 2 must diagnose mismatch before introducing predictive demand mapping.',
  );
  assert.ok(
    html.indexOf('mvi-overall-results.png') < html.indexOf('tdg-gan-morphology-scenarios.png'),
    'Phase 3 student generation and evaluation must precede the prototype extension.',
  );
  assert.match(html, /Predict how people may use space from satellite imagery/i);
  assert.doesNotMatch(html, /After diagnosing mismatch|diagnosis to anticipation/i);
  assert.doesNotMatch(html, /tdg-gan-morphology-workflow\.png|LCZ-conditioned|Shiqi Zhou/i);
  assert.equal(existsSync(resolve(packageRoot, 'assets/images/tdg-gan-morphology-workflow.png')), false);
});

test('resource cards preserve the canonical phase mapping', () => {
  const html = readFileSync(resolve(packageRoot, 'index.html'), 'utf8');
  for (const label of [
    'Phase 1A',
    'Phase 1B · Teaching Extension',
    'Site Information Collection',
    'Human Perception Validation',
    'Predictive User Behavior Analysis',
    'Iterative Design Ideation',
  ]) {
    assert.match(html, new RegExp(label));
  }
  assert.match(html, /<a href="#phase-2">Review the analytical sequence/);
});

test('public entry points use the approved three-tier attribution', () => {
  const publicFiles = [
    'index.html',
    'README.md',
    'docs/PROJECT_OUTCOME_SUMMARY.md',
    'docs/PROJECT_NARRATIVE.md',
  ];
  const requiredNames = [
    'Waishan Qiu',
    'Yuankai Wang',
    'Laipeng Xu',
    'Xiaotong Ye',
    'Xinyi Kong',
    'Chengxuan Zhang',
  ];

  for (const path of publicFiles) {
    const content = readFileSync(resolve(packageRoot, path), 'utf8');
    for (const name of requiredNames) {
      assert.match(content, new RegExp(name), `${path} does not identify ${name}`);
    }
  }

  for (const path of ['index.html', 'README.md']) {
    const content = readFileSync(resolve(packageRoot, path), 'utf8');
    assert.match(content, /(?:<dt>|\*\*)PI(?:<\/dt>|:\*\*)/);
    assert.match(content, /Core Members/);
    assert.match(content, /Contributors/);
    assert.match(content, /Prof\. Waishan Qiu/);
    assert.doesNotMatch(content, /Project Lead/);
    assert.match(content, /Yuankai Wang, Xiaotong Ye/);
    assert.doesNotMatch(content, /Core Members[^\n<]*Waishan Qiu/);
    assert.match(content, /Laipeng Xu, Xinyi Kong, Chengxuan Zhang/);
  }
});

test('public package exposes no full student poster or publication checklist', () => {
  const publicText = [
    readFileSync(resolve(packageRoot, 'index.html'), 'utf8'),
    readFileSync(resolve(packageRoot, 'README.md'), 'utf8'),
    ...readdirSync(resolve(packageRoot, 'docs'))
      .filter((name) => name.endsWith('.md'))
      .map((name) => readFileSync(resolve(packageRoot, 'docs', name), 'utf8')),
  ].join('\n');

  assert.doesNotMatch(publicText, /night-audit-student-poster|Open the full (student )?poster|PUBLICATION_CHECKLIST|Publication checklist/i);
  assert.doesNotMatch(publicText, /\b(?:published|unpublished)\b|10\.1016\//i);
  assert.equal(existsSync(resolve(packageRoot, 'assets/images/night-audit-student-poster.png')), false);
  assert.equal(existsSync(resolve(packageRoot, 'docs/PUBLICATION_CHECKLIST.md')), false);
});

test('Phase 2 uses compact protected JPEG previews', () => {
  const previewNames = [
    'night-audit-satellite-vs-svi',
    'night-audit-human-activity',
    'night-audit-mismatch-map',
    'night-audit-mismatch-factors',
    'night-audit-mismatch-scenarios',
  ];

  for (const name of previewNames) {
    const jpegPath = resolve(packageRoot, `assets/images/${name}.jpg`);
    assert.ok(existsSync(jpegPath), `Missing protected preview: ${name}.jpg`);
    assert.ok(statSync(jpegPath).size < 250_000, `Protected preview is too large: ${name}.jpg`);
    assert.equal(existsSync(resolve(packageRoot, `assets/images/${name}.png`)), false);
  }
  assert.ok(existsSync(resolve(packageRoot, 'docs/SHARING_CHECKLIST.md')));
});

test('range labels explicitly target inputs rather than their displayed outputs', () => {
  const html = readFileSync(resolve(packageRoot, 'index.html'), 'utf8');
  assert.doesNotMatch(html, /<output\s+for=/i);
  assert.match(html, /<label\s+for="rating-safety">Perceived safety<\/label>/i);
  assert.match(html, /<div\s+class="rating-control">/i);
});

test('rating record retains six bounded perception dimensions', () => {
  const record = createRatingRecord(
    'stimulus-01',
    sixRatings,
    'anonymous',
    new Date('2026-08-10T00:00:00.000Z'),
  );

  assert.equal(Object.keys(record.ratings).length, 6);
  assert.deepEqual(record.ratings, sixRatings);
  assert.equal(record.savedAt, '2026-08-10T00:00:00.000Z');
});

test('rating record rejects missing, non-numeric, or out-of-range values', () => {
  assert.throws(
    () => createRatingRecord('stimulus-01', { ...sixRatings, safety: 11 }),
    /between 1 and 10/,
  );
  const incomplete = { ...sixRatings };
  delete incomplete.boring;
  assert.throws(() => createRatingRecord('stimulus-01', incomplete), /boring/);
});

test('saved ratings append to browser storage without replacing earlier records', () => {
  const memory = new Map();
  const storage = {
    getItem: (key) => memory.get(key) ?? null,
    setItem: (key, value) => memory.set(key, value),
  };
  const first = createRatingRecord('stimulus-01', sixRatings, 'anonymous', new Date('2026-08-10T00:00:00.000Z'));
  const second = createRatingRecord('stimulus-02', sixRatings, 'anonymous', new Date('2026-08-10T00:01:00.000Z'));

  saveRatingRecord(storage, first);
  saveRatingRecord(storage, second);

  assert.deepEqual(loadRatingRecords(storage), [first, second]);
});

test('CSV export includes one row per saved response', () => {
  const csv = ratingsToCsv([
    createRatingRecord('stimulus-01', sixRatings, 'anonymous', new Date('2026-08-10T00:00:00.000Z')),
  ]);

  assert.equal(csv.trim().split('\n').length, 2);
  assert.match(csv, /^stimulus_id,source_type,safety,liveliness,beauty,wealthiness,depressing,boring,saved_at/);
});

test('every local page asset exists and no preview-only path remains', () => {
  const html = readFileSync(resolve(packageRoot, 'index.html'), 'utf8');
  assert.doesNotMatch(html, /\/files\//);
  assert.doesNotMatch(html, /[A-Z]:\\/);

  const localTargets = [...html.matchAll(/(?:src|href)="(?!https?:|#|mailto:)([^"]+)"/g)]
    .map((match) => match[1].split('#')[0])
    .filter(Boolean);

  for (const target of localTargets) {
    assert.ok(existsSync(resolve(packageRoot, target)), `Missing local target: ${target}`);
  }
});

test('formal delivery documents are present', () => {
  for (const path of [
    'README.md',
    '.nojekyll',
    'docs/PROJECT_NARRATIVE.md',
    'docs/PROJECT_OUTCOME_SUMMARY.md',
    'docs/EVIDENCE_REGISTER.md',
    'docs/SHARING_CHECKLIST.md',
  ]) {
    assert.ok(existsSync(resolve(packageRoot, path)), `Missing document: ${path}`);
  }
});

test('project evaluation section presents verified SFTL evidence', () => {
  const html = readFileSync(resolve(packageRoot, 'index.html'), 'utf8');
  const evaluationAssets = [
    'sftl-year-on-year-improvement.png',
    'sftl-overall-course-effectiveness.png',
    'sftl-course-dimensions.png',
    'sftl-course-feedback.png',
    'sftl-teacher-feedback.png',
  ];

  assert.match(html, /<a href="#evaluation">Evaluation<\/a>/);
  assert.match(html, /<section[^>]+id="evaluation"/);
  assert.ok(
    html.indexOf('id="closing-loop"') < html.indexOf('id="evaluation"')
      && html.indexOf('id="evaluation"') < html.indexOf('id="resources"'),
    'Evaluation must follow the three-phase closing loop and precede Resources.',
  );

  for (const asset of evaluationAssets) {
    assert.ok(existsSync(resolve(packageRoot, 'assets/images', asset)), `Missing evaluation asset: ${asset}`);
    assert.match(html, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  for (const evidence of [
    'Enrolment',
    '57',
    'Forms returned',
    '45',
    'Response rate',
    '79%',
    '92.2–95.0',
    '7.2–14.2 points',
    '1.2–4.4 points',
    '2026–27',
  ]) {
    assert.match(html, new RegExp(evidence));
  }

  assert.doesNotMatch(html, /\bSTFL\b/);
  assert.doesNotMatch(html, /all dimensions[^.]{0,50}(?:10%|ten per cent)/i);
  assert.doesNotMatch(html, /Figure (?:5|6)\([ab]\)\./);
});
