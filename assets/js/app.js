import {
  RATING_DIMENSIONS,
  STORAGE_KEY,
  createRatingRecord,
  loadRatingRecords,
  ratingsToCsv,
  saveRatingRecord,
} from './rating.js';

const comparisonStimuli = {
  'ground-truth': {
    src: 'assets/images/nightdiff-ground-truth-0607.png',
    alt: 'Ground-truth nighttime street-view stimulus GT 0607',
    caption: 'Ground-truth nighttime stimulus · GT 0607. Select NightDiff to inspect the paired synthetic view.',
  },
  nightdiff: {
    src: 'assets/images/nightdiff-synthetic-0607.png',
    alt: 'NightDiff synthetic nighttime street-view stimulus ND 0607',
    caption: 'NightDiff synthetic nighttime stimulus · ND 0607. Select Ground truth to return to the real reference view.',
  },
};

const ratingStimuli = [
  {
    id: 'GT_0607',
    src: 'assets/images/nightdiff-ground-truth-0607.png',
    sourceType: 'ground-truth',
    sourceLabel: 'Ground-truth nighttime image',
  },
  {
    id: 'ND_0607',
    src: 'assets/images/nightdiff-synthetic-0607.png',
    sourceType: 'nightdiff-synthetic',
    sourceLabel: 'NightDiff synthetic nighttime image',
  },
];

function initialiseImageComparison() {
  const image = document.querySelector('#comparison-image');
  const imageLink = document.querySelector('#comparison-image-link');
  const caption = document.querySelector('#comparison-caption');
  const buttons = [...document.querySelectorAll('[data-comparison-image]')];

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const key = button.dataset.comparisonImage;
      const stimulus = comparisonStimuli[key];
      if (!stimulus) return;

      image.src = stimulus.src;
      image.alt = stimulus.alt;
      imageLink.href = stimulus.src;
      caption.textContent = stimulus.caption;

      for (const candidate of buttons) {
        const isCurrent = candidate === button;
        candidate.classList.toggle('is-active', isCurrent);
        candidate.setAttribute('aria-pressed', String(isCurrent));
      }
    });
  }
}

function initialiseTabs(buttonSelector, panelSelector, dataKey) {
  const buttons = [...document.querySelectorAll(buttonSelector)];
  const panels = [...document.querySelectorAll(panelSelector)];

  function activate(button) {
    const targetId = button.dataset[dataKey];
    for (const candidate of buttons) {
      const isCurrent = candidate === button;
      candidate.classList.toggle('is-active', isCurrent);
      candidate.setAttribute('aria-selected', String(isCurrent));
      candidate.tabIndex = isCurrent ? 0 : -1;
    }
    for (const panel of panels) {
      const isCurrent = panel.id === targetId;
      panel.classList.toggle('is-active', isCurrent);
      panel.hidden = !isCurrent;
    }
  }

  for (const [index, button] of buttons.entries()) {
    button.addEventListener('click', () => activate(button));
    button.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();

      let nextIndex = index;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % buttons.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + buttons.length) % buttons.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = buttons.length - 1;

      activate(buttons[nextIndex]);
      buttons[nextIndex].focus();
    });
  }
}

function initialiseRatingLab() {
  const form = document.querySelector('#rating-form');
  const image = document.querySelector('#rating-image');
  const progress = document.querySelector('#rating-progress');
  const feedback = document.querySelector('#rating-feedback');
  const nextButton = document.querySelector('#next-rating-image');
  const downloadButton = document.querySelector('#download-ratings');
  const clearButton = document.querySelector('#clear-ratings');
  const count = document.querySelector('#saved-rating-count');
  const inputs = [...form.querySelectorAll('input[type="range"]')];
  let currentIndex = 0;

  function updateStoredState() {
    const records = loadRatingRecords(window.localStorage);
    count.textContent = String(records.length);
    downloadButton.disabled = records.length === 0;
    clearButton.disabled = records.length === 0;
  }

  function showStimulus() {
    const stimulus = ratingStimuli[currentIndex];
    image.src = stimulus.src;
    image.alt = 'Anonymous nighttime scene for perception rating';
    progress.textContent = `Anonymous image ${currentIndex + 1} of ${ratingStimuli.length}`;
    feedback.hidden = true;
    feedback.textContent = '';
    for (const input of inputs) {
      input.value = '5';
      input.closest('.rating-control').querySelector('output').textContent = '5';
    }
  }

  for (const input of inputs) {
    input.addEventListener('input', () => {
      input.closest('.rating-control').querySelector('output').textContent = input.value;
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const ratings = Object.fromEntries(inputs.map((input) => [input.name, Number(input.value)]));
    const stimulus = ratingStimuli[currentIndex];
    const record = createRatingRecord(stimulus.id, ratings, stimulus.sourceType);
    saveRatingRecord(window.localStorage, record);

    feedback.hidden = false;
    feedback.textContent = `Response saved locally. Source revealed: ${stimulus.sourceLabel}. This perception record is one evidence layer; Phase 2 compares such interpretations with measured environmental conditions and observed activity.`;
    updateStoredState();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % ratingStimuli.length;
    showStimulus();
  });

  downloadButton.addEventListener('click', () => {
    const records = loadRatingRecords(window.localStorage);
    if (records.length === 0) return;

    const blob = new Blob([ratingsToCsv(records)], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tdg1089-nightscape-ratings.csv';
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });

  clearButton.addEventListener('click', () => {
    if (!window.confirm('Clear all TDG 1089 rating responses saved in this browser?')) return;
    window.localStorage.removeItem(STORAGE_KEY);
    feedback.hidden = false;
    feedback.textContent = 'Local rating data cleared.';
    updateStoredState();
  });

  updateStoredState();
}

function initialiseSectionNavigation() {
  const links = [...document.querySelectorAll('.site-nav a')];
  const targets = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;

    for (const link of links) {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
    }
  }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.4] });

  for (const target of targets) observer.observe(target);
}

initialiseImageComparison();
initialiseTabs('[data-analysis-target]', '.analysis-panel', 'analysisTarget');
initialiseTabs('[data-design-target]', '.design-panel', 'designTarget');
initialiseRatingLab();
initialiseSectionNavigation();
