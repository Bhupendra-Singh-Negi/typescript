class Chai{
    public flavor: string="masala";
    private ingredients: string[]=["tea leaves", "milk", "sugar"];
    reveal(){
        console.log(`The ingredients of ${this.flavor} chai are: ${this.ingredients.join(", ")}.`);
    }
}

const myChai = new Chai();
myChai.reveal();// indirectly access private and protected members through a public method

class Shop{
    protected shopName: string="Chaiwala";
}
class Branch extends Shop{
    displayShopName(){
        console.log(`Welcome to ${this.shopName} branch!`);
    }   
}

new Branch().displayShopName();// access protected member shopName from the parent class Shop through the child class Branch

class Cup{
    readonly capacity: number=240;//cannot change the value of capacity after initialization
    constructor(capacity: number){
        this.capacity = capacity;
    }
}

class ModernChai{
    private _sugar=2;
    get sugar(){
        return this._sugar;
    }
    set sugar(value: number){
        if(value < 0){
            console.log("Sugar cannot be negative. Setting to 0.");
            this._sugar = 0;
        } else {
            this._sugar = value;
        }
    }
}

const c=new ModernChai();
c.sugar=3;


class TeaShop{
    static shopName="Chaiwala";
    constructor(public location: string){}
}
console.log(TeaShop.shopName); // access static property without creating an instance
//access by class not object

abstract class Beverage{
    abstract prepare(): void; //abstract method without implementation
}
class MasalaChai extends Beverage{
    prepare(){
        console.log("Preparing masala chai with tea leaves, milk, sugar, and spices.");
    }   
}

// COMPOSITION
//use to create complex objects by combining simpler ones, rather than relying on inheritance
class Heater{
    heat(){
        console.log("Heating water...");
    }
}
class Company{
    constructor(private heater: Heater){}
    make(){
        this.heater.heat();
        console.log("Making chai...");
    }
}