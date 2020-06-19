//Check authen state
$(document).ready(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            //   var displayName = user.displayName;
            //   var email = user.email;
            //   var emailVerified = user.emailVerified;
            //   var photoURL = user.photoURL;
            //   var isAnonymous = user.isAnonymous;
            //   var uid = user.uid;
            //   var providerData = user.providerData;
            $('#state').text('Profile');
        } else {
          // User is signed out.
          // ...
            
        }
    });
})

$(document).ready(()=>{
    $('#btnSignup').click(()=>{
        alert('Dang ky');
    })
})