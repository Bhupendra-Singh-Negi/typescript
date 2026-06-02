// define data type of attributes 
function user(name: string, age: number){
    console.log(`user ${user} of age ${age}`);
}
user('John', 25)

// define function return type
function sum(a:number, b:number):number{
    return a + b;
}
sum(1, 2);

function noValueReturn(a:number):void{

}
function optional(value?: string){

}

function DefaultValue(value:string="default value"){

}

function multiplePropertyValue(order:{type:string, required:boolean, model:"chatgpt"|"gemini"}):number{
    return 0;
}