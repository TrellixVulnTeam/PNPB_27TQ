"use strict";var getLatestOpenedImg,galleryImages=document.querySelectorAll(".gallery-img"),windowWidth=window.innerWidth;function closeImg(){document.querySelector(".img-window").remove(),document.querySelector(".img-btn-prev").remove(),document.querySelector(".img-btn-next").remove()}function changeImg(e){document.querySelector("#current-img").remove();var t,n=document.querySelector(".img-window"),r=document.createElement("img");n.appendChild(r),1===e?(t=getLatestOpenedImg+1)>galleryImages.length&&(t=1):0===e&&(t=getLatestOpenedImg-1)<1&&(t=galleryImages.length),r.setAttribute("src","images/PRODUITS/img"+t+".jpg"),r.setAttribute("id","current-img"),console.log(r),getLatestOpenedImg=t,r.onload=function(){this.width;document.querySelector(".img-btn-next").style.cssText="right: "+calcImgToEdge+"vw",document.querySelector(".img-btn-prev").style.cssText="left: "+calcImgToEdge+"vw"}}galleryImages&&galleryImages.forEach(function(c,i){c.onclick=function(){var e=window.getComputedStyle(c).getPropertyValue("background-image").split("/images/PRODUITS/thumbs/")[1].replace('")',"");getLatestOpenedImg=i+1;var t=document.body,n=document.createElement("div");t.appendChild(n),n.setAttribute("class","img-window"),n.setAttribute("onclick","closeImg()");var r=document.createElement("img");n.appendChild(r),r.setAttribute("src","images/PRODUITS/"+e),r.setAttribute("id","current-img"),r.onload=function(){this.width;newPrevBtn=document.createElement("a"),PrevBtnFa=document.createElement("i"),PrevBtnFa.setAttribute("class","fas fa-arrow-circle-left img-btn-fa-prev"),newPrevBtn.setAttribute("class","img-btn-prev"),newPrevBtn.setAttribute("onclick","changeImg(0)"),newPrevBtn.appendChild(PrevBtnFa),t.appendChild(newPrevBtn),newPrevBtn.style.cssText="left: 10vw",newNextBtn=document.createElement("a"),NextBtnFa=document.createElement("i"),NextBtnFa.setAttribute("class","fas fa-arrow-circle-right img-btn-fa-next"),newNextBtn.setAttribute("class","img-btn-next"),newNextBtn.setAttribute("onclick","changeImg(1)"),newNextBtn.appendChild(NextBtnFa),t.appendChild(newNextBtn),newNextBtn.style.cssText="right: 10vw"}}});var galleryImageWidth=document.getElementsByClassName();