var user = 'User';
const Login = (email,pass)=>{
    console.log(email+pass);
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE] 
    });
    
}

$(document).ready(()=>{
    $('#btnLogin').click(()=>{
        var email = $('#txtUserName').val();
        var pass = $('#txtPass').val();
        if(email!=''&&pass!=''){
            Login(email,pass);
        } else {
            alert('Email And Pass Spacing !');
        }
    });
})