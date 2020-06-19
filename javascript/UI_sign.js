var user = '';
const Login = (email,pass)=>{
    console.log('Wating Login !');
    firebase.auth().signInWithEmailAndPassword('ledikhang2609@gmail.com', '12345678').catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
    });
    user = firebase.auth().currentUser;
    console.log(user)
}

$(document).ready(()=>{
    console.log('Start Login !');
    
    console.log('Done');
})