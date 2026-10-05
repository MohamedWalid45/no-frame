//Select landing page 
let landingPage = document.querySelector(".landing-page")
//Get Array Of Img 
let imgsArray =["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]

// Change Background Image Url 
setInterval( () => {
    //Get random Number
    let randomnumber=Math.floor(Math.random()* imgsArray.length)
    //Change Background Image
    landingPage.style.backgroundImage='url("imgs/'+imgsArray[randomnumber]+'")'
}

,3000);   