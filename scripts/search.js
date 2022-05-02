// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
let na=document.getElementById("navbar");
na.innerHTML=navbar();
let dataa=JSON.parse(localStorage.getItem("news"))||[];
//import {searchN,append}from"./fetch.js"

//document.getElementById("results").innerHTML=append();

let di= JSON.parse(localStorage.getItem("val"))||[];
console.log(di[di.length-1]);
let val=di[di.length-1];
const url= `https://masai-mock-api.herokuapp.com/news?q=${val}`

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
   let dat= res

      append(dat)
  });
  let search= async(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("search_input").value;
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
     
    }
};
document.getElementById("search_input").addEventListener("keydown",search);

   




let append=(dat)=>{
   // console.log(dat.articles[0].title)
    let result= document.getElementById("results");
    result.innerHTML=""
 dat.articles.forEach(({title,urlToImage,content})=>{
     let div=document.createElement("div");
     div.style.display="flex";
     div.style.margin="15px 2px"
     div.style.border="2px solid blue"
     let img =document.createElement("img");
       let box=document.createElement("div");
       box.style.margin="0px 10px"
     let h3=document.createElement("h3")
     h3.addEventListener("click", function () {
        news({title,urlToImage,content});
      });
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
let  news= ({title,urlToImage,content}) =>{
      console.log(title)
      let obj={
          titl:title,
          Image:urlToImage,
          conten:content
      }
      console.log(obj)
    dataa.push(obj);
    localStorage.setItem("news", JSON.stringify(dataa));
   window.location.href="news.html";

};