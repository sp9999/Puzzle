/*
      A   |   B   |   C   |   D   |   E   |
        * | *   * | *     | * * * | * * * |
        * | *   * | *     |     * | *   * |
    * * * | * * * | * * * | * * * | * * * |

      F   |   G   |   H   |   I   |   J   |
    * * * | * * * | * * * | * * * |     * |
    *     |     * | *   * | *     |   . * |
    * * * |     * | *   * | *     | * * * |

      K   |   L   |   M   |   N   |   O   |
    *   * | *     | * * * | * * * | * * * |
    * . * | * .   |   . * | * . * | * .   |
    * * * | * * * | * * * | * * * | * * * |

      P   |   Q   |   R   |   S   |   T   |
    * * * | * * * | * * * | *   * | *     |
      . * | * . * | * .   |   *   |   *   |
        * | *   * | *     |       | *     |

      U   |   V   |   W   |   X   |   Y   |
        * |       | * . * | *     |     * |
      *   |   *   |   *   | . *   |   * . |
        * | *   * |       | *     |     * |


      Z   |
          |
      *   |
    * . * |
*/

const CHAR_TO_PIGPEN_MAP = {
    A: '00110-00000',
    B: '01110-00000',
    C: '01010-00000',
    D: '10110-00000',
    E: '11110-00000',
    F: '11010-00000',
    G: '10100-00000',
    H: '11100-00000',
    I: '11000-00000',
    J: '00111-00000',
    K: '01111-00000',
    L: '01011-00000',
    M: '10111-00000',
    N: '11111-00000',
    O: '11011-00000',
    P: '10101-00000',
    Q: '11101-00000',
    R: '11001-00000',
    S: '00000-11000',
    T: '00000-10100',
    U: '00000-01010',
    V: '00000-00110',
    W: '00000-11001',
    X: '00000-10101',
    Y: '00000-01011',
    Z: '00000-00111'
}

const PIGPEN_CHAR_MAP = new Map([
    [CHAR_TO_PIGPEN_MAP['A'], 'A' ],    
    [CHAR_TO_PIGPEN_MAP['B'], 'B' ],
    [CHAR_TO_PIGPEN_MAP['C'], 'C' ],
    [CHAR_TO_PIGPEN_MAP['D'], 'D' ],
    [CHAR_TO_PIGPEN_MAP['E'], 'E' ],
    [CHAR_TO_PIGPEN_MAP['F'], 'F' ],
    [CHAR_TO_PIGPEN_MAP['G'], 'G' ],
    [CHAR_TO_PIGPEN_MAP['H'], 'H' ],
    [CHAR_TO_PIGPEN_MAP['I'], 'I' ],
    [CHAR_TO_PIGPEN_MAP['J'], 'J' ],
    [CHAR_TO_PIGPEN_MAP['K'], 'K' ],
    [CHAR_TO_PIGPEN_MAP['L'], 'L' ],
    [CHAR_TO_PIGPEN_MAP['M'], 'M' ],
    [CHAR_TO_PIGPEN_MAP['N'], 'N' ],
    [CHAR_TO_PIGPEN_MAP['O'], 'O' ],
    [CHAR_TO_PIGPEN_MAP['P'], 'P' ],
    [CHAR_TO_PIGPEN_MAP['Q'], 'Q' ],
    [CHAR_TO_PIGPEN_MAP['R'], 'R' ],
    [CHAR_TO_PIGPEN_MAP['S'], 'S' ],
    [CHAR_TO_PIGPEN_MAP['T'], 'T' ],
    [CHAR_TO_PIGPEN_MAP['U'], 'U' ],
    [CHAR_TO_PIGPEN_MAP['V'], 'V' ],
    [CHAR_TO_PIGPEN_MAP['W'], 'W' ],
    [CHAR_TO_PIGPEN_MAP['X'], 'X' ],
    [CHAR_TO_PIGPEN_MAP['Y'], 'Y' ],
    [CHAR_TO_PIGPEN_MAP['Z'], 'Z' ],
    ])

var toggleTop = false
var toggleLeft = false
var toggleRight = false 
var toggleBottom = false 
var toggleSquareDot = false
var toggleNW = false 
var toggleNE = false 
var toggleSW = false 
var toggleSE = false 
var toggleNDot = false 
var toggleWDot = false 
var toggleEDot = false 
var toggleSDot = false 

var lineThicknessOn = 20
var crossThicknessOn = lineThicknessOn / 3

