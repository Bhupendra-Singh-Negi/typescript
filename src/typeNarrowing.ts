function getChai(kind: string | number) {
    // TypeScript uses type narrowing to determine the type of `kind` within this block
    if (typeof kind === "string") {
        return `Making a ${kind} chai.`;
    }
    // If we reach this point, TypeScript knows that `kind` must be a number
    return `Making a ${kind} chai.`;
}


function serveChai(msg?: string) {
    if(msg){
        // TypeScript uses type narrowing to determine that `msg` is a string within this block
        return `Serving ${msg}`;
    }
    // If we reach this point, TypeScript knows that `msg` is undefined
    return "Serving regular Masala chai";
}

function orderChai(size: "small" | "medium" | "large"| number) {
    if (size === "small" || size === "medium" || size === "large") {
        // TypeScript uses type narrowing to determine that `size` is a string within this block
        return `Ordering a ${size} chai.`;
    }
// If we reach this point, TypeScript knows that `size` must be a number
    return `Ordering a ${size} ml chai.`;
}

class KulhadChai {
    serve() {
        return "Serving chai in a kulhad.";
    }
}

class CuttingChai {
    serve() {
        return "Serving cutting chai.";
    }   
}

// TypeScript uses type narrowing to determine the type of `chai` within the `serve` function based on the `instanceof` checks
function serve(chai: KulhadChai | CuttingChai) {
    if(chai instanceof KulhadChai) {
        // TypeScript uses type narrowing to determine that `chai` is an instance of `KulhadChai` within this block
        return chai.serve();
    }
    if(chai instanceof CuttingChai) {
        // TypeScript uses type narrowing to determine that `chai` is an instance of `CuttingChai` within this block
        return chai.serve();
    }
}

// making own type
type ChaiOrder ={
    type: string
    sugar:number
}

// Type guard function to check if an object is of type ChaiOrder
function isChaiOrder(obj: any):obj is ChaiOrder{
    return( 
        typeof obj==="object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serverOrder(item:ChaiOrder|string){
    if(isChaiOrder(item)){
        // TypeScript uses type narrowing to determine that `item` is of type `ChaiOrder` within this block
        return `Serving a ${item.type} chai with ${item.sugar} spoons of sugar.`;
    }
    return `Serving a custom ${item} chai.`;
}


type MasalaChai={
    type:"masala"
    spiceLevel:number
}

type GingerChai={
    type:"ginger"
    amount:number
}

type ElaichiChai={
    type:"elaichi"
    aroma:number
}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
    switch(order.type){
        case "masala":
            // TypeScript uses type narrowing to determine that `order` is of type `MasalaChai` within this block
            return `Making a ${order.type} chai with spice level ${order.spiceLevel}.`;
            break;
        case "ginger":
            // TypeScript uses type narrowing to determine that `order` is of type `GingerChai` within this block
            return `Making a ${order.type} chai with spice level ${order.amount}.`;
            break;
        case "elaichi":
            // TypeScript uses type narrowing to determine that `order` is of type `ElaichiChai` within this block
            return `Making a ${order.type} chai with aroma level ${order.aroma}.`;
            break;
    }
}

function brew(order: MasalaChai | GingerChai | ElaichiChai) {
    if ("spiceLevel" in order) {
        // TypeScript knows `order` is of type `MasalaChai`
        return `Brewing a ${order.type} chai with spice level ${order.spiceLevel}.`;
    }
    if ("amount" in order) {
        // TypeScript knows `order` is of type `GingerChai`
        return `Brewing a ${order.type} chai with amount ${order.amount}.`;
    }
    if ("aroma" in order) {
        // TypeScript knows `order` is of type `ElaichiChai`
        return `Brewing a ${order.type} chai with aroma level ${order.aroma}.`;
    }
}

// Type guard function to check if an array is an array of strings
function isStringArray(arr:unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}
