//---output to screen
/* 
-window.alert()
-document.write()
-console.log()
*/
/* window.alert("hello page");
document.write("<h1>hello <span>Page</span></h1>");
console.log("hello from js file"); */

//---console tools
console.log("log");
console.error("Error");
console.table(["amr", "ali", "yasser"]);

console.log("hello from %cjs %cfile", "color: red; font-size:40px;", "color: black; font-size:40px;");


/* 

---Data Types
-string
-number
-array = object
 */

console.log(typeof "amr yasser");
console.log(typeof 1000);
console.log(typeof 1000.45);
console.log(typeof [10, 23, 54]);
console.log(typeof ["as", "er", "un"]);
console.log(typeof { name: 'osama', age: 18, country: "ye" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);


/* ---var */

//you can use oue var and use "," like this:
var userName = "amr",
    age = 12
from = "yemen";


console.log(userName);
console.log(age);
console.log(from);

/* var, let, const */

/* 
-----var
--redeclare(Yes)
--access before declare (undefinde)
varible scope drama ()


*/

/* 
-----let
-redeclare (No = Error)
--access before declare (Error)
varible scope drama ()

*/

/* 
-----const 
-redeclare (No = Error)
--access before declare (Error)
varible scope drama ()


*/

const tsst = 1949;

console.log(tsst + "\n");


/* concatenation */

let a = "I heat",
    b = "JS over",
    c = "but I'm learn it";

console.log(a + "\ " + b);
console.log(a, b);

console.log(`${a} "${b}"
\\ ${c} ${12 * 21}`);

let logo = "DoK Designer";

let markUp = `
<div class="header">
        <h2>${logo}</h2>
        <ul>
            <li>Home</li>
            <li>about</li>
            <li>services</li>
        </ul>
    </div>
`;

document.write(markUp);

/* ---arithmetic operators  !!! */

console.log(10 + 20); // = 30
console.log(10 + "amr"); // = 10amr

console.log(10 - 20); // = -10
console.log(10 - "amr"); // = NaN = not a number
console.log(typeof NaN); // = number

console.log(10 * 20); // = 200
console.log(10 * -20); // = -200

console.log(10 / 20); // = 200
console.log(10 / -20); // = -200

console.log(2 ** 4); // = 2^4 = 16 = 2*2*2*2  

console.log(10 % 2); // 0
console.log(11 % 2); // 1

//++ increment [post / pre]
//-- decrement [post / pre]

//++ 
inum = 1;

/* 
++ [post: print valeu than add 1,
if ypu need see print agin ]
*/
inum++; // 1
console.log(inum);// 2

/* 
++ [pre: add 1 than print valeu]
*/
inum = 1;

++inum;
console.log(inum);


//-- 
dnum = 2;

/* 
-- [post: print valeu than remove 1,
if ypu need see print agin ]
*/
dnum--; //2
console.log(dnum); // 1

/* 
++ [pre: remove 1 than print valeu]
*/
dnum = 2

--dnum;
console.log(dnum);


/* ---unary operators  !!! */

console.log(+100);//100
console.log(+"100");//100 
console.log(+"-100"); //-100 
console.log(+"amr"); //NaN
console.log(+"15.5"); //15.5
console.log(+0xff); //255
console.log(+null); //0
console.log(+true); //1
console.log(+false); //0

console.log("_______________");

console.log(-100);//-100
console.log(-"100");//-100 
console.log(-"-100"); //100 
console.log(-"amr"); //NaN
console.log(-"15.5"); //-15.5
console.log(-0xff); //-255
console.log(-null); //-0
console.log(-true); //-1
console.log(-false); //-0


/* type coercion (type casting) */

let x = "10";
let y = 20;
let z = true;

console.log(x + y); //1020
console.log(+x + y); //30
console.log(y + z); //21, true = 1
console.log(x + y + z); //1020true
console.log(+x + y + z); //31 = 10 + 20 + 1


console.log(x - y); //-10
console.log(x - y); //-10
console.log("" - y); //-20 ,""=0
console.log(false - true); //--1 = console.log(+false - +true);

console.log("_______________");

/* assingment operators */

let v = 10;

v = v + 20;

v = 10

v += 20;

v -= 2;

console.log(v);


/*  /\/\/\  */

/* 
افتح صوره تحدي الاوبريتر
 */

/* 
a = 10
b = "10"
c = 80

1-[++a] [+] [+b++] [+] [+c++] [-] [+a++]

2-[?: valeu, explain]

[++a: 11,per] [+] [-b: -20,unary] [+] \\
[+c++: 81,unary & post] [-] [-a++: -11] \\
[+] [+a: 10,unary]

3-[?: explain]
[--c:  pre] [+] [+b] [+]


*/


/* number */
console.log(1000000);
console.log(1_000_000);
console.log(1e6); //e6 = 000000
console.log(10 ** 6);
console.log(1000000.00);
console.log(1000000.00);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

/* number() methods*/

//reblace number to string
console.log((100).toString());
console.log(100.10.toString());
console.log((100.10).toString());
/*  if number after dot >= 5 , +1 for number */
console.log(100.44454.toFixed(3));

console.log(parseInt("100 aa")); //100
console.log(parseFloat("100.500 aa"));//100.5 
console.log(parseFloat(" aa 100.500 aa"));//NaN
//chace if your valeu is string
console.log(Number.isInteger("100"));//false
console.log(Number.isInteger(100.22));//false
console.log(Number.isInteger(100));//true 

console.log(Number.isNaN("amr"));//false, amr is string
console.log(Number.isNaN("amr" / 12));//true


/* math object */

//giv you high vale 
console.log(Math.round(99.2));
console.log(Math.round(99.5));

//giv you high value 
console.log(Math.ceil(99.2));
//giv you low value 
console.log(Math.floor(99.9));

//giv you smallest number
console.log(Math.min(10, 100, 3, -11, 211, 99));
//giv you bigest number
console.log(Math.max(10, 100, 3, -11, 211, 99));

//some random by your number
console.log(Math.random(83));
//giv you before dot number
console.log(Math.trunc(99.3233));


/*  /\/\/\ */


let r = 1_00;
let o = 2_00.5;
let l = 1e2;
let d = 2.4;

/*
1-giv me smallest number and don't show
number after dot 
 */


console.log(Math.floor(r));
console.log(Math.floor(o));
console.log(Math.floor(l));
console.log(Math.floor(d));


/* 
giv me 10000 by r + d and you can't use a,d
over oun time  
*/

console.log(r ** Math.floor(d));

/* 
giv  me number 2 by d
d = 2.4
 */

console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(parseInt(d.toFixed(0)));
//i'm do this :
console.log(+d.toFixed(0));


// console.log();
// console.log();

console.log("---string methods---");


/* string methods */

let theName = " Ziad ";

console.log(theName[2]);

console.log(theName.charAt(1));

console.log(theName.length);

console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(3).toUpperCase());

//console.log(theName[4].toUpperCase());


let stix = "O-games77x Amr Yasser is relax";

