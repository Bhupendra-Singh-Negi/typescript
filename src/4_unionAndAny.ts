let age: number | string = 25;
age = "twenty-five";

let apiRequestStatus: "success" | "error" | "pending" = "pending";
apiRequestStatus = "success";

const orders=["apple", "banana", "orange"];

let currentOrder: string | undefined;

for(let order of orders) {
    if(order === "banana") {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder)