const checkAuth = () =>{
    
}

let list_all = [
    {
        food_id :'food_1',
        type : 'cuon',
        src_img : '../images/goicuon.jpg',
        name : 'Gỏi Cuốn',
        price : '25 000 VND/phần (5 cuốn)'
    },

    { 
        food_id :'food_2',
        type : 'bun',
        src_img : '../images/bunthitnuong.jpg',
        name : 'Bún thịt nướng',
        price : '25 000 VND/phần'
    },

    {
        food_id : 'food_3',
        type : 'com',
        src_img : '../images/comtam.jpg',
        name : 'Cơm tấm',
        price : '25 000 VND/phần'
    },

    {
        food_id : 'food_4',
        type : 'pho',
        src_img : '../images/phobo.jpg',
        name : 'Phở bò',
        price : '30 000 VND/phần'
    },

    {
        food_id : 'food_5',
        type : 'pho',
        src_img : '../images/phoga.jpg',
        name : 'Phở gà',
        price : '30 000 VND/phần'
    },

    {
        food_id : 'food_6',
        type : 'pho',
        src_img : '../images/phocuon.jpg',
        name : 'Phở cuốn',
        price : '40 000 VND/phần (5 cuốn)'
    },

    {
        food_id : 'food_7',
        type : 'com',
        src_img : '../images/comchien.jpg',
        name : 'Cơm chiên dương châu',
        price : '25 000 VND/phần'
    },  

    {
        food_id : 'food_8',
        type : 'cuon',
        src_img : '../images/banhcuonl.jpg',
        name : 'Bánh cuốn',
        price : '20 000 VND/phần (5 cuốn)'
    },  

    {
        food_id : 'food_9',
        type : 'canh',
        src_img : '../images/canhchuacaloc.jpg',
        name : 'Canh chua ca loc',
        price : '40 000 VND/phần'
    },

    {
        food_id : 'food_10',
        type : 'rau',
        src_img : '../images/raumuongxao.jpg',
        name : 'Rau muống xào tỏi',
        price : '18 000 VND/phần'
    },

    {
        food_id : 'food_11',
        type : 'trangmieng',
        src_img : '../images/banhplan.jpg',
        name : 'Bánh Plan',
        price : '15 000 VND/phần'
    },

    {
        food_id : 'food_12',
        type : 'nuoc',
        src_img : '../images/sinhto.jpg',
        name : 'Sinh tố',
        price : '15 000 VND/phần'
    },

    {
        food_id : 'food_13',
        type : 'nuoc',
        src_img : '../images/nuocsam.jpg',
        name : 'Nước sâm',
        price : '15 000 VND/phần'
    },

    {
        food_id : 'food_14',
        type : 'nuoc',
        src_img : '../images/cafeda.jpg',
        name : 'Café đá',
        price : '15 000 VND/phần'
    },

    {
        food_id: 'food_15',
        type : 'nuoc',
        src_img : '../images/cafesua.jpg',
        name : 'Café sữa',
        price : '18 000 VND/phần'
    },

];

//----------------------------------------------------------------------------------------------------------------------------
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
    for(let food in list_all){
        // console.log(list_all[food].food_id);
        if (food <= 8)
        {
            let html = 
               `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                    <img id = "${list_all[food].food_id}" src="${list_all[food].src_img}"  style="width: 100%; height:80%;">
                    <p id = "name">${list_all[food].name}</p>
                    <p id = "price">${list_all[food].price}</p>
                </div>`;
            $("#render").append(html);
        }
    }  
})

$(document).ready(() => {
    let html;

})

$(document).ready(function () {
    $("#page_1").click(function () { 
        $("#render").empty();
        for(let food in list_all){
            // console.log(list_all[food].food_id);
            if (food <= 8)
            {
                let html = 
                   `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                        <img id = "${list_all[food].food_id}" src="${list_all[food].src_img}"  style="width: 100%; height:80%;">
                        <p id = "name">${list_all[food].name}</p>
                        <p id = "price">${list_all[food].price}</p>
                    </div>`;
                $("#render").append(html);
            }
        }  
    });
});

$(document).ready(function () {
    $("#page_2").click(function () { 
        $("#render").empty();
        for(let food in list_all){
            // console.log(list_all[food].food_id);
            if (food > 8)
            {
                let html = 
                   `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                        <img id = "${list_all[food].food_id}" src="${list_all[food].src_img}"  style="width: 100%; height:80%;">
                        <p id = "name">${list_all[food].name}</p>
                        <p id = "price">${list_all[food].price}</p>
                    </div>`;
                $("#render").append(html);
            }
        }  
    });
});