console.log(stix.indexOf("is"));//giv you index
console.log(stix.indexOf("is, 22"));
console.log(stix.indexOf("m"));

console.log(stix.lastIndexOf("is"));
console.log(stix.lastIndexOf("m"));

//cat string by your index numbers start & end
console.log(stix.slice(2, 10));
console.log(stix.slice(-10));
console.log(stix.slice(-10, -2));

//repeat think 
console.log(stix.repeat(3));

//cat string and replec valeu to arryr
console.log(stix.split(" "));
console.log(stix.split("", 10));


let j = "pc gamer rgb";

console.log(j.length);

//cat string by your index
console.log(j.substring(1));

//cat string by your index numbers start & end
console.log(j.substring(1, 10));

/* if you write big start number with small end number,
substring() swith number for you  */
console.log(j.substring(10, 1));

//if you write "-num" substring() replec it to "0"
console.log(j.substring(-10, 1));//(0, 1) 


/* 
if you do like slice() with "-num", you can do this:
j.length = 12
j.length - 1 = 11, so substring() strat to index 9 

j.length - 3 = 9, so substring() strat to index 9 
*/
console.log(j.substring(j.length - 3));

/*
j.length - 3 = 9, j.length - = 11 so
substring() strat to index 9 , end to index 11
*/
console.log(j.substring(j.length - 3, j.length - 1));


//write how matsh need items, you can set start & end
console.log(j.substr(0, 2));
/* if you writ number = length or 
number > length = <empty string> */
console.log(j.substr(12));
// start too -3 end 2 
console.log(j.substr(-3, 2));

//sarch word by includes
console.log(j.includes("gamer"));
//you can writ start number 
console.log(j.includes("gamer", 3));

//chec first valeu
console.log(j.startsWith("p"));
//you can set start number 
console.log(j.startsWith("g", 4));
//chec first valeu(word)
console.log(j.startsWith("gamer", 3));

//chec last valeu, endsWith() use length(1) not index (0)
console.log(j.endsWith("r"));
//you can set length number 
console.log(j.endsWith("r", 3));// false
console.log(j.endsWith("c", 2));// true


/* /\/\/\ */



let ews = "Elzero Web School";

console.log(ews.slice(2, 6).charAt(0).toUpperCase() + ews.slice(3, 6));


console.log(ews.substring(ews.length - 5).charAt(1).toUpperCase().repeat(8));


console.log(ews.slice(0, 6).split());


console.log(`${ews.substr(0, 6)} ${ews.substr(-6)}`);

console.log(ews.slice(0, 1).toLowerCase() + ews.substring(1, ews.length - 1).toUpperCase() + ews.substring(ews.length - 1).toLowerCase());




/* comparison */

// == compare value omly
console.log(10 == "10");
console.log(-100 == "-100");
console.log(10 != "10");

// == compare value omly
console.log(10 === "10");
console.log(10 !== "10");
console.log(10 !== "10");

// 
console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

/* 
! not
&& and
|| or

if () {

}
*/

console.log(!(10 == "10"));

let price = 100,
    discount = false,
    discountAmount = 30,
    country = "ye";
student = true;


/* if (discount === true) {
    price -= discountAmount;
} else if (country === "Ye") {
    price -= discountAmount;
} else if (country === "sy") {
    price -= 50;
} else {
    price -= 10;
}

console.log(price) */

if (discount === true) {
    price -= discountAmount;

} else if (country === "Ye") {


    if (student === true) {
        price -= discountAmount + 30;
    }

} else {
    price -= discountAmount + 10;

}

console.log(price)




/*  Conditional Ternary Operator */


let nameC = "ahmed",
    theGender = "male",
    theAge = 30;

if (theGender === "male") {
    console.log("mr");

} else {
    console.log("mrs");

}


/*
Condition ? (if true )   :   (if false)
 .......  =  do this   else   do this

 Condition ? (if true )    :    Condition2 ?  (if true)    :   (if false)
  .......  =  do this  else if  .......... =   do this   else  do this

 */
theGender === "male" ? "mr" : "mrs";

let resultC = theGender === "male" ? "mr" : "mrs";

console.log(resultC);

console.log(theGender === "male" ? "mr" : "mrs");



console.log(`hello ${theGender === "male" ? "mr" : "mrs"} ${nameC}`);

//theAge < 20 ? console.log(20) : theAge > 20 && theAge < 60 ? console.log("20 to 60") : theAge > 60 ? console.log("larger than 60") : console.log("unknown");

/* you can' do this */
theAge < 20
    ? console.log(20)
    : theAge > 20 && theAge < 60
        ? console.log("20 to 60")
        : theAge > 60
            ? console.log("larger than 60")
            : console.log("unknown");



/*  how you can know true or false use Boolean() */

console.log(Boolean(0));

let price2 = 0;

/* || work with falsey valeu like " ", 0, false */
console.log(`the price is ${price2 || 200}`);

let price3 = null;
/* ?? work with nullish valeu like null */
console.log(`the price is ${price3 ?? 200}`);


/* /\/\/\/\/\/\ */

let chNum = 10;

chNum < 10
    ? console.log(10)
    : chNum >= 10 && chNum <= 40
        ? console.log("10 to 40")
        : chNum > 40
            ? console.log("> 40")
            : console.log("unknown");



let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
    console.log("Good");
}

if (st[st.indexOf("W")] === "W") {
    console.log("Good");

}


if (+st !== "string") {
    console.log("Good");

}

if (typeof (st.length) === "number") {
    console.log("Good");

}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}




/* switch */


let day = 1;

switch (day) {
    case 0:
        console.log("saturday")
        break;

    case 1:
        console.log("sunday")
        break;

    /* you can use over oun case for oun comand */
    case 2:
    case 3:
        console.log("saturday")
        break;

    default:
        console.log("unknown day")
        break;
}

/* /\/\/\/\/\/\/\/\/\/\/\/\/\ */


let jop = "manager";
let salary = 0;

switch (jop) {
    case "manager":
        salary = 8000;
        console.log(salary);
        break;

    case "it":
    case "support":
        salary = 6000;
        console.log(salary);
        break;

    case "developer":
    case "designer":
        salary = 7000;
        console.log(salary);
        break;

    default:
        salary = 4000;
        console.log(salary);
        break;
}


let offDay = 0;
let money = 0;

if (offDay === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);

} else if (offDay === 1 || offDay === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);

} else if (offDay === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);

} else if (offDay === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);

} else {
    money = 500;
    console.log(`My Money is ${money}`);

}



/* array */

let os = ["linux", "windows", "macOS", ["freebsd", "uinex"]];

console.log(`i'm use ${os[0]}`);
console.log(`i'm use ${os[2]}`);
console.log(`i'm use ${os[0][4]}`);
console.log(`i'm use ${os[3][0]}`);
console.log(`i'm use ${os[3][1][2]}`);

console.log(os);

os[2] = "void";
console.log(os);

os[3] = "gento";
console.log(os);

os[3] = ["pop os", "zorin os"];
console.log(os);

os[3][1] = "arch";
console.log(os);

