
// ======================== LETTER ============================

//For letter input box, only allow one character and must be capital alphabet character
function validateLetterInput(input) {
    var finalChar
    if (input.length > 0) {
        var lastChar = input.charAt(input.length - 1)
        if (lastChar.toUpperCase() != lastChar.toLowerCase() ) {
            finalChar = lastChar.toUpperCase()            
        }
        else {
            finalChar = input.substring(0, input.length - 1)
        }

        setLetter(finalChar)
    }
    updateIndex()
    updateBinary()
    updateHexadecimal()
    updateMorse()
    updateBraille()
    updateSemaphore()
    updatePigpen()
    updateMaritime()    
}

function getLetter() {
    return document.getElementById("letterField").value 
}

function setLetter(value) {
    if (value == undefined) {
        value = '-'    
        document.getElementById("nato").innerText = ""
    } else 
        document.getElementById("nato").innerText = translateLetterToNato(value)

    return document.getElementById("letterField").value = value
}

function updateIndex() {
    var val = getLetter()
    if (val.length > 0 && val != '-') 
        document.getElementById("indexField").value = val.charCodeAt(0) - 65 + 1
    else
        document.getElementById("indexField").value = '-'
}

function updateBinary() {
    var val = document.getElementById("indexField").value
    if (val.length > 0  && val != '-') 
        document.getElementById("binaryField").value = Number(val).toString(2)
    else 
        document.getElementById("binaryField").value = '-'
}


function updateHexadecimal() {
    var val = document.getElementById("indexField").value
    if (val.length > 0  && val != '-') 
        document.getElementById("hexadecimalField").value = Number(val).toString(16).toUpperCase()
    else
        document.getElementById("hexadecimalField").value = '-'
}

function updateMorse() {
    var val = getLetter()
    if (val.length > 0  && val != '-')        
        document.getElementById("morseField").value = translateLetterToMorse(val)
    else 
        document.getElementById("morseField").value = ''
}

function updateBraille() {
    var val = getLetter()
    if (val.length > 0  && val != '-')         
        updateBrailleCheckBoxes(translateLetterToBraille(val))
    else
        clearBraille()
}

function updateSemaphore() {
    var val = getLetter()
    clearSemaphore(true) 
    if (val.length > 0  && val != '-')
        updateSemaphoreCheckBoxes(translateLetterToSemaphore(val))    
}

function updatePigpen() {
    var val = getLetter()    
    clearAllPigpenCanvas()
    if (val.length > 0  && val != '-') 
        updatePigpenCanvas(translateLetterToPigpen(val))
}

function updateMaritime() {
    var val = getLetter()    
    clearMaritime()
    if (val.length > 0  && val != '-') 
        setMaritime(val)
}

// ======================== INDEX ============================

function validateIndexInput(input) {
    var finalIndex = input
    if (input.length > 0) {
        //Space bar to clear input field
        var lastChar = input.charAt(input.length - 1)        
        if (lastChar == ' ') {
            finalIndex = ''
        }
        //ignore non-numbers
        else if (isNaN(lastChar)) {
            if (input.length > 0) {
                finalIndex = input.substring(0, input.length - 1)
            }
            else {
                finalIndex= ''
            }
        }
        else if (input.length > 2) {
            finalIndex = input.substring(1, input.length)
        }
        document.getElementById("indexField").value = finalIndex
    }
    convertIndexToLetter(finalIndex)
    updateBinary()
    updateHexadecimal()
    updateMorse()
    updateBraille()
    updateSemaphore()
    updatePigpen()
    updateMaritime()
}

function convertIndexToLetter(input) {
    if (input.length == 0) {
        return
    }
    input = parseInt(input)
    if (input >= 1 && input <= 26) {
        setLetter(String.fromCharCode(input + 65 - 1))
    }
    else {
        setLetter('-')
    }
}

