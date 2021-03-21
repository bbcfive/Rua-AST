// this is a super tiny astBuilder which accepting tokens
// as we use the astBuilder of ohm-js, so this one is not be used for ael program

class AST {
  constructor() {
    Object.assign(this, { type: 'Program', body: [], sourceString: 'script' })
  }
}

const astBuilder = (tokens) => {
  let index = 0;

  const traverse = () => {
    let token = tokens[index];

    // number checking
    if (token.type === 'Numeric') {
      ++index;
      return {
        type: 'Literal',
        value: Number(token.value),
        row: token.value
      };
    }

    // indentifier checking
    if (token.type === 'Identifier') {
      ++index;
      return {
        type: 'Identifier',
        name: token.value,
      };
    }

    // punctuator checking
    let PUNCTUATOR = /[`~!@#$%^&*()_\-+=<>?:"{}|,.;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im;
    if (token.type === 'Punctuator') {
      ++index;
      if (PUNCTUATOR.test(token.value)) {
        return {
          type: 'BinaryExpression',
          operator: token.value,
        };
      }
    }

    // keyword checking
    if (token.type === 'Keyword') {
      let value = token.value;
      if (value === 'let' || value === 'const' || value === 'import' || value === 'class' || value === 'return') {
        ++index;
        let variable = traverse();
        let equal = traverse();
        let rightVar;

        if (equal.operator === '= ') {
          rightVar = traverse();
        } else {
          rightVar = null;
          --index;
        }

        let declaration = {
          type: 'variableDeclarator',
          id: variable,
          init: rightVar
        };

        return {
          type: 'VariableDeclaration',
          declarations: [declaration],
          kind: value,
        };
      }
    }

    throw new TypeError('Invalid type: ' + token.type + ' -> ' + token.value);
  }

  let ast = new AST();

  while (index < tokens.length) {
    ast.body.push(traverse());
  }

  return ast;
}

module.exports = astBuilder;