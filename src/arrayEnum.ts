const chaiFlavor:string[]=["masala","lemon","ginger","cardamom"];
const chaiPrice:number[]=[10, 20, 30, 40];

// array with generic type and custom type
const rating: Array<number> = [5.0, 3.4, 4.3, 5.2];

// array of object
type Chai={
    name: string;
    price: number;
}
const menu: Chai[]=[
    {name: "masala", price: 10},
    {name: "lemon", price: 20},
    {name: "ginger", price: 30},
    {name: "cardamom", price: 40}
]

// readonly array
const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore", "Chennai"];

// 2d array
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// tuple
let chaiTuple: [string, number];
chaiTuple = ["masala", 10]; //type error if order is not followed

let chaiTuple2: [string, number, boolean?]; // optional element in tuple

// readonly tuple
let chaiTuple3: readonly [string, number] 
chaiTuple3 = ["masala", 10];

// named tuple
let chaiTuple4: [name: string, price: number];
chaiTuple4 = ["masala", 10];

// enum
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const myCupSize: CupSize = CupSize.MEDIUM;

// enum with custom values and auto-incremented values
enum Status{
    PENDING = 100,
    IN_PROGRESS,// auto-incremented to 101
    COMPLETED,// auto-incremented to 102
}

enum ChatModel{
    CHATGPT = "chatgpt",
    GEMINI = "gemini"
}

function getChatModel(model: ChatModel){
    console.log(`Selected chat model: ${model}`);
}
getChatModel(ChatModel.CHATGPT);
// getChatModel("chatgpt"); // type error, must use enum value

// Heterogeneous enum
enum MixedEnum {
    ID = 1,
    NAME = "John",
}
// not recommended to use heterogeneous enums as it can lead to confusion and type safety issues

// bad practice with tuples
let t: [string, number]=["masala", 10];
t.push("extra value"); 
