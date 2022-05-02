// Ude Import export (MANDATORY)

import {navbar}from "../components/navbar.js";
let na=document.getElementById("navbar");
na.innerHTML=navbar();
let dataa=JSON.parse(localStorage.getItem("news"))||[];
 dataa.forEach(elem => {
    let d= document.getElementById("detailed_news");
    d.innerHTML=""
   
         let div=document.createElement("div");
        let h1=document.createElement("h1");
        h1.innerText=elem.titl;
        let p=document.createElement("p");
        p.innerText=elem.conten;
        let img=document.createElement("img");
        img.src=elem.Image;
        img.style.height="100%";
        img.style.width="100%";

        div.append(img,h1,p);
      
        d.append(div);
        d.style.width="50%";
        d.style.margin="auto";
        d.style.marginTop="50px"
        
     
 });