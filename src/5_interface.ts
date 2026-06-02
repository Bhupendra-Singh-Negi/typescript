// for reusable datatype
type Chai={
    type:string,
    sugar:number,
    strong:boolean
}
function makeChai(order:Chai){
    console.log(`Making a ${order.sugar} sugar ${order.type} chai!`);
}

function serveChai(order:Chai){
    console.log(`Serving a ${order.sugar} sugar ${order.type} chai!`);
}
//---------------------------------------------------------------
// when using predefined types
type TeaRecipe={
    water:number,
    milk:number,
}

class MasalaTea implements TeaRecipe{
    water=100
    milk=50
}
//---------------------------------------------------------------
// when using custom types
interface CupSize{
    size:"small"|"medium"|"large"
}

class ChaiSize implements CupSize{
    size:"small"|"medium"|"large"="medium"
}
//---------------------------------------------------------------
// Example where not works

// type Response={ok:true}|{ok:false}
// class myRes implements Response{
//     ok:boolean=true
//     // ok:true|false=true
// }
// // A class can only implement an object type or intersection of object types with statically known members.

// Example where it works

interface Response{
    ok:true|false
}

class myRes implements Response{
    ok:true|false=true
}
//---------------------------------------------------------------
// Literal types and union types
// We can use type or interface, but interface is more suitable for this case
// In union we will get only one type
type TeaType="green"|"black"|"herbal"

function makeTea(type:TeaType){
    console.log(`Making a ${type} tea!`);
}

//---------------------------------------------------------------
// intercetion of types

type BaseChai={teaLeaves:number}
type Extra={masala:number}  

type CustomMasalaChai=BaseChai&Extra

const myChai:CustomMasalaChai={
    teaLeaves:10,
    masala:5
}
//---------------------------------------------------------------
// Optional properties

type User={
    name:string,
    age?:number// age is optional
}   
const user1:User={name:"Alice"}
const user2:User={name:"Bob",age:30}
//---------------------------------------------------------------

// readonly properties

type Config={
    readonly apiKey:string,
    timeout:number
}

const config:Config={
    apiKey:"learning-typescript",
    timeout:5000
}

// Error: Cannot assign to 'apiKey' because it is a read-only property.
// config.apiKey="new-key"

config.timeout=3000 // allowed, timeout is not readonly