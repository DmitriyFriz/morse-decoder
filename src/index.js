const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const DECODING_TABLE = {
  '10': '.',
  '11': '-',
  '00': '',
}

function decode(expr) {
  let phrase = '';
  let arr = expr.match(/(.{1,10})/gi);

  for (str of arr) {
    if (str == '**********'){
      phrase += ' ' ;
      continue;
    }
    let arrWithCodes = str.match(/(.{1,2})/gi);
    let char = '';
    for (code of arrWithCodes) {
      char += DECODING_TABLE[code];
    }
    phrase += MORSE_TABLE[char];
  }
  return phrase;
}

module.exports = {
    decode
}
