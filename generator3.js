/*
Level 3
Gör en sökning med hjälp av Have I Been Pwned Password API om det genererade lösenordet har läkt ut från någon databas. Ifall en träff hittas ska ett nytt lösenord genereras och samma sökning ska ske en gång till. Processen upprepas tills du får ett lösenord som inte har läckt ut.

API: https://haveibeenpwned.com/API/v3#SearchingPwnedPasswordsByRange

SHA-1: https://www.npmjs.com/package/js-sha1
*/

const sha1 = require('js-sha1');
const axios = require('axios');

const API_URL = 'https://api.pwnedpasswords.com/range';
const PASSWORD = 'qwerty';

( async () => {
    let hash = sha1(PASSWORD);

    let prefix = hash.substr(0,5);
    let suffix = hash.substr(5, hash.length);
    console.log('suffix: ', suffix)

    let resp = await axios(`${API_URL}/${prefix}`);
    let hashes = resp.data.split('\r\n');

    let msg = 'All good, nice password!'
    
    for(let i = 0; i < hashes.length; i++) {
        let h = hashes[i].split(':');

        if(h[0] === suffix.toUpperCase()) {
            msg = `Oh no, your password has been used in ${h[1]} times. Don't use it!`
            break;
        } 
    }
    console.log(msg)
})()