const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}

const MORSE_LETTERS = {
  '00': '',
  10: '.',
  11: '-',
}

const SPACE = '**********'

const morseReplacer = (match) => {
  return MORSE_LETTERS[match]
}

function decode(expr) {
  const letterArr = expr.match(/.{10}/g)

  const morseCode = letterArr.map((letter) =>
    letter.replace(/[0-1]{2}/g, morseReplacer)
  )

  const resultStr = morseCode
    .map((letter) => {
      if (letter === SPACE) {
        return ' '
      } else {
        return MORSE_TABLE[letter]
      }
    })
    .join('')

  return resultStr
}

module.exports = {
  decode,
}
