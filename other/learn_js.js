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
console.table(["amr","ali","yasser"]);

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
console.log(typeof {name: 'osama', age: 18, country: "ye" });
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
\\ ${c} ${12*21}`);

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

v -= 2 ;

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
console.log(stix.slice(2,10));
console.log(stix.slice(-10));
console.log(stix.slice(-10, -2));

//repeat think 
console.log(stix.repeat(3));

//cat string and replec valeu to arryr
console.log(stix.split(" "));
console.log(stix.split("",10));


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
console.log(j.substring(j.length - 3 )); 

/*
j.length - 3 = 9, j.length - = 11 so
substring() strat to index 9 , end to index 11
*/
console.log(j.substring(j.length - 3, j.length - 1)); 


//write how matsh need items, you can set start & end
console.log(j.substr(0,2));
/* if you writ number = length or 
number > length = <empty string> */
console.log(j.substr(12));
// start too -3 end 2 
console.log(j.substr(-3,2));

//sarch word by includes
console.log(j.includes("gamer"));
//you can writ start number 
console.log(j.includes("gamer", 3));

//chec first valeu
console.log(j.startsWith("p"));
//you can set start number 
console.log(j.startsWith("g",4));
//chec first valeu(word)
console.log(j.startsWith("gamer",3));

//chec last valeu, endsWith() use length(1) not index (0)
console.log(j.endsWith("r"));
//you can set length number 
console.log(j.endsWith("r",3));// false
console.log(j.endsWith("c",2));// true


/* /\/\/\ */



let ews = "Elzero Web School";

console.log(ews.slice(2,6).charAt(0).toUpperCase() + ews.slice(3,6));


console.log(ews.substring(ews.length-5).charAt(1).toUpperCase().repeat(8));


console.log(ews.slice(0,6).split());


console.log(`${ews.substr(0,6)} ${ews.substr(-6)}`);

console.log(ews.slice(0,1).toLowerCase() + ews.substring(1, ews.length - 1).toUpperCase() + ews.substring(ews.length - 1).toLowerCase());




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

}  else {
    console.log("mrs");

}


/*
Condition ? (if true )   :   (if false)
 .......  =  do this   else   do this

 Condition ? (if true )    :    Condition2 ? (if true)   :  (if false)
  .......  =  do this  else if  .......... = do this   else  do this

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
?console.log(10)
: chNum >= 10 && chNum <= 40
?console.log("10 to 40")
: chNum > 40 
?console.log("> 40")
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

if (typeof (st.length ) === "number") {
    console.log("Good");

}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
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

}else if (offDay === 1 || offDay === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);

}else if (offDay === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);

}else if (offDay === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);

}else {
    money = 500;
    console.log(`My Money is ${money}`);

}