var topEdgesIndex = ['0', '1', '2']
var leftEdgesIndex = ['0', '3', '5']
var rightEdgesIndex = ['2', '4', '7']
var botEdgesIndex = ['5', '6', '7']


function clearBox() {
    toggleTop = false
    toggleLeft = false
    toggleRight = false 
    toggleBottom = false 
    toggleSquareDot = false
    document.getElementById("pigpenSquareDot").checked = false

    redrawTopLine()
    redrawLeftLine()
    redrawRightLine()
    redrawBottomLine()
}

function clearCross() {
    toggleNW = false 
    toggleNE = false 
    toggleSW = false 
    toggleSE = false 
    toggleNDot = false
    toggleWDot = false
    toggleEDot = false
    toggleSDot = false
    document.getElementById("pigpenCrossDotN").checked = false
    document.getElementById("pigpenCrossDotW").checked = false
    document.getElementById("pigpenCrossDotE").checked = false
    document.getElementById("pigpenCrossDotS").checked = false

    redrawNWLine()
    redrawNELine()
    redrawSWLine()
    redrawSELine()
    redrawCrossCenter()
}

function clearAllPigpenCanvas() {
    clearBox()
    clearCross()
}

function updatePigpenCanvas(binary) {
    if (binary.length != 11)
        return

    clearBox()
    clearCross()

    toggleTop =         !!+binary[0]
    toggleLeft =        !!+binary[1]
    toggleRight =       !!+binary[2]
    toggleBottom =      !!+binary[3]
    toggleSquareDot =   !!+binary[4]
    toggleNW =          !!+binary[6]
    toggleNE =          !!+binary[7]
    toggleSW =          !!+binary[8]
    toggleSE =          !!+binary[9]
    toggleNDot =        !!+binary[10] && !!+binary[6] && !!+binary[7]
    toggleWDot =        !!+binary[10] && !!+binary[6] && !!+binary[8]
    toggleEDot =        !!+binary[10] && !!+binary[7] && !!+binary[9]
    toggleSDot =        !!+binary[10] && !!+binary[8] && !!+binary[9]

    redrawPigpen()    
}

function getPigpenBinary() {
    var binary = ''
    binary += toggleTop ? '1': '0'
    binary += toggleLeft ? '1': '0'
    binary += toggleRight ? '1': '0'
    binary += toggleBottom ? '1': '0'
    binary += toggleSquareDot ? '1': '0'
    binary += '-'
    binary += toggleNW ? '1': '0'
    binary += toggleNE ? '1': '0'
    binary += toggleSW ? '1': '0'
    binary += toggleSE ? '1': '0'
    binary += checkCrossDot() ? '1': '0'

    return binary
}

function translateLetterToPigpen(val) {
    return CHAR_TO_PIGPEN_MAP[val]
}

function checkCrossDot() {
    return ((toggleNW && toggleNE && toggleNDot) ||
            (toggleNW && toggleSW && toggleWDot) ||
            (toggleNE && toggleSE && toggleEDot) ||
            (toggleSW && toggleSE && toggleSDot))
}

function evaluatePigpenLetter() {
    return PIGPEN_CHAR_MAP.get(getPigpenBinary())
}

function toggleSquareDotRadio() {
    toggleSquareDot = !toggleSquareDot
    document.getElementById("pigpenSquareDot").checked = toggleSquareDot
    clearCross()
    validatePigpenInput()
}


function toggleTopLeftLine() {
    if (toggleTop == toggleLeft)
        toggleTop = toggleLeft = !toggleLeft
    else if (toggleTop && !toggleLeft)
        toggleLeft = !toggleLeft
    else if (!toggleTop && toggleLeft)
        toggleTop = !toggleTop

    redrawTopLine()
    redrawLeftLine()
    clearCross()
    validatePigpenInput()
}

function toggleTopRightLine() {
    if (toggleTop == toggleRight)
        toggleTop = toggleRight = !toggleRight
    else if (toggleTop && !toggleRight)
        toggleRight = !toggleRight
    else if (!toggleTop && toggleRight)
        toggleTop = !toggleTop

    redrawTopLine()
    redrawRightLine()
    clearCross()
    validatePigpenInput()
}

function toggleBottomLeftLine() {
    if (toggleBottom == toggleLeft)
        toggleBottom = toggleLeft = !toggleLeft
    else if (toggleBottom && !toggleLeft)
        toggleLeft = !toggleLeft
    else if (!toggleBottom && toggleLeft)
        toggleBottom = !toggleBottom

    redrawBottomLine()
    redrawLeftLine()
    clearCross()
    validatePigpenInput()
}

