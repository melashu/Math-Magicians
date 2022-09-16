import calculate from "../../logic/calculate";

describe('Return Calculator Result base on Button Pressed', () => {
  test('Return Total of 38 if equals button is pressed with object containing 34 + 4', () => {
    const obj = {
      total: 34,
      next: 4,
      operation: '+',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('38');
  });

  test('Check if AC button can clear every fields', () => {
    const obj = {
      total: 34,
      next: 4,
      operation: '+',
    };
    const result = calculate(obj, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});