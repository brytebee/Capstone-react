import { formatNumber } from '../pages/Home';

describe('Format given numbers', () => {
  test('Format 100000 to 100,000', () => {
    expect(formatNumber('100000')).toBe('100,000');
  });
  test('Format 45861520 to 45,861,520', () => {
    expect(formatNumber('45861520')).toBe('45,861,520');
  });

  test('Format 20 to 20', () => {
    expect(formatNumber('20')).toBe('20');
  });

  test('Format -18100000 to -18,100,000', () => {
    expect(formatNumber('-18100000')).toBe('-18,100,000');
  });

  test('Format 1586313.256 to 1,586,313.256', () => {
    expect(formatNumber('1586313.256')).toBe('1,586,313.256');
  });
});
