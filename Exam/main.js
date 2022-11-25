

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

const url='http://api.tvmaze.com/search/shows?q=:query';


let fetch_Btn=document.getElementById('fetch_Btn');
fetch_Btn.addEventListener('click',function(){
    const xhrO=new XMLHttpRequest();
    let inputB=document.getElementById('input');
    if(inputB.value=='')
    {
        alert("Enter something-");
    }
    else{
        xhrO.open('GET',url);
    xhrO.onload=function(){
    
        let obj_1=JSON.parse(this.responseText);
        console.log(obj_1);
        str="";
        for (key in obj_1)
        {
            str=str+`<image src="${obj_1[key].show.image.medium}">`
        }
        let addimg=document.getElementById('addImg');
        addimg.innerHTML=str;
        console.log(obj_1[key].show.image.medium);
    }

    xhrO.send();
    }

})