function toggleBottomRightLine() {
    if (toggleBottom == toggleRight)
        toggleBottom = toggleRight = !toggleRight
    else if (toggleBottom && !toggleRight)
        toggleRight = !toggleRight
    else if (!toggleBottom && toggleRight)
        toggleBottom = !toggleBottom

    redrawBottomLine()
    redrawRightLine()
    clearCross()
    validatePigpenInput()
}

function toggleTopLine() {
    toggleTop = !toggleTop 
    redrawTopLine()
    clearCross()
    validatePigpenInput()
}

function toggleLeftLine() {
    toggleLeft = !toggleLeft
    redrawLeftLine()
    clearCross()
    validatePigpenInput()
}

function toggleRightLine() {
    toggleRight = !toggleRight
    redrawRightLine()
    clearCross()
    validatePigpenInput()
}

function toggleBottomLine() {
    toggleBottom = !toggleBottom
    redrawBottomLine()
    clearCross()
    validatePigpenInput()
}

function toggleNWLine() {
    toggleNW = !toggleNW 
    redrawNWLine()
    clearBox()
    validatePigpenInput()
}

function toggleNELine() {
    toggleNE = !toggleNE
    redrawNELine()
    clearBox()
    validatePigpenInput()
}

function toggleSWLine() {
    toggleSW = !toggleSW
    redrawSWLine()
    clearBox()
    validatePigpenInput()
}

function toggleSELine() {
    toggleSE = !toggleSE
    redrawSELine()
    clearBox()
    validatePigpenInput()
}

function toggleCrossNDotRadio() {
    toggleEDot = false
    toggleWDot = false
    toggleSDot = false
    toggleNDot = !toggleNDot
    document.getElementById("pigpenCrossDotN").checked = toggleNDot
    if (!toggleNW)
        toggleNWLine()
    if (!toggleNE)
        toggleNELine()
    clearBox()
    validatePigpenInput()
}

function toggleCrossEDotRadio() {
    toggleNDot = false
    toggleWDot = false
    toggleSDot = false
    toggleEDot = !toggleEDot
    document.getElementById("pigpenCrossDotE").checked = toggleEDot
    if (!toggleNE)
        toggleNELine()
    if (!toggleSE)
        toggleSELine()
    clearBox()
    validatePigpenInput()
}

function toggleCrossWDotRadio() {
    toggleNDot = false
    toggleEDot = false
    toggleSDot = false
    toggleWDot = !toggleWDot
    document.getElementById("pigpenCrossDotW").checked = toggleWDot
    if (!toggleNW)
        toggleNWLine()
    if (!toggleSW)
        toggleSWLine()
    clearBox()
    validatePigpenInput()
}

function toggleCrossSDotRadio() {
    toggleNDot = false
    toggleEDot = false
    toggleWDot = false
    toggleSDot = !toggleSDot
    document.getElementById("pigpenCrossDotS").checked = toggleSDot
    if (!toggleSW)
        toggleSWLine()
    if (!toggleSE)
        toggleSELine()
    clearBox()
    validatePigpenInput()
}

function redrawPigpen() {
    redrawTopLine()
    redrawLeftLine()
    redrawRightLine()
    redrawBottomLine()
    document.getElementById("pigpenSquareDot").checked = toggleSquareDot
    
    redrawNWLine()
    redrawNELine()
    redrawSWLine()
    redrawSELine()
    redrawCrossCenter()
    document.getElementById("pigpenCrossDotN").checked = toggleNDot
    document.getElementById("pigpenCrossDotE").checked = toggleEDot
    document.getElementById("pigpenCrossDotW").checked = toggleWDot
    document.getElementById("pigpenCrossDotS").checked = toggleSDot
}

function redrawTopLine() {
    if (toggleTop) 
        drawTopLine(lineThicknessOn)    
    else {
        clearTopLine()
        drawTopLine()
    }
}

function redrawLeftLine() {
    if (toggleLeft) 
        drawLeftLine(lineThicknessOn)    
    else {
        clearLeftLine()
        drawLeftLine()
    }
}

function redrawRightLine() {
    if (toggleRight)
        drawRightLine(lineThicknessOn)
    else {
        clearRightLine()
        drawRightLine()
    }
}

