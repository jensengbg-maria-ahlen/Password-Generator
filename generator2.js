/*
Level 2
Se till att din lösenordsgenerator genererar lösenord som uppfyller följande krav:

Minst 10 tecken
En siffra
En stor bokstav
En liten bokstav
Ett specialtecken (!"#$%&'()*+,-./:;<=>?@[\]^{|})
Du får inte använda dig av regex.
*/

function passwordGenerator2() {  
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*(\/'")_+{}:?><;.,`
    let password = ''

    for(let i=0; i<10; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        let newCharacter = characters[randomIndex]
        password += newCharacter
    }

    if(hasCapitalLetters(password) && hasLowerLetters(password) && hasNumbers(password) && hasSymbols(password)) {
        return password
    }
    return passwordGenerator2()    
}

function hasCharacters(string, character) {
    let array = string.split('')
    return array.some(c => character.includes(c))
}

function hasCapitalLetters(string) {
    const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return hasCharacters(string, capitalLetters)
}

function hasLowerLetters(string) {
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
    return hasCharacters(string, lowerLetters)
}

function hasNumbers(string) {
    const numbers = '0123456789'
    return hasCharacters(string, numbers)
}

function hasSymbols(string) {
    const symbols = `~!@#$%^&*(\/'")_+{}:?><;.,`
    return hasCharacters(string, symbols)
}


let pw2 = passwordGenerator2(10)
console.log('Det andra genererade lösenordet: ' + pw2)