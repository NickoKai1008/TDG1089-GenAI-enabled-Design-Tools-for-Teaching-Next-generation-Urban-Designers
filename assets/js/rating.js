export const RATING_DIMENSIONS = [
  'safety',
  'liveliness',
  'beauty',
  'wealthiness',
  'depressing',
  'boring',
];

export const STORAGE_KEY = 'tdg1089-nightscape-ratings';

export function createRatingRecord(
  stimulusId,
  ratings,
  sourceType = 'anonymous',
  now = new Date(),
) {
  if (!stimulusId) {
    throw new Error('A stimulus identifier is required.');
  }

  const checkedRatings = {};
  for (const dimension of RATING_DIMENSIONS) {
    const value = Number(ratings?.[dimension]);
    if (!Number.isFinite(value)) {
      throw new Error(`A numeric ${dimension} rating is required.`);
    }
    if (value < 1 || value > 10) {
      throw new Error(`${dimension} must be between 1 and 10.`);
    }
    checkedRatings[dimension] = value;
  }

  return {
    stimulusId,
    sourceType,
    ratings: checkedRatings,
    savedAt: now.toISOString(),
  };
}

export function loadRatingRecords(storage) {
  const stored = storage.getItem(STORAGE_KEY);
  if (!stored) {
    return [];
  }

  try {
    const records = JSON.parse(stored);
    return Array.isArray(records) ? records : [];
  } catch {
    return [];
  }
}

export function saveRatingRecord(storage, record) {
  const records = loadRatingRecords(storage);
  records.push(record);
  storage.setItem(STORAGE_KEY, JSON.stringify(records));
  return records;
}

function csvCell(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function ratingsToCsv(records) {
  const header = [
    'stimulus_id',
    'source_type',
    ...RATING_DIMENSIONS,
    'saved_at',
  ];
  const rows = records.map((record) => [
    record.stimulusId,
    record.sourceType,
    ...RATING_DIMENSIONS.map((dimension) => record.ratings[dimension]),
    record.savedAt,
  ]);

  return [header, ...rows]
    .map((row) => row.map(csvCell).join(','))
    .join('\n') + '\n';
}
