// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
// stampa un messaggio appropriato sull’esito del controllo.

const emailArray = [
    'pincopallino@bellamail.com', 
    'ginoginetti@bellamail.com',
    'topolino@bellamail.com', 
    'paperino@bellamail.com'
];

const wrapperElement = document.querySelector ('div.wrapper');
const writeIsMailFound = document.createElement ('p');
wrapperElement.appendChild (writeIsMailFound);

const btnElement = document.querySelector ('button');
btnElement.addEventListener ('click', function (){
    const userEmailElement = document.querySelector('input#user-email').value;
    let isMailFound = false;
    
    for (let i = 0; i < emailArray.length; i++) {
        if (userEmailElement == emailArray[i]) {
            isMailFound = true;
        }
    }
    if (isMailFound) {
        writeIsMailFound.innerHTML = 'Email has been verified, access guaranteed';
    } else {
        writeIsMailFound.innerHTML = 'Unrecognized email, access denied';
    }
})