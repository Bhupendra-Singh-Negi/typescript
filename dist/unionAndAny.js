"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 25;
age = "twenty-five";
let apiRequestStatus = "pending";
apiRequestStatus = "success";
const orders = ["apple", "banana", "orange"];
let currentOrder;
for (let order of orders) {
    if (order === "banana") {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
//# sourceMappingURL=unionAndAny.js.map