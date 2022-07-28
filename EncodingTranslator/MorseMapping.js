const CHAR_TO_MORSE_MAP = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    ZERO: '-----',
    ONE: '.----',
    TWO: '..---',
    THREE: '...--',
    FOUR: '....-',
    FIVE: '.....',
    SIX: '-....',
    SEVEN: '--...',
    EIGHT: '---..',
    NINE: '----.'
}

const MORSE_TO_CHAR_MAP = new Map([
    [CHAR_TO_MORSE_MAP['A'], 'A' ],    
    [CHAR_TO_MORSE_MAP['B'], 'B' ],
    [CHAR_TO_MORSE_MAP['C'], 'C' ],
    [CHAR_TO_MORSE_MAP['D'], 'D' ],
    [CHAR_TO_MORSE_MAP['E'], 'E' ],
    [CHAR_TO_MORSE_MAP['F'], 'F' ],
    [CHAR_TO_MORSE_MAP['G'], 'G' ],
    [CHAR_TO_MORSE_MAP['H'], 'H' ],
    [CHAR_TO_MORSE_MAP['I'], 'I' ],
    [CHAR_TO_MORSE_MAP['J'], 'J' ],
    [CHAR_TO_MORSE_MAP['K'], 'K' ],
    [CHAR_TO_MORSE_MAP['L'], 'L' ],
    [CHAR_TO_MORSE_MAP['M'], 'M' ],
    [CHAR_TO_MORSE_MAP['N'], 'N' ],
    [CHAR_TO_MORSE_MAP['O'], 'O' ],
    [CHAR_TO_MORSE_MAP['P'], 'P' ],
    [CHAR_TO_MORSE_MAP['Q'], 'Q' ],
    [CHAR_TO_MORSE_MAP['R'], 'R' ],
    [CHAR_TO_MORSE_MAP['S'], 'S' ],
    [CHAR_TO_MORSE_MAP['T'], 'T' ],
    [CHAR_TO_MORSE_MAP['U'], 'U' ],
    [CHAR_TO_MORSE_MAP['V'], 'V' ],
    [CHAR_TO_MORSE_MAP['W'], 'W' ],
    [CHAR_TO_MORSE_MAP['X'], 'X' ],
    [CHAR_TO_MORSE_MAP['Y'], 'Y' ],
    [CHAR_TO_MORSE_MAP['Z'], 'Z' ],
    ])


function translateMorseToLetter(val) { 
    return MORSE_TO_CHAR_MAP.get(val)
}

function translateLetterToMorse(val) {
    return CHAR_TO_MORSE_MAP[val]
}