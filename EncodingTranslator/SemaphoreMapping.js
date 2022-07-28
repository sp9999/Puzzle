/*
      A   |   B   |   C   |   D   |   E   |
    . . . | . . . | * . . | . * . | . . * |
    .   . | *   . | .   . | .   . | .   . |
    * * . | . * . | . * . | . * . | . * . |

      F   |   G   |   H   |   I   |   J   |
    . . . | . . . | . . . | * . . | . * . |
    .   * | .   . | *   . | .   . | .   * |
    . * . | . * * | * . . | * . . | . . . |

      K   |   L   |   M   |   N   |   O   |
    . * . | . . * | . . . | . . . | * . . |
    .   . | .   . | .   * | .   . | *   . |
    * . . | * . . | * . . | * . * | . . . |

      P   |   Q   |   R   |   S   |   T   |
    . * . | . . * | . . . | . . . | * * . |
    *   . | *   . | *   * | *   . | .   . |
    . . . | . . . | . . . | . . * | . . . |

      U   |   V   |   W   |   X   |   Y   |
    * . * | . * . | . . * | . . * | * . . |
    .   . | .   . | .   * | .   . | .   * |
    . . . | . . * | . . . | . . * | . . . |


      Z   |
    . . . |
    .   * |
    . . * |
*/

const CHAR_TO_SEMAPHORE_MAP = {
    A: '00000110',
    B: '00010010',
    C: '10000010',
    D: '01000010',
    E: '00100010',
    F: '00001010',
    G: '00000011',
    H: '00010100',
    I: '10000100',
    J: '01001000',
    K: '01000100',
    L: '00100100',
    M: '00001100',
    N: '00000101',
    O: '10010000',
    P: '01010000',
    Q: '00110000',
    R: '00011000',
    S: '00010001',
    T: '11000000',
    U: '10100000',
    V: '01000001',
    W: '00101000',
    X: '00100001',
    Y: '10001000',
    Z: '00001001'
}

const SEMAPHORE_TO_CHAR_MAP = new Map([
    [CHAR_TO_SEMAPHORE_MAP['A'], 'A' ],    
    [CHAR_TO_SEMAPHORE_MAP['B'], 'B' ],
    [CHAR_TO_SEMAPHORE_MAP['C'], 'C' ],
    [CHAR_TO_SEMAPHORE_MAP['D'], 'D' ],
    [CHAR_TO_SEMAPHORE_MAP['E'], 'E' ],
    [CHAR_TO_SEMAPHORE_MAP['F'], 'F' ],
    [CHAR_TO_SEMAPHORE_MAP['G'], 'G' ],
    [CHAR_TO_SEMAPHORE_MAP['H'], 'H' ],
    [CHAR_TO_SEMAPHORE_MAP['I'], 'I' ],
    [CHAR_TO_SEMAPHORE_MAP['J'], 'J' ],
    [CHAR_TO_SEMAPHORE_MAP['K'], 'K' ],
    [CHAR_TO_SEMAPHORE_MAP['L'], 'L' ],
    [CHAR_TO_SEMAPHORE_MAP['M'], 'M' ],
    [CHAR_TO_SEMAPHORE_MAP['N'], 'N' ],
    [CHAR_TO_SEMAPHORE_MAP['O'], 'O' ],
    [CHAR_TO_SEMAPHORE_MAP['P'], 'P' ],
    [CHAR_TO_SEMAPHORE_MAP['Q'], 'Q' ],
    [CHAR_TO_SEMAPHORE_MAP['R'], 'R' ],
    [CHAR_TO_SEMAPHORE_MAP['S'], 'S' ],
    [CHAR_TO_SEMAPHORE_MAP['T'], 'T' ],
    [CHAR_TO_SEMAPHORE_MAP['U'], 'U' ],
    [CHAR_TO_SEMAPHORE_MAP['V'], 'V' ],
    [CHAR_TO_SEMAPHORE_MAP['W'], 'W' ],
    [CHAR_TO_SEMAPHORE_MAP['X'], 'X' ],
    [CHAR_TO_SEMAPHORE_MAP['Y'], 'Y' ],
    [CHAR_TO_SEMAPHORE_MAP['Z'], 'Z' ],
    ])

function translateSemaphoreToLetter(val) { 
    return SEMAPHORE_TO_CHAR_MAP.get(val)
}

function translateLetterToSemaphore(val) {
    return CHAR_TO_SEMAPHORE_MAP[val]
}