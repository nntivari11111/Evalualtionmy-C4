// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


//  

import   {navbar} from "../components/navbar.js";
let na=document.getElementById("navbar");
na.innerHTML=navbar();
//import {searchN,searchC,append}from"./fetch.js"
//https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}
//https://masai-mock-api.herokuapp.com/news?q={query};

let di= JSON.parse(localStorage.getItem("val"))||[];

let search= async(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("search_input").value;
        di.push(value);
        localStorage.setItem("val",JSON.stringify(di))
          try{
             let res= await fetch(
              `https://masai-mock-api.herokuapp.com/news?q=${value}`     
             )
             let dat=await res.json()
             //console.log(dat);
             append(dat);
          }catch(err){
              console.log(err);
          }
      window.location.href="search.html";
    }
};
document.getElementById("search_input").addEventListener("keydown",search);
const ur=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`    
fetch(ur)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
   let dat= res

      append(dat)
  });

let sbar=document.getElementById("sidebar").children;

async function cSearch(){
    console.log(this.id);
    try{
        let res= await fetch(
         `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`     
        )
        let dat=await res.json()
        //console.log(dat);
        append(dat);
     }catch(err){
         console.log(err);
     }
     
 }
 
 for(let el of sbar){
    el.addEventListener("click",cSearch);
}


let append=(data)=>{
       console.log(data.articles[0].title)
       let result= document.getElementById("results");
       result.innerHTML=""
    data.articles.forEach(({title,urlToImage,content})=>{
        
        let div=document.createElement("div");
        div.style.display="flex";
        div.style.margin="15px 2px"
        div.style.border="2px solid blue"
        let img =document.createElement("img");
          let box=document.createElement("div");
          box.style.margin="0px 10px"
        let h3=document.createElement("h3")
        let p=document.createElement("p");
        p.innerText=content;
        img.src=urlToImage;
        img.style.width="25%";
        img.style.height="100%";
        h3.innerText=title;
        box.append(h3,p);

        div.append(img,box);
       result.append(div);
       })

}
 
