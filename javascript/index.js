
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
//Khang
//-----------------------------------------------------------------------------------------------------------------------------
let arrR = new Array;
console.log(arrR.length);

const addpage = (arr, len) => { //Lỗiiiiiii
    console.log(arrR.length);
    let html = `<p>`;
    let html2 = `<script>`;
    let count = arrR.length/9;

    for (let i = 0; i < count; i++) {
        html = html + `<input type="button" value="${i+1}" id="page_${i+1}">`;
        html2 = html2 + `clickPage(arrR,${i+1});`
    }

    let html_T = html + `</p>` + html2+ `</script>`;
    $(document).ready(function ()  {
        $("#page").append(html_T);
    })
     
}

const render = (arr,food) => {
    let html = `<div style="width:30%;height:30%; margin-left:2.5%; margin-top:2%">
                    <img id = "${arr[food].food_id}" src="${arr[food].src_img}"  style="width: 100%; height:80%;">
                    <p id = "name">${arr[food].name}</p>
                    <p id = "price">${arr[food].price}</p>
                </div>`;
    $("#render").append(html);
}

const clickPage = (arr,n) => {
    let  pageN = new String;
    pageN = "#page_"+ n;
        $(pageN).click(() => { 
            $("#render").empty();
            for (let f in arr) {
                if (f >= 9*n-9 && f <= 9*n-1) {
                    render(arr,f);
                }
            }
        })

}



//----------------------------------------------------------------------------------------------------------------------------------------------------

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

//-------------------------------
$(document).ready(()=>{    
    for(let food in list_all){
        if (food < 9)
        {
            render(list_all,food);
        }
    }
    let html = `<p>`;
    let html2 = `<script>`;
    let count = list_all.length/9;

    for (let i = 0; i < count; i++) {
        html = html + `<input type="button" value="${i+1}" id="page_${i+1}">`;
        html2 = html2 + `clickPage(list_all,${i+1});`
    }

    let html_T = html + `</p>` + html2+ `</script>`;
    $(document).ready(function ()  {
        $("#page").append(html_T);
    })
})

// $(document).ready(() => {
    $("#all").click(() => {
       
         
        $(document).ready(() => {
            let arrR = [];

            for(let food in list_all){    
              arrR.push(list_all[food]);
            }
               
            $("#render").empty();
             $("#page").empty();

              for (let food in arrR) {
                if (food < 9)
                {
                    render(arrR,food);
                }
             }
             
             addpage(arrR,arrR.length);
             
        })

        console.log(arrR.length);
        
        })
    
// })


$(document).ready(() => {
    $("#rice").click(() => {
        
        let arrR = [];

        $("#render").empty();
        $("#page").empty();

        for(let food in list_all){
            if (list_all[food].type === 'com') {
                arrR.push(list_all[food]);
            }
        }
        for (let food in arrR) {
            if (food < 9)
            {
                render(arrR,food);
            }
        }
        console.log(arrR.length);
        let html = `<p>`;
        let html2 = `<script>`;
        let count = arrR.length/9;

        for (let i = 0; i < count; i++) {
            html = html + `<input type="button" value="${i+1}" id="page_${i+1}">`;
            html2 = html2 + `clickPage(arrR,${i+1});`;
        }
    
        let html_T = html + `</p>` + html2 + `</script>`;
        $(document).ready(function ()  {
            $("#page").append(html_T);
        })
    })
})

$(document).ready(() => {
    $("#pho").click(() => {
        let arrR = [];

        $("#render").empty();
        $("#page").empty();

        for(let food in list_all){
            if (list_all[food].type === 'pho') {
                arrR.push(list_all[food]);
            }
        }
        for (let food in arrR) {
            if (food < 9)
            {
                render(arrR,food);
            }
        }
        addpage(arrR, arrR.length);
    })
})

$(document).ready(() => {
    $("#noodle").click(() => {
        let arrR = [];

        $("#render").empty();
        $("#page").empty();

        for(let food in list_all){
            if (list_all[food].type === 'bun') {
                arrR.push(list_all[food]);
            }
        }
        for (let food in arrR) {
            if (food < 9)
            {
                render(arrR,food);
            }
        }
        addpage(arrR, arrR.length);
    })
})

$(document).ready(() => {
    $("#scroll").click(() => {
        let arrR = [];

        $("#render").empty();
        $("#page").empty();

        for(let food in list_all){
            if (list_all[food].type === 'cuon') {
                arrR.push(list_all[food]);
            }
        }
        for (let food in arrR) {
            if (food < 9)
            {
                render(arrR,food);
            }
        }
        addpage(arrR, arrR.length);
    })
})

$(document).ready(() => {
    $("#soup").click(() => {
        let arrR = [];

        $("#render").empty();
        $("#page").empty();

        for(let food in list_all){
            if (list_all[food].type === 'canh') {
                arrR.push(list_all[food]);
            }
        }
        for (let food in arrR) {
            if (food < 9)
            {
                render(arrR,food);
            }
        }
        addpage(arrR, arrR.length);
    })
})

$(document).ready(() => {
    $("#vegetable").click(() => {
        let arrR = [];

        $("#render").empty();
        $("#page").empty();

        for(let food in list_all){
            if (list_all[food].type === 'rau') {
                arrR.push(list_all[food]);
            }
        }
        for (let food in arrR) {
            if (food < 9)
            {
                render(arrR,food);
            }
        }
        addpage(arrR, arrR.length);
    })
})

$(document).ready(() => {
    $("#desserts").click(() => {
        let arrR = [];

        $("#render").empty();
        $("#page").empty();

        for(let food in list_all){
            if (list_all[food].type === 'trangmieng') {
                arrR.push(list_all[food]);
            }
        }
        for (let food in arrR) {
            if (food < 9)
            {
                render(arrR,food);
            }
        }
        addpage(arrR, arrR.length);
    })
})

$(document).ready(() => {
    $("#drink").click(() => {
        let arrR = [];

        $("#render").empty();
        $("#page").empty();

        for(let food in list_all){
            if (list_all[food].type === 'nuoc') {
                arrR.push(list_all[food]);
            }
        }
        for (let food in arrR) {
            if (food < 9)
            {
                render(arrR,food);
            }
        }
        addpage(arrR, arrR.length);
    })
})



//Khương
//----------------------------------------------------------------------------------------------------------------------------
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
            console.log('Sign out')
        }
    });
})

//--------------------------------------------------------------------------------------------------------------------------------------Test