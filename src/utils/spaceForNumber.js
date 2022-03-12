export default function spaceForNumber(number) {
    let arrNumbers = String(number).split('')
    let numberWitchSpace
    switch (arrNumbers.length) {
        case 5:
            arrNumbers.splice(2, 0, ' ')
            numberWitchSpace = arrNumbers.join('')
            break;

        case 6:
            arrNumbers.splice(3, 0, ' ')
            numberWitchSpace = arrNumbers.join('')
            break;

        case 7:
            arrNumbers.splice(1, 0, ' ')
            arrNumbers.splice(5, 0, ' ')
            numberWitchSpace = arrNumbers.join('')
            break;

        case 8:
            arrNumbers.splice(2, 0, ' ')
            arrNumbers.splice(6, 0, ' ')
            numberWitchSpace = arrNumbers.join('')
            break;

        case 9:
            arrNumbers.splice(3, 0, ' ')
            arrNumbers.splice(7, 0, ' ')
            numberWitchSpace = arrNumbers.join('')
            break;

        case 10:
            arrNumbers.splice(1, 0, ' ')
            arrNumbers.splice(5, 0, ' ')
            arrNumbers.splice(9, 0, ' ')
            numberWitchSpace = arrNumbers.join('')
            break;

        default:
            arrNumbers = number
    }

    return numberWitchSpace
}
