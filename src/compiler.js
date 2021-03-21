const compiler = (input) => {
  let index = 0;
  let tokens = [];

  while (index < input.length) {
    let char = input[index];

    // punctuators checking
    let PUNCTUATOR = /[`~!@#$%^&*()_\-+=<>?:"{}|,.;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im;
    if (PUNCTUATOR.test(char)) {
      let punctuators = char;
      if (char === '=') {
        punctuators += input[++index];
      }
      ++index;
      tokens.push({
        type: 'Punctuator',
        value: punctuators
      });
      continue
    }

    // whitespace checking
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      ++index;
      continue
    }

    // number checking
    let NUMBER = /[0-9]/;
    if (NUMBER.test(char)) {
      let number = '';
      while (NUMBER.test(char)) {
        number += char;
        char = input[++index];
      }

      tokens.push({
        type: 'Numeric',
        value: number
      });
      continue
    }

    // keyword/identifier checking
    let LETTER = /[a-z]/i;
    if (LETTER.test(char)) {
      let letter = '';
      while (LETTER.test(char)) {
        letter += char;
        char = input[++index];
      }

      let KEYWORD = /function|var|return|let|const|if|for|import|class/;
      tokens.push({
        type: KEYWORD.test(letter)? 'Keyword' : 'Identifier',
        value: letter
      });
      continue
    }

    throw new TypeError('Invalid char: ' + char);
  }

  return tokens;
}

module.exports = compiler;