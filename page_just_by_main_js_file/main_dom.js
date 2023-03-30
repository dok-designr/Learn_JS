// Headers

// make header
let myHead = document.createElement("header");
// add header class
myHead.className = "web-head";

// -- make logo header 
let myHeadLogo = document.createElement("div");
let myHeadLogoText = document.createTextNode("Elzero");
// add logo class
myHeadLogo.className = "logo";
// add text in logo  
myHeadLogo.appendChild(myHeadLogoText)
// add logo in header
myHead.appendChild(myHeadLogo)

// -- make mneu header
let myHeadMneu = document.createElement("nav")
// add class mneu 
myHeadMneu.className = "web-mneu"
// make ul mneu 
let myUl = document.createElement("ul");
// make li mneu by for loop 
for (let i = 0; i <= 3; i++) {
// make li mneu 
let myLi = document.createElement("li");
// add li class
myLi.className = "li-mneu";
// make li text 
let myLiTexts = ["Home","About","Servics","contact"];
let myLiText = document.createTextNode(myLiTexts[i]);
// add text in li 
    myLi.appendChild(myLiText);
// add li in ul 
myUl.appendChild(myLi)
}

// add ul in mneu
myHeadMneu.appendChild(myUl);

// add menu in header
myHead.appendChild(myHeadMneu)

// add header in body
document.body.appendChild(myHead)

document.body.style.cssText = `
font-size: 15px;
font-family: Arial, Helvetica, sans-serif;
padding: 0;
margin: 0;
box-sizing: border-box;
list-style: none;
`;

// style header
let myHeadEle = document.querySelector(".web-head");
myHeadEle.style.cssText = `
display: flex;
justify-content: space-between;
align-items: center;
background-color: #ffff;
padding: 5px 70px;
`;

let mylogoEle = document.querySelector(".logo");
mylogoEle.style.cssText = `
color: rgb(85, 223, 204);
font-size: 20px;
font-weight: bold;
`;


let myMneuEle = document.querySelector("ul");
myMneuEle.style.cssText = `
list-style: none;
display: flex;
color: #333;
`;


let myLiStyle = document.querySelectorAll("li");
myLiStyle.forEach(ele => {
    ele.style.cssText = `
    padding-left: 10px;
    `; 
});

// make content
let myContent = document.createElement("div");
// add content class
myContent.className = "content";

// make 20 Product 
for (let i = 1; i <= 15; i++) {

// make Product 
let myProduct = document.createElement("div");
let myProductText = document.createTextNode("product");
// add content class
myProduct.className = "product";
// add text Product
myProduct.appendChild(myProductText);

// make span
let mySpan = document.createElement("span")
let mySpanText = document.createTextNode(i);
// add text span
mySpan.appendChild(mySpanText);

// add span in product
myProduct.prepend(mySpan);

// add product in Content
myContent.appendChild(myProduct);
}

// add Content in body
document.body.appendChild(myContent);

// style Content
let myContentS = document.querySelector(".content");
myContentS.style.cssText = `
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: #eeee;

`;

// style Product
let myProductS = document.querySelectorAll(".product");
myProductS.forEach(element => {
    element.style.cssText =` 
width: 260px;
background-color: #ffff;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
margin: 37px 20px 20px 20px;
flex-direction: column;
color: #9d9d9d;
`;
});

// style Span
let mySpanS = document.querySelectorAll("span");
mySpanS.forEach(element => {
element.style.cssText =`
font-size: 30px;
padding: 10px;
color: black;
`;
});


// make footer
let myFooter = document.createElement("footer");
let myFooterText = document.createTextNode("Copyrigth 2022");
// add text in footer
myFooter.appendChild(myFooterText)

//  add footer in body
document.body.appendChild(myFooter);

// style footer
let myFooterS =  document.querySelector("footer");
myFooterS.style.cssText = `
font-size: 18px;
text-align: center;
padding: 15px;
font-weight: bold;
background-color: #55dfcc;
`;