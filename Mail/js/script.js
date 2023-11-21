// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
// stampa un messaggio appropriato sull’esito del controllo.

const emailArray = [
    'pincopallino@bellamail.com', 
    'ginoginetti@bellamail.com',
    'topolino@bellamail.com', 
    'paperino@bellamail.com'
];
const userEmail = prompt ('Write your email');
let isMailFound = false;


for (let i = 0; i < emailArray.length; i++) {
    if (userEmail == emailArray[i]) {
        isMailFound = true;
    }
}
if (isMailFound) {
    console.log ('Email has been verified, access guaranteed');
} else {
    console.log ('Unrecognized email, access denied');
}

