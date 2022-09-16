import operate from "../../logic/operate";

describe('Test calculations of 2 numbers with different operators', () => {
  test('adds 34 + 4 equals 38', () => {
    expect(operate(34, 4, '+')).toBe('38');
  });
  
  test('subtracts 34 - 4 equals 30', () => {
    expect(operate(34, 4, '-')).toBe('30');
  });

  test('divides 40 ÷ 4 equals 10', () => {
    expect(operate(40, 4, '÷')).toBe('10');
  });

  test('divides 40 ÷ 0 to return error string', () => {
    expect(operate(40, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('multiplies 4 x 4 equals 16', () => {
    expect(operate(4, 4, 'x')).toBe('16');
  });

  test('adds 4 & 4 to throw Error', () => {
    expect(() => operate(4, 4, '&')).toThrow(Error);
  });

});