// chck is array

console.log(Array.isArray(os));


let frinds = ["amr", "ahmed", "salem", "osama"];

console.log(frinds.length);

// add your valeu but make 2 empty valeu
/* frinds[6] = "ali";

console.log(frinds);

console.log(frinds.length); 
 */

// add valeu to end array  
frinds[frinds.length] = "ali";
console.log(frinds);


// update last valeu in array  
frinds[frinds.length - 1] = "fisal";
console.log(frinds);


/* add & remove from array */

let devLang = ["rust", "js", "go", "python"];

console.log(devLang);

// add valeu to the first array
devLang.unshift("java", "php");
console.log(devLang);

// add valeu to end array
devLang.push("c#", "c++");
console.log(devLang);

// remove the first valeu in array and return it
let hft = devLang.shift();
console.log(devLang);
console.log(hft)

// remove the last valeu in array and return it
let pob = devLang.pop();
console.log(devLang);
console.log(pob)


let jdm = ["supra", "gtr", "s15", "350z", "supra"];

console.log(jdm);

/* 
searche in your array,
return index your valeu  
*/
console.log(jdm.indexOf("supra"));
// you can set search num
console.log(jdm.indexOf("supra", 2));

/* 
searche in your array, but start in the end,
index start in the first
return index your valeu 

*/
console.log(jdm.lastIndexOf("supra"));
// you can set search num
console.log(jdm.lastIndexOf("supra", -2));

//chack if your valeu found in array
console.log(jdm.includes("supra"));
// you can set start num
console.log(jdm.includes("supra"));


let srt = [10, "sayaed", "mohamed", "90", 1000, 100, 20, "10", -20, -10];
console.log(srt);

console.log(srt.sort());

console.log(srt.reverse());

/* 
cut valeus in your array
*/
let phone = ["sam", "lg", "lt", "mezo", "redmi", "iphone"];

console.log(phone);
/* 
slice() make array for cut part, not edit mien array  
 */
console.log(phone.slice());
console.log(phone.slice(1));
console.log(phone.slice(1, 3));
console.log(phone.slice(-3));
console.log(phone.slice(1, -2));
console.log(phone.slice(-4, -2));
console.log(phone);

/* 
splice(start num, delet valeu num, new valeu for add(to first)),
but splice() edit mine arry
*/
phone.splice(1, 2, "oppo", "htc")

console.log(phone);


/* 
concet betwen array
 */
let pc = ["asus", "asrock", "msi"];

let newPc = ["glacx", "colorfull"];

let oldPc = ["ibm", "intel"];

// you can add valeu when concet betwen array
let allPc = pc.concat(newPc, oldPc, "amd", [1, 2, 3]);

console.log(allPc);

// replac array to string, you can set space mark

console.log(allPc.join());
console.log(allPc.join(""));
console.log(allPc.join(" @ "));
console.log(allPc.join("|"));
console.log(allPc.join("|").toUpperCase());


/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */

let zero = 0,
    counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log(zero)

console.log(my.slice(zero, ++zero - -counter--).reverse());
console.log(zero)

zero = 0;

console.log(my.slice(++zero, -++counter).reverse());
zero = 0;

console.log(zero)

let Elz = my.slice(++zero, -counter++).reverse();
zero = 0;
counter = 3
//  [ "Elham", "Mazero" ]
console.log(counter)
console.log(Elz[zero].slice(zero, -counter) + Elz[++zero].slice(--counter));


let ro = my[1].slice(-2);
console.log(ro[0] + ro.substr(-1).toUpperCase())




/* for loob 

for (1; 2; 3){
    ........
}



for (let i = 0; i < 10; i++) {
    console.log(i)
} 
*/

let lopJs = [1, 2, 3, "veu", "react", "elctron", 4, "nextjs"];

let onlyName = [];

for (let i = 0; i < lopJs.length; i++) {
    if (typeof lopJs[i] === "string") {
        onlyName.push(lopJs[i]);
    }
}

console.log(onlyName);


let products = ["keyboard", "mouse", "pen", "pad", "monitor"];

let colors = ["red", "green", "black"];

let models = [2020, 2021];


for (let lpc = 0; lpc < products.length; lpc++) {
    console.log("#".repeat(10));
    console.log(`# ${products[lpc]}`);
    console.log("#".repeat(10));

    console.log("colors: ");
    for (let j = 0; j < colors.length; j++) {
        console.log(`-${colors[j]}`);
    }

    console.log("models: ");
    for (let k = 0; k < models.length; k++) {
        console.log(`-${models[k]}`);
    }

}


let loopCntrl = ["cpu", "gpu", "ram", 10, 3, "MD", 32, "PS"];

let colorCntrl = ["wieth", "black", "graay"];

mineLoop: for (let lcl = 0; lcl < loopCntrl.length; lcl++) {
    if (typeof loopCntrl[lcl] === "number") {
        continue;
    }
    console.log(loopCntrl[lcl]);

    nestedLoop: for (let lbk = 0; lbk < colorCntrl.length; lbk++) {
        if (colorCntrl[lbk] === "graay") {
            break mineLoop;
        }
        console.log(`-${colorCntrl[lbk]}`);
    }

}

let numArr = [1, 2, 4, 5, 6, 7, 8];

/* 1 */let forLop = 0;
for (/* 1 */;/* 2 */;/* 3 */) {
    console.log(numArr[forLop]);
    /* 3 */forLop += 1;
    /* 2 */ if (forLop === numArr.length) { break; };
}


let products2 = ["bag", "hiadset", "laptop", "case", "ram", "net"];
let prdctColor = ["red", "black", "white"];
let showCount = 4;

document.write(`<h2>show ${showCount} products</h2>`)

for (let sh = 0; sh < showCount; sh++) {
    document.write(`<div>`);
    document.write(`<h3>[${sh + 1}] ${products2[sh]}</h3>`)

    for (let cf = 0; cf < prdctColor.length; cf++) {
        document.write(`<p>-${prdctColor[cf]}</p>`);
    }
    document.write(`<p>${prdctColor.join(" | ")}</p>`);
    document.write(`<div>`);
}



/* while */

let nn = [9, 8, 7, 6, 5, 4, 3, 2, 1];

let inx = 0;

while (inx < nn.length) {
    console.log(nn[inx]);
    inx += 1;
}

console.log("----------");

/* do while */

let dow = 0;
do {
    console.log(dow);
    dow++;
} while (false);

console.log(dow);

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */

let myAdmin = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

let numAdmin = myAdmin.indexOf("Stop");
let contAD = 1;
document.write(`
<hr>
<div>We Have ${numAdmin} Admins</div>
<hr>
`)

for (let ad = 0; ad < numAdmin; ad++) {
    document.write(`<div>`);
    document.write(`the admin for team ${ad + 1} is ${myAdmin[ad]}`)
    document.write(`<h3> Team Members: </h3>`);

    for (let tn = 0; tn < myEmployees.length; tn++) {
        if (myEmployees[tn].charAt(0) === myAdmin[ad].charAt(0)) {
            document.write(`<p>${contAD}-${myEmployees[tn]}</p>`);
            contAD += 1;
        } else {

            continue;
        }
    }
    console.log("----")
    document.write(`</div>`);
    document.write(`<hr>`);



}




