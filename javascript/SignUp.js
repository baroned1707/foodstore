

$(document).ready(()=>{
    $('#btnSignup').click(()=>{
        var name = $('#txtName').val();
        var sdt = $('#telPhoneNumber').val();
        var mail = $('#txtMail').val();
        var pass = $('#txtPass').val();
        var address = $('#txtAddress').val();
        console.log(name);
        console.log(sdt);
        console.log(mail);
        console.log(pass);
        console.log(address);
        //Dieu kien

        //Login va khoi tao database cho tai khoang
        firebase.auth().createUserWithEmailAndPassword(mail, pass)
        .then(async()=>{
            const user = await firebase.auth().currentUser;
            var db = await firebase.firestore().collection("Users").doc(`${user.uid}`);
            await db.set({
                name:name,
                address:address,
                premisson:'client',
                historybill:[],
            }).catch(error=>console.log(error.message));
            window.location.href = '../index.html';
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(error.message);
        })
        
    })
})