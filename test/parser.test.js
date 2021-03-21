/* eslint-disable no-undef */
const parse = require('../src/parser');

const expectedAst = {
  statements: [
    { initializer: { left: { name: 'good' }, op: '+', right: { name: 'girl' } }, name: 'cece' },
    {
      argument: {
        left: {
          left: { left: { name: 'cece' }, op: '*', right: { name: '2' } },
          op: '*',
          right: { name: '2' },
        },
        op: '-',
        right: {
          op: '-',
          operand: { op: 'abs', operand: { left: { name: '1' }, op: '/', right: { name: '2' } } },
        },
      },
    },
  ],
};

describe('parser', () => {
  it('test parser with matched input', () => {
    const userInput = 'let cece = good + girl print cece * 2 * 2 -- abs ((((1)) / 2))';
    const ast = parse(userInput);

    expect(ast).toEqual(expectedAst);
  });

  it('test parser with invalid input', () => {
    const userInput = '(2+4)*7';
    const ast2 = () => {
      parse(userInput);
    };
    expect(ast2).toThrow(Error);
  });
});