/* function */

function sayHi(userName, userAge) {
    if (userAge < 20) {
        console.log(`Sory ${userName} you can't use this app`);
    } else {
        console.log(`hi ${userName} your age is ${userAge}`);
    }

}

sayHi("Amr", 21);
sayHi("omar", 13);


function rangeYears(start, end, exclud) {
    for (let i = start; i <= end; i++) {
        if (i === exclud) {
            continue;
        } else {
            console.log(i);
        }

    }
}

rangeYears(2003, 2022, 2020);

function calc(num1, num2) {
    return num1 + num2;
    // you can't write anythink after
    console.log("aaa")
}

let reult = calc(21, 32);

console.log(reult)


/* you can use return for stop loop*/

function generate(startG, endG) {
    for (let i = startG; i <= endG; i++) {
        if (i === 15) {
            return `Interruptting`;
        }
        console.log(i);
    }
}

generate(10, 25)


/* you can set defult vlaeu for parametr, for exsampl:*/

function nameaAndAge(name = "Unknown", age = "Unknown") {
    // if (age === undefined) {
    //     age = "Unknown";
    // }

    // age = age || "Unknown"
    return `Hello ${name} Your Age Is ${age}`;
}

console.log(nameaAndAge("Amr", "18"));


/* rest parametr : grup valeu in oun parametr(this parametr is array) */
function cup(...numbersCup) {
    let resultCup = 0;
    for (let i = 0; i < numbersCup.length; i++) {
        resultCup += numbersCup[i];
    }
    return `Final Result Is ${resultCup}`;
}

console.log(cup(21, 3, 56, 43, 54));


function showInfo(us = "Un", ag = "Un", rt = 0, show = "yes", ...sk) {
    document.write(`<hr> <div>`);
    document.write(`<h2>Welcome, ${us}</h2>`);
    document.write(`<p>Age: ${ag}</p>`);
    document.write(`<p>Hour Rate: $${rt}</p>`);
    if (show === "yes") {
        if (sk.length > 0) {
            document.write(`<h2>Skills:</h2>`);
            for (let i = 0; i < sk.length; i++) {
                document.write(`<p>${i + 1}-${sk[i]}</p>`);
            }

        } else {
            document.write(`<p>Skills: No Skills</p>`);
        }

    } else {
        if (sk.length > 0) {
            document.write(`<p>Skills Is hidden</p>`);
        } else {
            document.write(`<p>Hedden Skills: (No Skills) </p>`);
        }
    }
    document.write(`</div>`);

}

showInfo("Amr", 18, 8, "yes", "html", "css", "js");


/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */

// : = if | ? = do this

function showDetails(a, b, s) {

    let nameSd;
    let ageSd;
    let avlbl;

    typeof a === "string"
        ? nameSd = a
        : typeof b === "string"
            ? nameSd = b
            : nameSd = s;

    typeof a === "number"
        ? ageSd = a
        : typeof b === "number"
            ? ageSd = b
            : ageSd = s;

    typeof a === "boolean"
        ? avlbl = a
        : typeof b === "boolean"
            ? avlbl = b
            : avlbl = s;

    avlbl === true
        ? avlbl = "you are available for hire"
        : avlbl = "you are not available for hire";


    console.log(`hello ${nameSd}, your age is ${ageSd}, ${avlbl} `)

}

showDetails("sas", 2, false);
showDetails(2, "sddsadas", false);


/* theAge < 20 
? console.log(20) 
: theAge > 20 && theAge < 60 
? console.log("20 to 60") 
: theAge > 60 
? console.log("larger than 60") 
: console.log("unknown"); */



/* Anonymous Function */

// you can't do this
/* console.log(anonFunc(2, 4)); */

let anonFunc = function (n1, n2) {
    return n1 + n2;

}

console.log(anonFunc(2, 4));



document.getElementById("show").onclick = function () {
    console.log("show");
};

/* setTimeout(function () {
    console.log("good");
}, 2000) */


/* and you can do this */
function tst() {
    console.log("test-tst");

}

document.getElementById("show2").onclick = tst()


/* Nested Function */

// exampl 1

function sayMessage(fName, lName) {
    let message = `Hello`;

    function concatMsg() {
        message = `${message} ${fName} ${lName}`
    }

    concatMsg();
    return message;
}

console.log(sayMessage("Amr", "Yasser"));

// exampl 2

function sayMessage(fName, lName) {
    let message = `Hello`;

    function concatMsg() {
        return `${message} ${fName} ${lName}`
    }

    return concatMsg();
}

console.log(sayMessage("Amr", "Yasser"));


// exampl 2

function sayMessage(fName, lName) {
    let message = `Hello`;

    function concatMsg() {

        function getFullName() {
            return `${fName} ${lName}`
        }

        return `${message} ${getFullName()}`
    }


    return concatMsg();
}

console.log(sayMessage("Amr", "Yasser"));


/* Arrow Function 

let print = () => {
    return 10;
}

*/

/*
you can writ arrow func in oun line (don't need "return" in oun line)
and you don't need writ it in varible.
let print = () => 10;

console.log(print());
 */
let print = _ => 10;

console.log(print());


let printNum = (num) => num;

console.log(printNum(28));


let printCupNum = (numc1, numc2) => numc1 + numc2;

console.log(printCupNum(20, 30));


/* 
Scope - Global And Local 

JS sarch in local if not fond any think sarch in global

*/

// Global Scope
var scp = 1;
let scp2 = 2;

function showText() {
    // Local Scope

    var scp = 1;
    let scp2 = 1;

    console.log(`funcriion - from Local ${scp}`);
    console.log(`funcriion - from Local ${scp2}`);


}

console.log(`from  global ${scp}`);
console.log(`from  global ${scp2}`);

showText();


// if use 'var' you can't use local scope, use let or const
/* var gl = 12;

if (10 === 10) {
    var gl = 86;
console.log(gl);

}

console.log(gl);
 */

var gl = 12;

if (10 === 10) {
    let gl = 86;
    // local
    console.log(gl);
}
//global
console.log(gl);

function parent() {
    let a = 10;

    function child() {
        console.log(`from child ${a}`);
        // console.log(`from child ${b}`);


        function grand() {
            let b = 100;

            console.log(`from grand ${a}`);
            console.log(`from grand ${b}`);

        }
        grand();
    }
    child();
}
parent();


/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */

let arrowNames = (...arwName) => `String ${"[".repeat(arwName.length) + arwName.join("]")}`

console.log(arrowNames("osama", "mohamed", "ali", "ibrahim"))



let numArrow = [20, 50, 10, 60];

// let calcArrw = (oun, two, ...nums) => +nums + oun + two;

let calcArrw = function (oun, two, ...nums) {
    return +nums + oun + two;

}

console.log(calcArrw(10, numArrow[1], numArrow[0]))



