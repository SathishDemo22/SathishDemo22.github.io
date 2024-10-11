const objImage = document.querySelector("img");
objImage.onclick  =   () => {
    const sSrc = objImage.getAttribute("src");
    if(sSrc === "images/firefox-icon.png")
    {
        objImage.setAttribute("src", "images/chrome-icon.png");
    }
    else
    {
        objImage.setAttribute("src", "images/firefox-icon.png");
    }
};

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUserName(){
    const myName = prompt("Enter your Name");
    if(!myName)
    {
        setUserName();
    }else
    {
        localStorage.setItem("name",myName);
        myHeading.textContent = `Hello ${myName}`;
    }
    
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome back ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};