function redrawBottomLine() {
    if (toggleBottom)
        drawBottomLine(lineThicknessOn)
    else {
        clearBottomLine()
        drawBottomLine()
    }
}

function redrawNWLine() {
    if (toggleNW) {
        toggleSE = false
        redrawSELine()
        drawNWLine(crossThicknessOn)            
    } else {
        clearNWLine()
        drawNWLine()
    }
}

function redrawNELine() {
    if (toggleNE) {
        toggleSW = false
        redrawSWLine()
        drawNELine(crossThicknessOn)            
    } else {
        clearNELine()
        drawNELine()
    }
}

function redrawSWLine() {
    if (toggleSW) {
        toggleNE = false
        redrawNELine()
        drawSWLine(crossThicknessOn)
    } else {
        clearSWLine()
        drawSWLine()
    }
}

function redrawSELine() {
    if (toggleSE) {
        toggleNW = false
        redrawNWLine()
        drawSELine(crossThicknessOn)
    } else {
        clearSELine()
        drawSELine()
    }
}

function redrawCrossCenter() {    
    clearCrossCenter()
    drawCrossCenter()    
}

function clearTopLine() {
    drawTopLine(0)
    if (toggleLeft)
        drawLeftLine(lineThicknessOn)
    else
        drawLeftLine()
    if (toggleRight) 
        drawRightLine(lineThicknessOn)
    else
        drawRightLine()
}

function clearLeftLine() {
    drawLeftLine(0)
    if (toggleTop)
        drawTopLine(lineThicknessOn)
    else
        drawTopLine()
    if (toggleBottom) 
        drawBottomLine(lineThicknessOn)
    else
        drawBottomLine()
}

function clearRightLine() {
    drawRightLine(0)
    if (toggleTop)
        drawTopLine(lineThicknessOn)
    else
        drawTopLine()
    if (toggleBottom) 
        drawBottomLine(lineThicknessOn)
    else
        drawBottomLine()
}

function clearBottomLine() {
    drawBottomLine(0)
    if (toggleLeft)
        drawLeftLine(lineThicknessOn)
    else
        drawLeftLine()
    if (toggleRight) 
        drawRightLine(lineThicknessOn)
    else
        drawRightLine()
}

function clearNWLine() {
    drawNWLine(0)    
}

function clearNELine() {
    drawNELine(0)    
}

function clearSWLine() {
    drawSWLine(0)    
}

function clearSELine() {
    drawSELine(0)    
}

function clearCrossCenter() {
    drawCrossCenter(0)    
}

function drawTopLine(thickness = 1) {
    var canvas = new Array()
    for (var i = 0; i < 3; ++i) {
        canvas.push(document.querySelector('#pigpenSquare' + topEdgesIndex[i]))
    }    
    
    for (var i = 0; i < 3; ++i) {
        if (!canvas[i].getContext) {
            return
        }

        const ctx = canvas[i].getContext('2d')

        // set line stroke and line width
        ctx.strokeStyle = 'black'
        ctx.lineWidth = thickness
        if (thickness == 0) {
            ctx.clearRect(0, 0, canvas[i].width, canvas[i].height)
        } else {
            // draw a line
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(25, 0);
            ctx.stroke();
        }
    }
}

function drawBottomLine(thickness = 1) {
    var canvas = new Array()
    for (var i = 0; i < 3; ++i) {
        canvas.push(document.querySelector('#pigpenSquare' + botEdgesIndex[i]))
    }
    
    for (var i = 0; i < 3; ++i) {
        if (!canvas[i].getContext) {
            return
        }

        const ctx = canvas[i].getContext('2d')

        // set line stroke and line width
        ctx.strokeStyle = 'black'
        ctx.lineWidth = thickness
        if (thickness == 0) {
            ctx.clearRect(0, 0, canvas[i].width, canvas[i].height)
        } else {
            // draw a line
            ctx.beginPath()
            ctx.moveTo(0, 25)
            ctx.lineTo(25, 25)
            ctx.stroke()
        }
    }
}

function drawLeftLine(thickness = 1) {
    var canvas = new Array()
    for (var i = 0; i < 3; ++i) {
        canvas.push(document.querySelector('#pigpenSquare' + leftEdgesIndex[i]))
    }
    
    for (var i = 0; i < 3; ++i) {
        if (!canvas[i].getContext) {
            return
        }

        const ctx = canvas[i].getContext('2d')

        // set line stroke and line width
        ctx.strokeStyle = 'black'
        ctx.lineWidth = thickness
        if (thickness == 0) {
            ctx.clearRect(0, 0, canvas[i].width, canvas[i].height)
        } else {
            // draw a line
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(0, 25)
            ctx.stroke()
        }
    }
}

