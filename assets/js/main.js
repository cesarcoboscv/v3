let herobg = document.getElementById("hero");
let navBar = document.getElementById("full-navbar");

// Device detection
const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};
if(deviceType() == "mobile"){
    navBar.style.display = "none";
}


//nav Color Scroll
navBar.style.height ="96px";
window.onscroll = function(){
    if (document.documentElement.scrollTop >= 80){
        navBar.style.backgroundColor = "#000000e0";
        navBar.style.height ="96px";
    } else{
        navBar.style.backgroundColor ="transparent";
        navBar.style.height ="128px";
    }
}


// Background Parallax effect

window.addEventListener("scroll", function () { 
    let con= window.scrollY
    herobg.style.backgroundPosition= '50% '+  ((con * -.5 )  + 'px');
})

//Hero background
let randomBackground
let bgimages=[];
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
}
class bgImage{
    constructor(url){
        this.url = url;}
}
// let hero01 = new bgImage("https://drive.google.com/uc?export=view&id=1WEAdQ9j5Oq-VQ1bgkKjzUqOA_AE8jxCC")
let hero02 = new bgImage("https://drive.google.com/uc?export=view&id=1LNBWkmDbz-SS4DCX-gAhVbPV_1rqM2vF")
let hero03 = new bgImage("https://drive.google.com/uc?export=view&id=1v9lzPnWZ8gguzP6FOtYQEm17znUveCuz")
// let hero04 = new bgImage("https://drive.google.com/uc?export=view&id=1PRrJl8y9u9rElpXV7XmYi8pK86-kev84")
let hero05 = new bgImage("https://drive.google.com/uc?export=view&id=1CDXToGqqCJN7K2jwm8JH7pD58c6lQT4x")
let hero06 = new bgImage("https://drive.google.com/uc?export=view&id=1wP3cZOfbyLJjywGDI3gkRxSRgAlkssSx")


bgimages.push(hero02,hero03,hero05,hero06);

function randomImage(){
    let randomImage = randomNumber(0, bgimages.length -1);
    return bgRandom =  bgimages[randomImage];
}
randomImage()
herobg.style.backgroundImage = `url("${bgRandom.url}")`;