// ======================== BINARY ============================
function validateBinaryInput(input) {
    var finalBinary = input
    if (input.length > 0) {
        //Space bar to clear input field
        var lastChar = input.charAt(input.length - 1)        
        if (lastChar == ' ') {
            finalBinary = ''
        }
        //ignore non 0s and 1's
        else if (!(lastChar == '0' || lastChar == '1')) {
            if (input.length > 0) {
                finalBinary = input.substring(0, input.length - 1)
            }
            else {
                finalBinary= ''
            }
        }
        else if (input.length > 5) {
            finalBinary = input.substring(1, input.length)
        }
        document.getElementById("binaryField").value = finalBinary
    }
    convertBinaryToLetter(finalBinary)
    updateIndex()    
    updateHexadecimal()
    updateMorse()
    updateBraille()
    updateSemaphore()
    updatePigpen()
    updateMaritime()
}

function convertBinaryToLetter(input) {
    if (input.length == 0) {
        return
    }
    input = parseInt(input, 2)
    if (input >= 1 && input <= 26) {
        setLetter(String.fromCharCode(input + 65 - 1))
    }
    else {
        setLetter('-')
    }
}

// ======================== HEXADECIMAL ============================
function validateHexadecimalInput(input) {
    var finalHexadecimal = input
    if (input.length > 0) {
        //Space bar to clear input field
        var lastChar = input.charAt(input.length - 1).toUpperCase()        
        if (lastChar == ' ') {
            finalHexadecimal = ''
        }
        //ignore non hexadecimal value
        else if (isNaN(lastChar) && lastChar > 'G') {
            if (input.length > 0) {
                finalHexadecimal = input.substring(0, input.length - 1)
            }
            else {
                finalHexadecimal= ''
            }
        }
        else if (input.length > 2) {
            finalHexadecimal = input.substring(1, input.length)
        }
        document.getElementById("hexadecimalField").value = finalHexadecimal.toUpperCase()
    }
    convertHexadecimalToLetter(finalHexadecimal)
    updateIndex()    
    updateBinary()    
    updateMorse()
    updateBraille()
    updateSemaphore()
    updatePigpen()
    updateMaritime()
}

function convertHexadecimalToLetter(input) {
    if (input.length == 0) 
        return
    input = parseInt(input, 16)
    if (input >= 1 && input <= 26)
        setLetter(String.fromCharCode(input + 65 - 1))
    else
        setLetter('-')
}

// ======================== MORSE ============================

function validateMorseInput(input) {
    var finalMorse = input
    if (input.length > 0) {
        //Space bar to clear input field
        var lastChar = input.charAt(input.length - 1)        
        if (lastChar == ' ')
            finalMorse = ''
        // ignore non-morse chars
        else if (!(lastChar == '-' || lastChar == '.' || lastChar == ',')) {
            if (input.length > 0)
                finalMorse = input.substring(0, input.length - 1)
            else
                finalMorse = ''
        }
        else if (input.length > 4)
            finalMorse = input.substring(1, input.length)
        finalMorse = finalMorse.replaceAll(',', '-')
        document.getElementById("morseField").value = finalMorse
    }
    convertMorseToLetter(finalMorse)
    updateIndex()
    updateBinary()
    updateHexadecimal()
    updateBraille()
    updateSemaphore()
    updatePigpen()
    updateMaritime()
    
}

function convertMorseToLetter(input) {
    if (input.length == 0)
        return
    setLetter(translateMorseToLetter(input))
}

// ======================== BRAILLE ============================
function validateBrailleInput() {
    var braille = buildBrailleBinary()
    
    convertBrailleToLetter(braille)
    updateIndex()
    updateBinary()
    updateHexadecimal()
    updateMorse()
    updateSemaphore()
    updatePigpen()
    updateMaritime()
}

function convertBrailleToLetter(input) {
    if (input == "000000")
        return
    setLetter(translateBrailleToLetter(input))
}

function updateBrailleCheckBoxes(binaryString) {
    if (binaryString.length != 6)
        clearBraille()
    for (var i = 0; i < 6; ++i)
        updateBrailleCheckBox(i.toString(), binaryString[i] == '1')    
}

