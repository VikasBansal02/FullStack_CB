

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
    xhrO.open('GET',url);
    xhrO.onload=function(){
        
        let obj=JSON.parse(this.responseText);
        console.log(obj);
        for (key in obj)
        console.log(obj[key].show.image.medium);
    }

    xhrO.send();
})