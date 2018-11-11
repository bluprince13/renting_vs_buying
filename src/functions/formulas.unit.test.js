import {
  getRange,
  getPercentage,
  getPercentageEachYear,
  getCumulative,
  getSimpleInterest,
  getCompoundInterest,
  getPresentValue,
  getFutureValue,
  getValueEachYear,
  getPresentValueEachPeriod,
  getDiscountFactor,
  getLoanPaymentMonthly,
  getDebtEachYear,
  getValueArray,
  setInitialZero,
} from './formulas'

test('gets percentage of a reference', () => {
  expect(getPercentage(100, 10)).toBe(10);
});

test('gets value each year', () => {
  expect(getPercentageEachYear([100, 200], 10)).toEqual([10, 20]);
});

test('gets range [1, 2] starting at 1 and ending at 2', () => {
  expect(getRange(1, 2)).toEqual([1, 2]);
});

test('gets cumulative array', () => {
  expect(getCumulative([1, 2])).toEqual([1, 3]);
});

test('gets simple interest', () => {
  expect(getSimpleInterest(1000, 10, 2)).toEqual(200);
});

test('gets compound interest', () => {
  expect(getCompoundInterest(1000, 10, 2)).toBeCloseTo(210);
});

test('gets present value', () => {
  expect(getPresentValue(1210, 10, 2)).toBeCloseTo(1000);
});

test('gets future value', () => {
  expect(getFutureValue(1000, 10, 2)).toBeCloseTo(1210);
});

test('gets value each year', () => {
  expect(getValueEachYear(1000, 10, 2)[0]).toBeCloseTo(1000);
  expect(getValueEachYear(1000, 10, 2)[1]).toBeCloseTo(1100);
});

test('gets present value each year', () => {
  expect(getPresentValueEachPeriod([1000, 1100], 10)[0]).toBeCloseTo(1000);
  expect(getPresentValueEachPeriod([1000, 1100], 10)[1]).toBeCloseTo(1000);
});

test('gets discount factor', () => {
  expect(getDiscountFactor(6, 30)).toBeCloseTo(166.7916);
});

test('gets monthly loan payment', () => {
  expect(getLoanPaymentMonthly(100000, 6, 30)).toBeCloseTo(599.55);
});

test('gets debt each year', () => {
  expect(getDebtEachYear(100000, 6, 30)[0]).toBeCloseTo(100000);
  expect(getDebtEachYear(100000, 6, 30).slice(-1)[0]).toBeCloseTo(0);
});

test('get value array', () => {
  expect(getValueArray(1, 2)).toEqual([1, 1]);
});

test('set initial zero', () => {
  expect(setInitialZero([1, 2])).toEqual([0, 1]);
});