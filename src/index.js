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

function decode(expr) {
    let result = ''
    const chunks = expr.match(/.{1,10}/g)

    for (let chunk of chunks) {
        if (chunk.includes('*')) {
            result += ' '
            continue
        }

        let morseEncoded = ''
        const subChunks = chunk.match(/.{1,2}/g)

        for (let subChunk of subChunks) {
            if (subChunk === '10') { morseEncoded += '.' }
            if (subChunk === '11') { morseEncoded += '-' }
        }

        result += MORSE_TABLE[morseEncoded]
    }

    return result
}

module.exports = {
    decode
}