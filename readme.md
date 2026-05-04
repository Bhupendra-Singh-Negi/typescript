
Why TS:
- Static typing
- Early error detection
- Better tooling & docs
- consistency
----------------

TypeScript = JavaScript + type safety + better tooling

![Internals of typescript](image.png)

--------------
Type inference:-
typescript infer data type automatically
which means when typescript detect which datatype is assigned and catch error when change.

Type annotation:-
Implicitly declare the data type

-------------------------

We can assign selected multiple datatype to a variable by using union(|)
let age: number | string | undefined
benefit of this approach:- is that when typescript detect which datatype is assigned and catch error when change.

By default every variable is declared as "any" but we can explicitly declare it as any.
let status:any;

--------------------------
unknown means: “I have a value, but I don’t know what type it is yet.”

| Type      | Meaning                        |
| --------- | ------------------------------ |
| `any`     | “Do anything, I don’t care” 😅 |
| `unknown` | “Check first, then use” 🧠     |
--------------------------