$(document).ready(function () {
    $("#rice").click(function () { 
        $("#render").empty();
        for(let food in list_all){
            // console.log(list_all[food].food_id);
            if (list_all[food].type === 'com')
            {
                let html = 
                   `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                        <img id = "${list_all[food].food_id}" src="${list_all[food].src_img}"  style="width: 100%; height:80%;">
                        <p id = "name">${list_all[food].name}</p>
                        <p id = "price">${list_all[food].price}</p>
                    </div>`;
                $("#render").append(html);
            }
        }  
    });
});

$(document).ready(function () {
    $("#pho").click(function () { 
        $("#render").empty();
        for(let food in list_all){
            // console.log(list_all[food].food_id);
            if (list_all[food].type === 'pho')
            {
                let html = 
                   `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                        <img id = "${list_all[food].food_id}" src="${list_all[food].src_img}"  style="width: 100%; height:80%;">
                        <p id = "name">${list_all[food].name}</p>
                        <p id = "price">${list_all[food].price}</p>
                    </div>`;
                $("#render").append(html);
            }
        }  
    });
});

$(document).ready(function () {
    $("#noodle").click(function () { 
        $("#render").empty();
        for(let food in list_all){
            // console.log(list_all[food].food_id);
            if (list_all[food].type === 'bun')
            {
                let html = 
                   `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                        <img id = "${list_all[food].food_id}" src="${list_all[food].src_img}"  style="width: 100%; height:80%;">
                        <p id = "name">${list_all[food].name}</p>
                        <p id = "price">${list_all[food].price}</p>
                    </div>`;
                $("#render").append(html);
            }
        }  
    });
});

$(document).ready(function () {
    $("#scroll").click(function () { 
        $("#render").empty();
        for(let food in list_all){
            // console.log(list_all[food].food_id);
            if (list_all[food].type === 'cuon')
            {
                let html = 
                   `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                        <img id = "${list_all[food].food_id}" src="${list_all[food].src_img}"  style="width: 100%; height:80%;">
                        <p id = "name">${list_all[food].name}</p>
                        <p id = "price">${list_all[food].price}</p>
                    </div>`;
                $("#render").append(html);
            }
        }  
    });
});

$(document).ready(function () {
    $("#soup").click(function () { 
        $("#render").empty();
        for(let food in list_all){
            // console.log(list_all[food].food_id);
            if (list_all[food].type === 'canh')
            {
                let html = 
                   `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                        <img id = "${list_all[food].food_id}" src="${list_all[food].src_img}"  style="width: 100%; height:80%;">
                        <p id = "name">${list_all[food].name}</p>
                        <p id = "price">${list_all[food].price}</p>
                    </div>`;
                $("#render").append(html);
            }
        }  
    });
});

$(document).ready(function () {
    $("#vegetable").click(function () { 
        $("#render").empty();
        for(let food in list_all){
            // console.log(list_all[food].food_id);
            if (list_all[food].type === 'rau')
            {
                let html = 
                   `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                        <img id = "${list_all[food].food_id}" src="${list_all[food].src_img}"  style="width: 100%; height:80%;">
                        <p id = "name">${list_all[food].name}</p>
                        <p id = "price">${list_all[food].price}</p>
                    </div>`;
                $("#render").append(html);
            }
        }  
    });
});

$(document).ready(function () {
    $("#desserts").click(function () { 
        $("#render").empty();
        for(let food in list_all){
            // console.log(list_all[food].food_id);
            if (list_all[food].type === 'trangmieng')
            {
                let html = 
                   `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                        <img id = "${list_all[food].food_id}" src="${list_all[food].src_img}"  style="width: 100%; height:80%;">
                        <p id = "name">${list_all[food].name}</p>
                        <p id = "price">${list_all[food].price}</p>
                    </div>`;
                $("#render").append(html);
            }
        }  
    });
});

$(document).ready(function () {
    $("#drink").click(function () { 
        $("#render").empty();
        for(let food in list_all){
            // console.log(list_all[food].food_id);
            if (list_all[food].type === 'nuoc')
            {
                let html = 
                   `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                        <img id = "${list_all[food].food_id}" src="${list_all[food].src_img}"  style="width: 100%; height:80%;">
                        <p id = "name">${list_all[food].name}</p>
                        <p id = "price">${list_all[food].price}</p>
                    </div>`;
                $("#render").append(html);
            }
        }  
    });
});

//--------------------------------------------------------------------------------------------------------------------------------------Test


console.log(firebaseConfig);