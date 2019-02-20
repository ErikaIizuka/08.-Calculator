myTotal = 0;  // current total
myInput = ""; // current input
myCalc = "+"; // operator of the total and operator
myFlg = 1;    // previous input (0:number 1:operator)

function myValue(myData)                            // when one of the number buttons or the decimal point button is pressed
{                 
    myFlg = 0;                                      // the previous input was a number
    myInput += myData;                              // add to the current input
    document.myForm.myLine.value = myInput;         // display current input
}

function myCalculate(myData)                        // when one of the operator buttons is pressed
{               
    if (myFlg==0)                                   // was the previous input a number?
    {                            
        myFlg = 1;                                  // the previous input was an operator
        myWork = myTotal + myCalc + myInput;        // create a formula
        myTotal = eval(myWork);                     // calculate the formula
        myInput = "";                               // clear the input
        document.myForm.myLine.value = myTotal;     // display the total
    }

    if (myData == "=")                              // was the operator '='?
    {                    
        myTotal = 0;                                // clear the total
        myCalc = "+";                               // set the operator '+'
    }
    else                                            // the operator was not '=' (was something else)
    {                                 
        myCalc = myData;                            // store the operator
    }
}

function myC()                                      // pressed 'C'
{                           
    myTotal = 0;                                    // clear the total
    myCalc = "+";                                   // clear the operator
    myInput = "";                                   // clear the input
    document.myForm.myLine.value = myTotal;         // thus, display '0'
}


// give credits to fake people
let credit = [{
    "firstName": "Kimberly D.",
    "lastName": "Chevalier",
    "occupation": "Parts Salesperson",
    "getFullName": function() 
    {
      return this.firstName + " " + this.lastName;
    }
  },
  {
    "firstName": "Phillip A.",
    "lastName": "Jones",
    "occupation": "Computer Systems Administrator",
    "getFullName": function() 
    {
      return this.firstName + " " + this.lastName;
    }
  },
  {
    "firstName": "Mickey M.",
    "lastName": "Frost",
    "occupation": "Metal Pourer",
    "getFullName": function() 
    {
      return this.firstName + " " + this.lastName;
    }
  }
];


const allTheParas = document.getElementsByTagName("p");

for (let i = 0; i < allTheParas.length; ++i) 
{
   allTheParas[i].innerHTML += credit[i].name;
}


for (let index = 0; index < credit.length; index++)
{
  let newPara = document.createElement("p");
  newPara.innerHTML = credit[index].getFullName();
  newPara.innerHTML = credit[index]["getFullName"]();
  const pageBody = document.getElementsByTagName("body");
  pageBody[0].appendChild(newPara);
}

var last = document.createElement("p");
last.innerHTML = "\n\nFake names are created by "
const pageBody = document.getElementsByTagName("body");
pageBody[0].appendChild(last);

var a = document.createElement('a');
a.setAttribute('href', "https://www.fakenamegenerator.com/gen-random-us-us.php");
a.innerHTML = "this website";
document.getElementsByTagName('body')[0].appendChild(a);