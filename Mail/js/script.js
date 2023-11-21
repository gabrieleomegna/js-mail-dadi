// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
// stampa un messaggio appropriato sull’esito del controllo.

const userEmail = prompt ('Write your email');
const emailArray = ['pincopallino@bellamail.com', 'ginoginetti@bellamail.com', 'topolino@bellamail.com', 'paperino@bellamail.com'];

if (`$(userEmail.value)` === `$emailArray[0]`) {
    console.log ('ciao');
}