/*
 Higher Order Functions 

1- map();
-you can write function as a parametr in map()
-map() working with arry 
-map() give you(return) result in new arry  

---map() syntex:

map(call back function"your functin"(element "items in array your array", index "like i in for loop", array "your array"), thisArg);

*/


let listNum = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < listNum.length; i++) {
    newArray.push(listNum[i] + listNum[i]);
}

console.log(newArray);

/* 
for learn

let addSelf = listNum.map(function (element, index, array) {
    console.log(`index: ${index}`);
    console.log(`element: ${element}`);
    console.log(`array: ${array}`);
    console.log(`arg: ${this}`);
    console.log(`--------------------`);

}, 10) */

/* let addSelf = listNum.map(function (element, index, array) {
    return element + element;

}, 10); */


function addittion(ele) {
    return ele + ele;
};

// let addSelf = listNum.map(addittion);

let addSelf = listNum.map((el) => el + el, 10);



let swappingCases = "elZERo";
let invertedNmbers = [1, -10, -20, 15, 100, -30];
let ignoreNubers = "Elz123er4o";


let sw = swappingCases.split("").map(function (a) {
    return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase();
}).join("");

console.log(sw);


let inv = invertedNmbers.map((ed) => {
    return -ed;
});

console.log(inv);


let ign = ignoreNubers.split("").map((gn) => {
    // if "gn" NaN return it else return ""(nothing)
    return isNaN(parseInt(gn)) ? gn : "";
}).join("");

console.log(ign);


/*

filter()
syntex is the same withe map() but,
filter() take true valeu after
chake by your Condition and but valeu in new array


*/

let frindsFr = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgead", "Israa"];

let filteredFrind = frindsFr.filter(function (el) {
    return el.startsWith("A");
});

console.log(filteredFrind);

let filNum = [11, 20, 2, 5, 17, 10];

let evNum = filNum.filter((el) => el % 2 === 0);

console.log(evNum);


let sntns = "I Love Food Code Too Playing Much";

let shortWords = sntns.split(" ").filter(function (ele) {
    return ele.length <= 4;
}).join(" ");

console.log(shortWords)


let ignoreNubers2 = "Elz123er4o";

let igno = ignoreNubers2.split("").filter(function (elem) {
    return isNaN(parseInt(elem));
}).join("");

console.log(igno)


let mix = "A13BS2ZX";


let mixed = mix.split("").filter(function (el) {
    return !isNaN(parseInt(el))
}).map(function (el) {
    return el * el;
}).join("");

console.log(mixed)


/* 
reduce()


let numRedu = [10, 20 ,15 , 30];

let add = numRedu.reduce(function (acc, current, index, arr) {
    console.log(`acc  = ${acc}`);
    console.log(`current  = ${current}`);
    console.log(`index  = ${index}`);
    console.log(`acc  = ${arr}`);
    console.log(`result  = ${acc + current}`);
    console.log(`---------------------------`);
    return acc + current;
},5)

acc  = 5
current  = 10
index  = 0
acc  = 10,20,15,30
result  = 15
---------------------------
acc  = 15
current  = 20
index  = 1
acc  = 10,20,15,30
result  = 35
---------------------------
acc  = 35
current  = 15
index  = 2
acc  = 10,20,15,30
result  = 50
---------------------------
acc  = 50
current  = 30
index  = 3
acc  = 10,20,15,30
result  = 80
---------------------------

*/


let numRedu = [10, 20, 15, 30];

let add = numRedu.reduce(function (acc, current, index, arr) {
    console.log(`acc  = ${acc}`);
    console.log(`current  = ${current}`);
    console.log(`index  = ${index}`);
    console.log(`acc  = ${arr}`);
    console.log(`result  = ${acc + current}`);
    console.log(`---------------------------`);
    return acc + current;
}, 5)

console.log(add);


let theBiggest = ["Bla", "propaganda", "other", "AAA", "battery", "test"];

let check = theBiggest.reduce(function (acc, current) {
    return acc.length > current.length ? acc : current
});
console.log(check);



let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars.filter(function (ele) {
    return !ele.startsWith("@");

}).reduce(function (acc, current) {
    return `${acc}${current}`;
})

console.log(finalString);

let allLis = document.querySelectorAll("ul li");
let allDiv = document.querySelectorAll(".cont div");

allLis.forEach(function (ele) {

    ele.onclick = function () {
        // remove active class from all elements
        allLis.forEach(function (ele) {
            ele.classList.remove("active");
        });
        // add active class to this elements
        this.classList.add("active");
        // hide all dive 
        allDiv.forEach(function (ele) {
            ele.style.display = "none";
        });

    };

});


/*

/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

[
  '1', '2', '3', 'EE', 'l',
  'z', 'e', 'r', 'o',  '_',
  'W', 'e', 'b', '_',  'S',
  'c', 'h', 'o', 'o',  'l',
  '2', '0', 'z'
]


[
'EE', 'l', 'z', 'e', 'r','o', '_', 'W', 'e', 'b','_','S', 'c', 'h', 'o','o',  'l', 'z'
]


*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z"

let solution = myString.split("").filter(function (ele) {
    return !ele.startsWith(",") && isNaN(ele)
}).map(function (el) {
    return el === "_" ? " " : el && myString[--myString.length] === el ? "" : el
}).reduce(function (acc, current) {
    return acc + current
}).slice(true);

console.log(solution);

//  Object - Introduction 79

let myOj = "contry of";
let user = {
    //properties
    userName: "amr",
    userAge: 18,
    "contry of": "aden",

    //methods
    syhello: function () {
        return `hello`;
    },
};

console.log(user.userName);
console.log(user.userAge);
console.log(user.syhello());
console.log(user["contry of"]);
console.log(user[myOj]);
console.log(user["userName"]);

//Nested Object 

let userNest = {
    name: "ali",
    age: 18,
    skills: ["html", "css", "js"],
    available: false,
    addresses: {
        aden: "kretar",
        hadrmot: {
            oun: "aill",
            tow: "deas"
        },
    },

    checkAv: function () {
        if (userNest.available === true) {
            return `Free for work`
        } else {
            return `Not free for work`
        }
    },

};

console.log(userNest.name);
console.log(userNest.age);
console.log(userNest.skills);
console.log(userNest.skills[2]);
console.log(userNest.addresses.aden);
console.log(userNest.addresses.hadrmot.oun);
console.log(userNest.addresses.hadrmot.tow);
console.log(userNest["addresses"]["hadrmot"]["tow"]);
console.log(userNest.checkAv());


//new object with keyword

let he = {};

console.log(he);

he.name = "omar";
he["age"] = 19;

he.sayH = () => `hi`;

console.log(he);

let she = new Object({
    contry: "ym",
});

console.log(she);

she.name = "alia";
she["age"] = 13;

she.sayH = () => `she hi`;

console.log(she);


console.log(this);
console.log(this === window);

thsVar = 100;

console.log(window.thsVar);
console.log(this.thsVar);

function sayHello() {
    console.log(this);
    return this;
}

sayHello()

console.log(sayHello() === window);


document.getElementById("cl").onclick = function () {
    console.log(this)
}

let youAge = {
    age: 18,
    ageInDays: () => this.age * 365,
};

console.log(youAge.age);
console.log(youAge.ageInDays());

/* 
let car = {
    age: 20,
    doubleAge: function () {
        return car.age * 2;
    },
};
 */

