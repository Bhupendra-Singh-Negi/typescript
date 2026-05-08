
## Why TS:
- Static typing
- Early error detection
- Better tooling & docs
- consistency
--------------------------------------------------------------------------------

TypeScript = JavaScript + type safety + better tooling

![Internals of typescript](image.png)

--------------------------------------------------------------------------------
## Type inference:-
typescript infer data type automatically
which means when typescript detect which datatype is assigned and catch error when change.

## Type annotation:-
Implicitly declare the data type

--------------------------------------------------------------------------------

We can assign selected multiple datatype to a variable by using `union`(|)
let age: number | string | undefined
### benefit of this approach:- is that when typescript detect which datatype is assigned and catch error when change.

By default every variable is declared as "any" but we can explicitly declare it as any.
let status:any;

--------------------------------------------------------------------------------
## unknown type:
 “I have a value, but I don’t know what type it is yet.”

| Type      | Meaning                        |
| --------- | ------------------------------ |
| `any`     | “Do anything, I don’t care” 😅 |
| `unknown` | “Check first, then use” 🧠     |

--------------------------------------------------------------------------------
## Type assertion:-
When we want to make sure that the variable has a `certain type`. This can be done by using `as keyword`.
eg : let age = 25 as number;

for html element we use
as HTMLInputElement

for errors
We have to `put guardrail to check error` is instance of Error class

## Exhaustive checking
It is used to ensure that all possible cases have been handled and to prevent any unexpected behavior.
give never suggestion when all checks are done.

## Never 
is used for functions that `throw an error or have an infinite loop`.
eg like we use in listen for continous engaging user input

--------------------------------------------------------------------------------

`type` is mainly used for creating reusable data structures and custom data types.
`Interface` is commonly used for defining object structures and implementing them inside classes.
for custom data type we have to make interface and then implement it in class.

`Literal types` are used when you want a variable to allow only specific fixed values.

`Intercetion(&)` of types are used for creating a new type variable with combination of multiple data types.

`Optional properties` allow values to be assigned or skipped..

`Readonly property` cannot be changed after assignment.

--------------------------------------------------------------------------------
// Object Type Annotation// Aleaset's Object Type Annotation// Duck Typing
// datatype split out into separate type and variable declaration
// partial type annotation with type alias
// Required properties with type alias
// pick utility type with type alias
// Omit utility type with type alias

## 1. Object Type Annotation

Defining the structure/type directly in a variable.

```ts id="g8f6fy"
let user: {
  name: string;
  age: number;
}
```

---

# 2. Alias/Object Type Annotation

Creating a reusable custom type using `type`.

# 3. Duck Typing

If an object has the required properties+ additional properties, TypeScript accepts it.

> “If it looks like a duck and behaves like a duck, it is a duck.”

# 4. Datatype `Split` Out into Separate Type and Variable Declaration

Type and variable are written separately for cleaner code. Which is use as property in another type

# 5. Partial Type Annotation with Type Alias

`Partial` makes all properties optional.

```ts id="ow93bi"
type User = {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;
```

Becomes:

```ts id="9qbv6w"
{
  name?: string;
  age?: number;
}
```

---

# 6. Required Properties with Type Alias

`Required` makes all properties mandatory.

```ts id="ryb8b4"
type User = {
  name?: string;
  age?: number;
}

type FullUser = Required<User>;
```

Becomes:

```ts id="od0o42"
{
  name: string;
  age: number;
}
```

---

# 7. Pick Utility Type with Type Alias

`Pick` selects specific properties.

```ts id="z7os8j"
type User = {
  name: string;
  age: number;
  email: string;
}

type UserInfo = Pick<User, "name" | "email">;
```

Becomes:

```ts id="jlwmie"
{
  name: string;
  email: string;
}
```

---

# 8. Omit Utility Type with Type Alias

`Omit` removes specific properties.

```ts id="94yv6w"
type User = {
  name: string;
  age: number;
  email: string;
}

type UserWithoutEmail = Omit<User, "email">;
```

Becomes:

```ts id="0ycqwy"
{
  name: string;
  age: number;
}
```