function drawRightLine(thickness = 1) {
    var canvas = new Array()
    for (var i = 0; i < 3; ++i) {
        canvas.push(document.querySelector('#pigpenSquare' + rightEdgesIndex[i]))
    }
    
    for (var i = 0; i < 3; ++i) {
        if (!canvas[i].getContext) {
            return
        }

        const ctx = canvas[i].getContext('2d')

        // set line stroke and line width
        ctx.strokeStyle = 'black'
        ctx.lineWidth = thickness
        if (thickness == 0) {
            ctx.clearRect(0, 0, canvas[i].width, canvas[i].height)
        } else {
            // draw a line
            ctx.beginPath()
            ctx.moveTo(25, 0)
            ctx.lineTo(25, 25)
            ctx.stroke()
        }
    }
}

function drawNWLine(thickness = 1) {
    var canvas = document.querySelector('#pigpenCross0')    
    
    if (!canvas.getContext) {
        return
    }

    const ctx = canvas.getContext('2d')

    // set line stroke and line width
    ctx.strokeStyle = 'black'
    ctx.lineWidth = thickness
    if (thickness == 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    } else {
        // draw a line
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(25, 25);
        ctx.stroke();
    }    
    drawCrossCenter(thickness)
}

function drawNELine(thickness = 1) {
    var canvas = document.querySelector('#pigpenCross1')    
    
    if (!canvas.getContext) {
        return
    }

    const ctx = canvas.getContext('2d')

    // set line stroke and line width
    ctx.strokeStyle = 'black'
    ctx.lineWidth = thickness
    if (thickness == 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    } else {
        // draw a line
        ctx.beginPath();
        ctx.moveTo(25, 0);
        ctx.lineTo(0, 25);
        ctx.stroke();
    }    
    drawCrossCenter(thickness)
}

function drawSWLine(thickness = 1) {
    var canvas = document.querySelector('#pigpenCross2')    
    
    if (!canvas.getContext) {
        return
    }

    const ctx = canvas.getContext('2d')

    // set line stroke and line width
    ctx.strokeStyle = 'black'
    ctx.lineWidth = thickness
    if (thickness == 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    } else {
        // draw a line
        ctx.beginPath();
        ctx.moveTo(25, 0);
        ctx.lineTo(0, 25);
        ctx.stroke();
    }    
    drawCrossCenter(thickness)
}

function drawSELine(thickness = 1) {
    var canvas = document.querySelector('#pigpenCross3')    
    
    if (!canvas.getContext) {
        return
    }

    const ctx = canvas.getContext('2d')

    // set line stroke and line width
    ctx.strokeStyle = 'black'
    ctx.lineWidth = thickness
    if (thickness == 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    } else {
        // draw a line
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(25, 25);
        ctx.stroke();
    }    
    drawCrossCenter(thickness)
}

function drawCrossCenter(thickness = 1) {
    var canvas = document.querySelector('#pigpenCrossCenter')    
    
    if (!canvas.getContext) {
        return
    }

    const ctx = canvas.getContext('2d')

    // set line stroke and line width
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1
    ctx.lineCap = 'square'
    if (thickness == 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    } else {
        // draw a line
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(25, 25);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 25);
        ctx.lineTo(25, 0);
        ctx.stroke();

        if (toggleNW) {
            ctx.lineWidth = crossThicknessOn
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(12.5, 12.5);
            ctx.stroke();
        }
        if (toggleNE) {
            ctx.lineWidth = crossThicknessOn
            ctx.beginPath();
            ctx.moveTo(25, 0);
            ctx.lineTo(12.5, 12.5);
            ctx.stroke();
        }
        if (toggleSW) {
            ctx.lineWidth = crossThicknessOn
            ctx.beginPath();
            ctx.moveTo(0, 25);
            ctx.lineTo(12.5, 12.5);
            ctx.stroke();
        }
        if (toggleSE) {
            ctx.lineWidth = crossThicknessOn
            ctx.beginPath();
            ctx.moveTo(25, 25);
            ctx.lineTo(12.5, 12.5);
            ctx.stroke();
        }
    }    
}

clearAllPigpenCanvas()
