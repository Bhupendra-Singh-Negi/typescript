// Object Type Annotation
let tea:{
    name:string;
    price:number;
    isHot:boolean
}
tea={
    name:"Green Tea",
    price:40,
    isHot:true
}

// Aleaset's Object Type Annotation

type Tea={
    name:string;
    price:number;
    ingredients:string[];
}

const lemonTea:Tea={
    name:"Lemon Tea",
    price:20,
    ingredients:["Lemon", "Tea Leaves", "Sugar"]
}

// Duck Typing

type Cup={size:string}
let smallCup:Cup={size:"Small"}
let bigCup={size:"Big", color:"Red"} // Duck Typing allows extra properties to be added.

smallCup=bigCup // This is valid because bigCup has at least the properties of smallCup.

type Brew={brewTime:number}
const coffee={brewTime:5, flavor:"Rich"}
const chaiBrew:Brew=coffee // This is valid because coffee has at least the properties of Brew.

type User={username:string, password:string}
let newUser:User={
    username:"john_doe",
    password:"securepassword123",
    
}

// datatype split out into separate type and variable declaration
type Item={name:string, price:number}
type Address={street:string, city:string, zipCode:string}

type Order={
    id:string;
    item:Item[];
    quantity:number;
    shippingAddress:Address[];
}

// partial type annotation with type alias

type Chai={
    flavor:string;
    price:number;
    isHot:boolean;
}
const updatechai=(updates:Partial<Chai>)=>{
    console.log("updating chai with ", updates);
}

updatechai({flavor:"Masala", price:30})
console.log("Chai updated successfully!")
updatechai({})// This is valid because all properties of Chai are optional in the updates parameter.

// Required properties with type alias

type placeOrder={
    name?:string;
    quantity?:number;
}
const placeOrder=(order:Required<placeOrder>)=>{
    console.log("Placing order for ", order);
}

placeOrder({name:"Green Tea", quantity:2})
// placeOrder({}) // This will cause an error because all properties of placeOrder are required in the order parameter.


// pick utility type with type alias

type UserProfile={
    username:string;
    email:string;
    age:number;
    isAdmin:boolean;
    skills:string[];
}

type UserSummary=Pick<UserProfile, "username" | "email">
const userSummary:UserSummary={
    username:"john_doe",
    email:"pick@example.com"
}
console.log("User Summary: ", userSummary)

// Omit utility type with type alias

type UserDetails=Omit<UserProfile, "isAdmin" | "skills">
const userDetails:UserDetails={
    username:"john_doe",
    email:"omit@example.com",   
    age:30
}
console.log("User Details: ", userDetails)
