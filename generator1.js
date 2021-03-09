/*
Level 1
Skapa en enklare lösenordsgenerator i form av en function passwordGenerator(length) där enda argumentet är längd på lösenordet. Funktionen ska returnera ett slumpat lösenord som visas på skärmen. Använd Math.random() för att skapa slumptal.

Du får inte använda dig av regex.
*/

function passwordGenerator(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = ''

    for(let i=0; i<length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        let newCharacter = characters[randomIndex]
        password += newCharacter
    }

    return password
}

let pw = passwordGenerator(10)


console.log('Det första genererade lösenordet: ' + pw)
