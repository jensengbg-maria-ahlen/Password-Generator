/*
Level 3
Gör en sökning med hjälp av Have I Been Pwned Password API om det genererade lösenordet har läkt ut från någon databas. Ifall en träff hittas ska ett nytt lösenord genereras och samma sökning ska ske en gång till. Processen upprepas tills du får ett lösenord som inte har läckt ut.

API: https://haveibeenpwned.com/API/v3#SearchingPwnedPasswordsByRange

Obs! API:et returnerar inte JSON, utan text.

För att kunna använda API:et behöver man hasha det genererade lösenordet med SHA-1. Använd npm-modulen js-sha1. För att kunna använda npm-moduler i vanilla JS så behöver du kunna bundla ditt JavaScript, du kan använda browserify till det.

Browersify: http://browserify.org/

SHA-1: https://www.npmjs.com/package/js-sha1
*/