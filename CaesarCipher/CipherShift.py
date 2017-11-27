
AVALUE = ord('A')
ZVALUE = ord('Z')

ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

LINE3 = "HPE TYRREL HGCOPEJ, KL HPKM PGVI OPYME"
LINE8 = "TVAIDXG, VOSQDG, MOCDRVUSID, HIDX SI UOCV IQVG;"


def print_alphabet(alphabet):
    result = ''
    for count in range(26):
        result += alphabet[count]
    print(result)


def shift_alphabet(start=0, shiftRight=1, printChange=False):
    startValue = ord(start) - AVALUE
    if shiftRight % 2 == 0:
        print("Can not shift an equal number")
        return

    alphabet = [None] * 26
    for count in range(26):
        alphabet[startValue] = chr(AVALUE + count)
        startValue = (startValue + shiftRight) % 26

    if printChange is True:
        print("Start: {} Shift: {}".format(start, shiftRight))
        print_alphabet(alphabet)
        print(ALPHABET)

    return alphabet


def use_shift(shiftedAlphabet, encodedString):
    result = ''
    for i in range(len(encodedString)):
        c = encodedString[i]
        if AVALUE >= ord(c) <= ZVALUE:
            result += c
            continue
        result += shiftedAlphabet[ord(c) - ord('A')]

    return result


def decode_line(encodedLine, start, shift, bruteForce=False):

    print('')
    if bruteForce is False:
        testCipher = shift_alphabet(start, shift, True)
        decoded = use_shift(testCipher, encodedLine)

        print('')
        print("Encoded Line:" + encodedLine)
        print("Decoded Line:" + decoded)
    else:
        for i in range(26):
            for j in range(26):
                j += 1
                if j % 2 == 0 or j == 13:
                    continue
                testCipher = shift_alphabet(ALPHABET[i], j)
                decoded = use_shift(testCipher, encodedLine)

                print(decoded + " Start: " + ALPHABET[i] + " Shift: {}".format(j))

decode_line(LINE3, 'Y', 21)

print('-------------------------------')
decode_line(LINE8, 'A', 0, True)
