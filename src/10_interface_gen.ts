interface Chai{
    flavor:string
    price:number
}

const masala:Chai={
    flavor:"masala",
    price:30
};

interface Shop{
    readonly id:number
    name: string
}

const s:Shop ={
    id:1,
    name:"tea cafe"
}
// s.id=2; //readonly can not be change

interface DiscountCalculator{
    (price:number):number

}

const apply50: DiscountCalculator =(p)=>p*0.5;

interface TeaMachine{
    start():void
    stop():void
}

const machine: TeaMachine={
    start(){

    },
    stop(){

    }
}

interface ChaiRatings{
    [flavor: string]:number
}
const ratings: ChaiRatings={
    masala:4.5,
    lemon:5.0,
    mint:3.9
}
// multiple interface with same name merge with each other
interface User{
    name:string
}
interface User{
    age:number
}

const u:User={
    name:"user1",
    age:23
}

// explicit merge
interface A {a: string}
interface B {b: string}

interface C extends A ,B{c: number}
const d: C={
    a:"hello",
    b:"ji",
    c:20
}