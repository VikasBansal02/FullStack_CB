

function changeBackground(color){
    document.body.style.backgroundColor = color;
    let check = document.getElementsByClassName("text");
    if(color=='#000000'){
        for(let ele of check){
            ele.style.color = "white";
        }
    }
    else{
        for(let ele of check){
            ele.style.color = "black";
        }
    }
}

// const url='https://api.tvmaze.com/search/shows?q';


// let fetch_Btn=document.getElementById('fetch_Btn');
// fetch_Btn.addEventListener('click',function(){
//     const xhrO=new XMLHttpRequest();
//     let inputB=document.getElementById('input');
//     if(inputB.value=='')
//     {
//         alert("Enter something-");
//     }
//     else{
//         xhrO.open('GET',url);
//     xhrO.onload=function(){
    
//         let obj_1=JSON.parse(this.responseText);
//         console.log(obj_1);
        // str="";
        // for (key in obj_1)
        // {
        //     str=str+`<image src="${obj_1[key].show.image.medium}">`
        // }
        // let addimg=document.getElementById('addImg');
        // addimg.innerHTML=str;
//         console.log(obj_1[key].show.image.medium);
//     }

//     xhrO.send();
//     }

// })

const xhr = new XMLHttpRequest;

xhr.onload = function () {

    let data=JSON.parse(this.response);
    str="";
    for (key in data)
        str=str+`<image src="${data[key].show.image.medium}">`
    let addimg=document.getElementById('addImg');
    addimg.innerHTML=str;

}

xhr.onerror = function () {

}

let APIkey='4658da66a2b03fcccd06c6a66b0d0ac4';
document.getElementById("fetch_Btn").addEventListener('click',(e)=>{
    let city_name=document.getElementById('input').value;
    const URL=" https://api.tvmaze.com/search/shows?q="+city_name;
    xhr.open("GET", URL);
    e.preventDefault();
    xhr.send();
});

// Extra

 // for(let i=1;i<data.length;i++){
    //   document.getElementById('img'+i).src = data[i].show.image.medium;
    // };
    
    // element.innerHTML=html;