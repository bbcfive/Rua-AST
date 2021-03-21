/* eslint-disable no-undef */
const compiler = require('../src/compiler');
const testInput = 'let a = 1';
const testInput2 = '∂ƒ a = 1';
const testTokens = [
  { type: 'Keyword', value: 'let' },
  { type: 'Identifier', value: 'a' },
  { type: 'Punctuator', value: '= ' },
  { type: 'Numeric', value: '1' }
];

describe('compiler', () => {
  it('test compiler with right input', () => {
    const tokens = compiler(testInput);
    expect(tokens).toStrictEqual(testTokens);
  });

  it('test compiler with invalid input', () => {
    const tokens2 = () => {
      compiler(testInput2);
    };
    expect(tokens2).toThrow(TypeError);
  });
});

module.exports = testTokens;