function updateBrailleCheckBox(index, value) {
    document.getElementById("braille" + index).checked = value
}

function buildBrailleBinary() {
    var result = ''
    for (var i = 0; i < 6; ++i) {
        if (document.getElementById("braille" + i.toString()).checked)
            result += '1'
        else
            result += '0'
    }
    return result
}

function clearBraille(){
    for (var i = 0; i < 6; ++i) 
        updateBrailleCheckBox(i.toString(), false)
}


// ======================== SEMAPHORE ============================
var semaphoreHistory = ""

function validateSemaphoreInput(checked, index) {
    semaphoreHistory += index.toString()
    if (semaphoreHistory.length < 2)
        return
    else if (semaphoreHistory.length > 2)
        semaphoreHistory = semaphoreHistory.substring(1, semaphoreHistory.length)

    clearSemaphore(false)
    updateSemaphoreCheckBox(semaphoreHistory[0], true)
    updateSemaphoreCheckBox(semaphoreHistory[1], true)

    var semaphore = buildSemaphoreBinary()
    
    convertSemaphoreToLetter(semaphore)
    updateIndex()
    updateBinary()
    updateHexadecimal()
    updateMorse()
    updateBraille()
    updatePigpen()
    updateMaritime()
}

function convertSemaphoreToLetter(input) {
    if (input == "00000000") 
        return
    setLetter(translateSemaphoreToLetter(input))
}

function updateSemaphoreCheckBoxes(binaryString) {
    if (binaryString.length != 8) {
        clearSemaphore(true)
    }
    for (var i = 0; i < 8; ++i) {
        if ( binaryString[i] == '1' ) {
            updateSemaphoreCheckBox(i.toString(), true)
            semaphoreHistory += i.toString()
        }
    }   
}

function updateSemaphoreCheckBox(index, value) {
    document.getElementById("semaphore" + index).checked = value
}

function buildSemaphoreBinary() {
    var result = ''
    for (var i = 0; i < 8; ++i) {
        if (document.getElementById("semaphore" + i.toString()).checked)
            result += '1'
        else
            result += '0'
    }
    return result
}

function clearSemaphore(clearHistory){
    for (var i = 0; i < 8; ++i) 
        updateSemaphoreCheckBox(i.toString(), false)
    
    if (clearHistory) {
        semaphoreHistory = ""
        document.getElementById("semaphoreClear").checked = false
    }
}

// ======================== PIGPEN ============================

function validatePigpenInput() {
    convertPigpenToLetter()
    updateIndex()
    updateBinary()
    updateHexadecimal()
    updateMorse()
    updateBraille()
    updateSemaphore()
    updateMaritime()
}

function convertPigpenToLetter() {    
    setLetter(evaluatePigpenLetter())
}

// ======================== MARITIME ============================

var maritime = new Array(26)
clearMaritime()

function clearMaritime() {
    for (var i = 0; i < 26; ++i) {
        maritime[i] = false
    
        var filename = "maritime" + String.fromCharCode(i + 65)
        var element = document.getElementById(filename)
        if (element != null) 
            element.classList.remove("selectedMaritime")
    }    
}

function setMaritime(input) {
    maritime[input.charCodeAt(0) - 65] = true
    var element = document.getElementById("maritime" + input);
    element.classList.add("selectedMaritime");
}

function toggleMaritime(input) {
    var index = input.charCodeAt(0) - 65
    var newValue = !maritime[index]
    clearMaritime()
    maritime[index] = newValue

    var element = document.getElementById("maritime" + input);
    if (newValue) 
        element.classList.add("selectedMaritime")
    else 
        element.classList.remove("selectedMaritime")
       

    convertMaritimeToLetter(input)   
    updateIndex()
    updateBinary()
    updateHexadecimal()
    updateMorse()
    updateBraille()
    updateSemaphore()
    updatePigpen()
}

function convertMaritimeToLetter(input) {
    setLetter(input)
}