let car = {
    age: 20,
    doubleAge: function () {
        return this.age * 2;
    },
};


console.log(car);
console.log(car.age);
console.log(car.doubleAge());


let obj = Object.create({});

obj.x = 100;

console.log(obj);
console.log(obj.x);

let copyObj = Object.create(car);

copyObj.age = 30

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());


let opj1 = {
    prop1: 1,
    methq: function () {
        return this.prop1;
    }
}


let opj_1 = {
    prop1: 1,
    methq: function () {
        return this.prop1;
    }
}

// DOM - 86 / select elements

let myIdElement = document.getElementById("my-div");
let myTagElement = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
// query = any tag, class, id, select in query like css select 
let myqueryElement = document.querySelector(".my-span") //get first element
let myqueryAllElement = document.querySelectorAll(".my-span")

console.log(myIdElement);
console.log(myTagElement);
console.log(myTagElement[1]);
console.log(myClassElement);
console.log(myqueryElement);
console.log(myqueryElement);
console.log(myqueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0]);
console.log(document.forms[0].oun.value);
console.log(document.links[1].href);


// change content by DOM
let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

// change content with HTML tag
myElement.innerHTML = "hello form <span>main.js</span> file"
console.log(myElement.innerHTML);

// only change content 
myElement.textContent = "hello form <span>main.js</span> file"
console.log(myElement.textContent);

// change atrpiot, if  Attribute not found js make it for you
document.images[0].src = "../web_project/template_1/images/logo.png"
document.images[0].alt = "logo";
document.images[0].title = "picture";
// add id
document.images[0].id = "pic";
// add class 
document.images[0].className = "img-js";


let mylink = document.querySelector(".link");


console.log(mylink.getAttribute("class"))
console.log(mylink.getAttribute("href"))

mylink.setAttribute("href", "httbs://github.com");
mylink.setAttribute("title", "github");


console.log(document.getElementsByTagName("p")[2].attributes)

let myP = document.getElementsByTagName("p")[2];

if (myP.hasAttribute("data-src")) {

    if (myP.getAttribute("data-src" === "")) {
        myP.removeAttribute("data-src");

    } else {
        myP.setAttribute("data-src", "new valeu");
    }
} else {
    console.log("not found")
}


if (myP.hasAttributes()) {
    console.log(`has Attributes`)
}

if (document.getElementsByTagName("div")[6].hasAttributes()) {
    console.log(`Div has Attributes`)
} else {
    console.log(`Div not has Attributes`)

}


// create element DOM 

let myElementTow = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("product oun");
let myComent = document.createComment("this is div")

myElementTow.className = "product";
myElementTow.setAttributeNode(myAttr)
myElementTow.setAttribute("data-custom", "test")

myElementTow.appendChild(myText);

myElementTow.appendChild(myComent);

// append element to body
document.body.appendChild(myElementTow);

console.log(myElementTow);




// let myDiv = document.createElement("div");
// let myDivH = document.createElement("h3");
// let myDivP = document.createElement("p");

// let myHText = document.createTextNode("prodact H");
// let myPText = document.createTextNode("prodact P");



// // add h3 text
// myDivH.appendChild(myHText);

// // add h3 to main div
// myDiv.appendChild(myDivH);

// // add P text
// myDivP.appendChild(myPText);

// // add h3 to main div
// myDiv.appendChild(myDivP);

// myDiv.className = "prod";
// document.body.appendChild(myDiv)


// Make 100 prodact
for (let i = 1; i <= 5; i++) {
    
    let myDiv = document.createElement("div");
let myDivH = document.createElement("h3");
let myDivP = document.createElement("p");

let myHText = document.createTextNode(`prodact H ${i}`);
let myPText = document.createTextNode(`prodact P ${i}`);



// add h3 text
myDivH.appendChild(myHText);

// add h3 class
myDivH.className = `prodH`

// add h3 to main div
myDiv.appendChild(myDivH);

// add P text
myDivP.appendChild(myPText);

// add P class
myDivP.className = `prodP`

// add h3 to main div
myDiv.appendChild(myDivP);

myDiv.className = `prod`;
document.body.appendChild(myDiv)
}

let myEle = document.querySelectorAll("div")[7];

console.log(myEle);

// only element child
console.log(myEle.children);
console.log(myEle.children[0]);

// all thinks in main div, remaber space betwen text and line is child Nodes
console.log(myEle.childNodes);
console.log(myEle.childNodes[0]);

// all thinks first and last in main div, remaber space betwen text and line is child Nodes
console.log(myEle.firstChild);
console.log(myEle.lastChild);

// only first and last element child
console.log(myEle.firstElementChild);
console.log(myEle.lastElementChild);

/*  DOM (Events)
 
onclick
oncontextmenu
onmouseenter

onscroll
onresize
onsubmit

*/

let myBtn = document.getElementById("btnEvn");

myBtn.onmouseleave = function () {
    console.log("clicked");
};

window.onresize = function () {
    console.log("scroll")
}


document.links[3].onclick = function (event) {
    console.log(event);
    event.preventDefault(); 
};

// selact attributes by querySelector()
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");


document.forms[3].onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;

    
    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
        ageInput.focus();
    } 

    if (ageInput.value !== "") {
        ageValid = true;
    } 

    if (userValid === false || ageValid === false) {
        e.preventDefault();
    }

};

/* DOM (Events simulation) 

onblur
onfocus
onclick

blur()
focus()
click()

*/

let ounEv = document.querySelectorAll(".oun")[0];
let twoEv = document.querySelectorAll(".two")[0];


window.onload = () => { ounEv.focus(); }

// ounEv.onblur = () => { document.links[4].click() }

ounEv.onblur = () => { twoEv.focus(); }


/* DOM (class list) 



*/

let divEv = document.getElementsByTagName("div")[8];


console.log(divEv.classList);
console.log(typeof divEv.classList);

// sarche and return bool valeu
console.log(divEv.classList.contains("osama"));
console.log(divEv.classList.contains("show"));

// get name by index
console.log(divEv.classList.item("2"));

// add 
divEv.onmouseenter = function () {
    divEv.classList.add("add-oun", "add-two");
}

// remove
divEv.onclick = function () {
    divEv.classList.remove("oun", "two");
}


// if fund it remove it or if not fund it add it 
divEv.onclick = function () {
    divEv.classList.toggle("osama");
}


// DOM style by js
let eleCss = document.getElementById("my-css-div");

// this style add in line not in css 
eleCss.style.color = "red";
// use caml case for css property
eleCss.style.fontWeight = "bold";
// add more than css property in oune line by js 
eleCss.style.cssText = "font-weight: bold; color: green; opacity:0.9"
// remove css property in line not in css 
eleCss.style.removeProperty("color");
// add css property in line not in css 
eleCss.style.setProperty("font-size", "40px", "important");

