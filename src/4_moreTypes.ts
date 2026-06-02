let response:any= "John Doe";

// let lengthOfName:number = response. 
// this will not give any suggestion for string type

let lengthOfName:number=(response as string).length;

// custom types
type Book={
    name:"string"
}

let bookString='{"name":"India that is Bharat"}';
// declare the type for bookObject as Book
let bookObject=JSON.parse(bookString) as Book

console.log(bookObject.name)

// for html element
const inputElement=document.getElementById('input') as HTMLInputElement;

let value:any;

value="Hello World";
value=123;
value=true;
value.toUpperCase(); // this will not give error but it will give undefined because value is of type "any"

let new_value:unknown;

new_value="Hello World";
new_value=123;
new_value=true;

// Guardrail for unknown type
if(typeof new_value === "string"){
    new_value.toUpperCase(); // this will give suggestion for string type because we have checked the type of new_value
}

// For Error handling
try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message) // this will give suggestion for error type because we have checked the type of error
    }
    else console.log(error) // this will give suggestion for unknown type because we have not checked the type of error
}
// Type assertion for unknown type
// eg use when taking environment variables
const userInput:unknown= "Hello World";
const message:string = userInput as string; // this will give suggestion for string type because we have asserted the type of userInput as string

type Role = "admin" | "user" ;

// void tells that the function does not return anything, but it can still perform some actions like logging to the console
function getUserRole(role:Role):void{
    if(role === "admin"){
        console.log("You are an admin");
        return
    }
    else if(role === "user"){
        console.log("You are a user");
        return
    }
    role; //In suggestion give leftover type. Give "never" when nothing is left. Or suggest types that are left. This is called "exhaustiveness checking"
}

// never tells that the function never returns anything and it will never reach the end of the function. It is used for functions that throw an error or have an infinite loop.
function neverReturns():never{
    while(true){}
}