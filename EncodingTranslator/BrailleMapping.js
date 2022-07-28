/*
     A  |  B  |  C  |  D  |  E  |
    * . | * . | * * | * * | * . |
    . . | * . | . . | . * | . * |
    . . | . . | . . | . . | . . |

     F  |  G  |  H  |  I  |  J  |
    * * | * * | * . | . * | . * |
    * . | * * | * * | * . | * * |
    . . | . . | . . | . . | . . |

     K  |  L  |  M  |  N  |  O  |
    * . | * . | * * | * * | * . |
    . . | * . | . . | . * | . * |
    * . | * . | * . | * . | * . |

     P  |  Q  |  R  |  S  |  T  |
    * * | * * | * . | . * | . * |
    * . | * * | * * | * . | * * |
    * . | * . | * . | * . | * . |    

     U  |  V  |  W  |  X  |  Y  |
    * . | * . | . * | * * | * * |
    . . | * . | * * | . . | . * |
    * * | * * | . * | * * | * * |    

     Z  |
    * . |
    . * |
    * * |
*/

const CHAR_TO_BRAILLE_MAP = {
    A: '100000',
    B: '101000',
    C: '110000',
    D: '110100',
    E: '100100',
    F: '111000',
    G: '111100',
    H: '101100',
    I: '011000',
    J: '011100',
    K: '100010',
    L: '101010',
    M: '110010',
    N: '110110',
    O: '100110',
    P: '111010',
    Q: '111110',
    R: '101110',
    S: '011010',
    T: '011110',
    U: '100011',
    V: '101011',
    W: '011101',
    X: '110011',
    Y: '110111',
    Z: '100111'
}

const BRAILLE_TO_CHAR_MAP = new Map([
    [CHAR_TO_BRAILLE_MAP['A'], 'A' ],    
    [CHAR_TO_BRAILLE_MAP['B'], 'B' ],
    [CHAR_TO_BRAILLE_MAP['C'], 'C' ],
    [CHAR_TO_BRAILLE_MAP['D'], 'D' ],
    [CHAR_TO_BRAILLE_MAP['E'], 'E' ],
    [CHAR_TO_BRAILLE_MAP['F'], 'F' ],
    [CHAR_TO_BRAILLE_MAP['G'], 'G' ],
    [CHAR_TO_BRAILLE_MAP['H'], 'H' ],
    [CHAR_TO_BRAILLE_MAP['I'], 'I' ],
    [CHAR_TO_BRAILLE_MAP['J'], 'J' ],
    [CHAR_TO_BRAILLE_MAP['K'], 'K' ],
    [CHAR_TO_BRAILLE_MAP['L'], 'L' ],
    [CHAR_TO_BRAILLE_MAP['M'], 'M' ],
    [CHAR_TO_BRAILLE_MAP['N'], 'N' ],
    [CHAR_TO_BRAILLE_MAP['O'], 'O' ],
    [CHAR_TO_BRAILLE_MAP['P'], 'P' ],
    [CHAR_TO_BRAILLE_MAP['Q'], 'Q' ],
    [CHAR_TO_BRAILLE_MAP['R'], 'R' ],
    [CHAR_TO_BRAILLE_MAP['S'], 'S' ],
    [CHAR_TO_BRAILLE_MAP['T'], 'T' ],
    [CHAR_TO_BRAILLE_MAP['U'], 'U' ],
    [CHAR_TO_BRAILLE_MAP['V'], 'V' ],
    [CHAR_TO_BRAILLE_MAP['W'], 'W' ],
    [CHAR_TO_BRAILLE_MAP['X'], 'X' ],
    [CHAR_TO_BRAILLE_MAP['Y'], 'Y' ],
    [CHAR_TO_BRAILLE_MAP['Z'], 'Z' ],
    ])

function translateBrailleToLetter(val) { 
    return BRAILLE_TO_CHAR_MAP.get(val)
}

function translateLetterToBraille(val) {
    return CHAR_TO_BRAILLE_MAP[val]
}