// remove css property in css 
document.styleSheets[0].rules[4].style.removeProperty("line-height");

// add css property in css 
document.styleSheets[0].rules[4].style.setProperty("color", "#eeee");


// DOM add elements
let elemn = document.getElementById("stret-div");
let elemnP = document.createElement("p");
let txtP = document.createTextNode("hi i'm P");

elemnP.appendChild(txtP);

// add before elements
// elemn.before("hi i'm js text stret");
elemn.after(elemnP);

// add in firse inside element
elemn.prepend(elemnP);
// add in last inside element
elemn.append(elemnP);

// remove from document
// elemn.remove()


// DOM (traversing)

let span = document.querySelector(".two-d");

// get next think
console.log(span.nextSibling);
// get previous(like before) think
console.log(span.previousSibling);

// get next element
console.log(span.nextElementSibling);
// get previous(like before) element
console.log(span.previousElementSibling);

// get dad(main) element not child
console.log(span.parentElement);

//exampl
span.onmouseenter = function () {
    span.parentElement.style.opacity = "0.5";
}

// make copy 

// myPr is copy not mine element, 
let myPr = document.getElementById("p-my").cloneNode(true);
let myDivPr = document.getElementById("div-p-my");

myPr.id = `${myPr.id}-copy`

/* if you use appendChild() with main element
appendChild move it in dad, because that you need make copy
*/
myDivPr.appendChild(myPr);


// DOM (add Event Listener)
let myPraEv = document.getElementById("my-p-ev");

// can't make more than oun events by normal events
// myPraEv.onclick = oun;
// myPraEv.onclick = two;

function oun() {
    console.log("msg from click 1");
}

function two() {
    console.log("msg from click 2");
}

// can make more than oun events by addEventListener
myPraEv.addEventListener("click", function () {
    console.log("msg from click Event Listener");
});

myPraEv.addEventListener("click", oun);
myPraEv.addEventListener("click", two);

// myPraEv.addEventListener("click", "amr"); error

// make copy by addEventListener, e = event element, e.target = element
myPraEv.onclick = function () {
    let newPr = myPraEv.cloneNode(true);
    newPr.className = "clone";
    document.body.appendChild(newPr)
}

document.addEventListener("click", function (e) {
    if (e.target.className === "clone") {
        console.log("i'm clone");
    }
    
})



/* /\/\/\/\/\/\/\/\/\/DOM Challenge\/\/\/\/\/\/\/\/\ */

// in difrint file name  file is (dom_Challenge)



// BOM


// run some think after time
//  

// run loob some think after time by setInterval

// setInterval(function () {
//     console.log("hi from set time")
// }, 1000)

// setInterval not worke
// setInterval(sayHiFor("sas"), 1000)

// let Interval = setInterval(sayHiFor, 500, "sas", "23")


// function sayHiForInterval(user, age) {
//     console.log(`hi from set time ${user} ${age}`)
// }

// // stop setTimeout py clear 
// let clearBtnI = document.getElementById("clear-btn-i");

// clearBtnI.onclick = function () {
//      clearInterval(Interval)
//  }

let timeDown = document.getElementById("time-down");

function contDown() {
    timeDown.innerHTML -= 1;
    if (timeDown.innerHTML === "0") {
        clearInterval(conterI)
    }
}

let conterI = setInterval(contDown, 1000)



// BOM [location]

console.log(location)
console.log(location.href)

// location.href = "https://google.com";
// // you can go to any setion for any link
// location.href = "/#sec"; 

// console.log(location.host) //with port
// console.log(location.hostname) //without port

// console.log(location.protocol) // https, http
// location.protocol = "https";

// console.log(location.hash); giev you #

// location.reload()

//replace url without save old page in history
// location.replace("https://google.com");

//replace url with save old page in history
// location.assign("https://google.com");

// DOM Window (open, close)

// setTimeout(function () {
//     window.open("https://google", "_blank", "width=400,height=400")
// }, 2000); 

// setTimeout(function () {
// // you can use window.close() just with window.open()  
//     window.close()
// },2300)


// BOM history

console.log(history)
// history.length()
// history.back()
// history.forward()
// history.go(-2)
// history.go(2)


// BOM ...

// let myFloWiin =  window.open("https://google", "_blank", "width=400,height=400");

// stop load page
// myFloWiin.stop()
// focus window
// myFloWiin.focus()
// print window
// myFloWiin.print()


// scroll window, it's same but scrollTo() spourt mac 
// go to ...
// window.scroll()
// window.scrollTo(500,200)
window.scrollTo({
    left: 0,
    top: 300,
    behavior: "smooth"
})

// add to
// window.scrollBy(500,200)

let btnUp = document.querySelector(".up")

window.onscroll = function () {
if (window.scrollY >= 600) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    };
};

btnUp.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};


// BOM  Local Storage !!!

// set valeu in localStorge
// window.localStorage.setItem("key","valeu");

window.localStorage.setItem("color","#123431");
window.localStorage.fontWeight = "bold";
window.localStorage['fontSize'] = "20px";


// get valeu in localStorge
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"])


// use valeu in localStorge
document.body.style.backgroundColor = window.localStorage.getItem("color")


// get index valeu in localStorge
console.log(window.localStorage.key(0));


// remove valeu in localStorge
window.localStorage.removeItem("color");


// remove all valeu in localStorge
window.localStorage.clear();


// session storg

// set valeu in sessionstorg
// window.sessionStorage.setItem("key","valeu");

window.sessionStorage.setItem("color","#123431");
window.sessionStorage.fontWeight = "bold";
window.sessionStorage['fontSize'] = "20px";


// get valeu in sessionstorg
console.log(window.sessionStorage.getItem("color"));
console.log(window.sessionStorage.color);
console.log(window.sessionStorage["color"])


// use valeu in sessionstorg
document.body.style.backgroundColor = window.sessionStorage.getItem("color")


// get index valeu in sessionstorg
console.log(window.sessionStorage.key(0));


// remove valeu in sessionstorg
window.sessionStorage.removeItem("color");


// remove all valeu in sessionstorg
window.sessionStorage.clear();




// Destructuring Arrays 

// take arrye items and giev it to var 
 
let da = 1;
let db = 2; 
let dc = 3;
let dd = 4;

let destArr = ["sas", "ass", "fss", "gss"];
// you can set valeu in arr but, 
// if item alrede have valeu your set valeu in arr not work like (da)
[da = "qw", db, dc, dd, de = "ess"] = destArr;

console.log(da);
console.log(db);
console.log(dc);
console.log(dd);
console.log(de);

// you can skip item 
let destArr2 = ["1dqws", "2aswdwqds", "3fdswqs", "4gdwqss"];

let dz = 1;
let dy = 1;
let dx = 1;

[dz, dy , , dx] = destArr2;

console.log(dz);
console.log(dy);
console.log(dx);

