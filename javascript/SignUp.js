

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
        if(!(name.length>0)){
            alert("Ten khong dung");
        }
        if(!(sdt.length>0&&RegExp('((09|03|07|08|05)+([0-9]{8})\b)').test(sdt))){
            alert("SDT khong dung");
        }
        if(!(mail.length>0&&RegExp('^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$').test(mail))){
            alert("Email khong dung");
        }
        if(!(pass.length>0)){
            alert('Pass khong dung');
        }
        if(!(address.length>0)){
            alert('Dia chi khong dung');
        }

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
            alert('Dang ky khong thanh cong ! Vui long thu lai !');
        })
    })
})