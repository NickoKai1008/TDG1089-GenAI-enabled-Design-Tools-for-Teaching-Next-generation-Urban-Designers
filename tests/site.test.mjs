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