// Destructuring, get iteems in nestd array by skips
let coligFrind = ["ahmed", "mostfa", "abd alaliam", ["amr", "gamal", ["asil", "kaled"]]];
// just some try 
// console.log(coligFrind[3][2][1]);
// let dcA = coligFrind[3][0];
// let dcB = coligFrind[3][2][1];

let [, , , [dcA, , [, dcB]]] = coligFrind;

console.log(dcA, dcB);



//Destructuring Arrays => swapping var 

let book = "video";
let video = "book";

// // save book valeu in stash
// let stash = book; // video

// // change book valeu
// book = video; // book

// // change video valeu
// video = stash; // video

[book, video] = [video, book]

console.log(book);
console.log(video);





// Destructuring opject

const userOpj = {
    theName: "amr",
    theAge: 20,
    theTitle: "Designer & WEB dev",
    theContry: "aden",
    skills: {
        html: 70,
        css: 60,
    }
};


console.log(userOpj.theName);
console.log(userOpj.theAge);
console.log(userOpj.theTitle);
console.log(userOpj.theContry);

// let theName2 = userOpj.theName ; 
// let theAge2 = userOpj.theAge ; 
// let theTitle = userOpj.theTitle ; 
// let theContry = userOpj.theContry ;  

// if alredy declear var you ned do this to Destructuring opject

// if alredy declear var
// ({theName, theAge, theTitle} = userOpj );

// if not declear var
const {theName: theName2,
    theAge: theAge2,
    theTitle,
    theContry,
    thecolor: co = "red",
    skills: { html: h, css },
    } = userOpj;

console.log(theName2);
console.log(theAge2);
console.log(theTitle);
// console.log(theContry);
console.log(co);
console.log(`my skils html: ${h}`);
console.log(`my skils css: ${css}`);

const {html, css: sckill2} = userOpj.skills ; 

console.log(`my skils html is: ${h}`);
console.log(`my skils css is: ${css}`);




// Destructuring function parameters

const myFamle = {
    nameF: "bin salem",
    avrAgeF: 35,
    colorF: {
        red: "RED",
        black: "BLACK",
    },
};



function showDetailsF({nameF: nf, avrAgeF: aaf, colorF: {red}, cool: col = "yes"} = myFamle) {
    console.log(nf)
    console.log(aaf)
    console.log(red)
    console.log(col)
    
}

showDetailsF(myFamle);



const destUserOpj = {
    theUserName: "Amr Yasser",
    theUserAge: 20,
    theUserSkill: ["HTML", "CSS", "JavaScript"],
    theUserAddresses: {
        yaman: "aden/serah",
        ksa: "riyadh/hnak",
    }, 
};


const  {
    theUserName: tuN,
    theUserAge: tuA,
    theUserSkill: [ , , sJS],
    theUserAddresses: {yaman: YA} 
} = destUserOpj;

console.log(tuN);
console.log(tuA);
console.log(sJS);
console.log(YA);


//\/\/\/\/\/\/\/\/\/Destructuring challenge\/\/\/\/\/\/\/\/\/\//


let chose = 1;
let opjFjop;

let myJopFrends = [
    {title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"]},
    {title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"]},
    {title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"]},
];

if (chose === 1) {
    // get the opj you need by chose var
    [opjFjop , , ] = myJopFrends;

} else if (chose === 2) {
    // get the opj you need by chose var
    [ ,opjFjop , ] = myJopFrends;

} else if (chose === 3) {
    // get the opj you need by chose var
    [ , , opjFjop] = myJopFrends;
}

    // get items opj 
    const {title: titleFjop, age: ageFjop, available: availableFjop,skills: [ , skillsFjop2]  } = opjFjop;

    // console.log(opjFjop)
    console.log(titleFjop)
    console.log(ageFjop)
    
    if (availableFjop) {
    console.log("Available")
    } else {
        console.log("Not available")
    }

    console.log(skillsFjop2)


    /* //OUTPOT

    if chose = 1

    Osama
    39
    Available
    CSS

    -------

    if chose = 2

    Ahmed
    25
    Not available
    Django
    
    if chose = 3

    Sayed
    33
    Available
    Laravel


    */ 


// set data type

let myData = [1, 1, 1, 2, 3];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);

// add items from set 
// let myUniqueData = new Set(myData);
let myUniqueData = new Set()
myUniqueData.add(1).add(1).add(1)
myUniqueData.add(2).add(3).add("A");

console.log(myData);
console.log(myUniqueData);

console.log(myData[0]);
// you can't get items from set by index
console.log(myUniqueData[0]);

// delete items from set
myUniqueData.delete(2)
// after delete item return true or false 
console.log(myUniqueData.delete(2));

// sarch item in your set and return true or false
console.log(myUniqueData.has("A"));


console.log(myUniqueData);

// clear all item from set
// myUniqueData.clear()

// set size (length) 
console.log(myUniqueData.size);

console.log(myUniqueData);

// weakset vs set

// type of data
let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(mySet);

// size
console.log(`size ${mySet.size}`)

// Valeus and kys alias
let iterator = mySet.keys()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)

// forEach

mySet.forEach((el) => console.log(el))


console.log("#".repeat(20));


// type of data
let myWeakSet = new WeakSet([{a: 1, b: 2}]);
console.log(myWeakSet);

// size
// weakset dont have size 

// Valeus and kys alias
// let itr = myWeakSet.keys();

// console.log(itr.next());


// Map data type vs opjects

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);


let myNewObj = {
    10: "Number",
    "10": "Streng",
}

console.log(myNewObj[10]);


let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSom() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("###")

console.log(myNewObj);
console.log(myNewMap);

console.log(myNewMap.size);



// Map data type Methods()

let myMapMethod = new Map([
    [10, "Number_10"],
    ["User", "String_User"],
    [false, "boolean_False"],
]);

console.log(myMapMethod);


/*  set(<kye>, <valeu>) to add items,
    but you can make that better than set(),
    go up to let myMapMethod */

// myMapMethod.set(10, "Number_10");
// myMapMethod.set("User", "String_User");
// myMapMethod.set(false, "boolean_False");


// get() to get items
console.log(myMapMethod.get(10));
console.log(myMapMethod.get("User"));
console.log(myMapMethod.get(false));

console.log("###");

// has(<kye>) to search items and return true, fulse 
console.log(myMapMethod.has("User"));
console.log(myMapMethod.has("10"));

console.log("###");


// size to get number items in your Map()
console.log(myMapMethod.size);


// delete(<kye>) to delete item from your Map(), and it's return true, fulse 
console.log(myMapMethod.delete(false));

console.log(myMapMethod.size);

// clear() to remove all items 
myMapMethod.clear();

console.log(myMapMethod.size);

// +++ now this file uploade in my github

// Map VS WeakMap

let mapUser = { theName3: "@dok_designr" };

let myMap2 = new Map();

myMap2.set(mapUser, "Object Value Map");

mapUser = null; // Override the Reference

console.log(myMap2);


console.log("#".repeat(20));


let wMapUser = { theName4: "@dok_designr" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value WeakMap");

wmapUser = null; // Override the Reference


console.log(myWeakMap);


