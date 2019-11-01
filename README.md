# **jsoft-agile**
A [node.js](https://nodejs.org/en/) module that provides a collection of ready-made functions used on large systems for their development.

## Getting Started
![](https://github.com/Jaytrindade/jsoft-agile/blob/master/assets/img/getting-started.PNG?raw=true)

## Prerequisites
This module was developed in node.js v10.16.3.
> We recommend using node.js v10.x or higher.

## Installation
This is a [Node.js](https://nodejs.org/en/) module available through the npm registry.

Before installing, download and install [Node.js](https://nodejs.org/en/). [Node.js](https://nodejs.org/en/) 10.x or higher is required.

Installation is done using the `npm install` command:

> $ **npm install --save jsoft-agile**

or in development mode:

> $ **npm install --save-dev jsoft-agile**

## What jsoft-agile offers us?
* `isString` *check if the passed value is a **string***
* `isAllString` *check if all elements of an array are **strings***
* `isNumber` *check if the passed value is a **number***
* `isCommonNumber` *checks if the passed value is a **common number** like "-1, 0, 1, etc..."*,
* `isAllCommonNumber` *check if all elements of an array are **common numbers** like "-1, 0, 1, etc..."*
* `isBoolean` *check if the passed value is a **boolean***
* `isAllBoolean` *check if all elements of an array are **booleans***
* `isObject` *check if the passed value is a **object***
* `isObjectId` *check if the passed value is a common **objectId** like "5db7e872dab3eb3d7cc44080"*
* `isAllObjectId` *check if all elements of an array are **objectIds** like "5db7e872dab3eb3d7cc44080*
* `isCommonObject` *Check if the passed value is a **common object** like "{}"*
* `isAllCommonObject` *check if all elements of an array are **common objects** like "{}"*
* `isArray` *check if the passed value is an **array***
* `isAllArray` *check if all elements of an array are **arrays***
* `isEmail` *check if the passed value is an **email***
* `isUsername` *check if the passed value is a **username** like "_joao99, jay99_, jay, etc..."*
* `isPhoneNumber` *check if the passed value is an international **phone number** like "+244 913 056 212, +555 555 1234"*
* `inArray` *check if value exists inside **array***
* `inObject` *Check if value exists inside **object***
* `hasValue` *check if has some **value***
* `hasAllValues` *check if all elements of an array has **value***
* `justifySpaceWords` *justify space between words*
* `capitalizeText` *make the first letters of words capitalized*
* `checkMinValueEachWords` *check the minimum amount of characters for each word*
* `checkMaxValueEachWords` *check the maximum amount of characters for each word*
* `checkMinAndMaxValueEachWord` *check the minimum and maximum amount of characters for each word*
* `correctName` *remove special characters and space except accents*
* `getArrayElements` *get array element/s*
* `getObjectProps` *get object prop/s*
* `getOnlyNumber` *get only numbers*
* `getElementPos` *get the first position of an array of objects by field and value*
* `generateObjectId` *generates a unique objectId like "5db7e872dab3eb3d7cc44080"*
* `removeArrayElements` *remove array elements*
* `removeObjectProps` *remove object properties*
* `uniqueArray` *remove repeated elements from **array***
* `uniqueArrayObjectBy` *remove repeated elements from an **array** of **objects** by property*
* `existModule` *check if there is a node.js **module** like "http, jsoft-agile, etc..."*

>**37 functions ready for you**

## How can I use?
### isString
> Check if the passed value is a **string**. The return is **boolean**.

#### Syntax
> isString(value: any) => boolean

#### Use
```
// example
console.log(jagile.isString("jay"));
> true

// example - 2
console.log(jagile.isString(19));
> false


and so on...
```

### isAllString
> Check if all elements of an array are **strings**. The return is **boolean**.

#### Syntax
> isAllString(values: array) => boolean

#### Use
```
// example
console.log(jagile.isAllString(["jay", "trindade", "jsoft"]))
> true

// example - 2
let name = "João Trindade",
    username = "joaotrindade.soft"

console.log(jagile.isAllString([name, username]))
> true

// example - 3
let stack = "MERN",
    username = "jaytrindade",
    id = 145678

console.log(jagile.isAllString([stack, username, id]))
> false


and so on...
```

### isNumber
> Check if the passed value is a **number**. The return is **boolean**.

#### Syntax
> isNumber(value: any) => boolean

#### Use
```
// example
console.log(jagile.isNumber(1));
> true

// example - 2
console.log(jagile.isNumber(NaN));
> true

// example - 3
console.log(jagile.isNumber("jay"));
> false


and so on...
```

### isCommonNumber
> Checks if the passed value is a common **number** like "-1, 0, 1, etc...". The return is **boolean**.

#### Syntax
> isCommonNumber(value: any) => boolean

#### Use
```
// example
console.log(jagile.isCommonNumber(1));
> true

// example - 2
console.log(jagile.isCommonNumber(NaN));
> false

// example - 3
console.log(jagile.isCommonNumber("jay"));
> false


and so on...
```

### isAllCommonNumber
> Check if all elements of an array are **common numbers** like "-1, 0, 1, etc...". The return is **boolean**.

#### Syntax
> isAllCommonNumber(values: array) => boolean

#### Use
```
// example
console.log(jagile.isAllCommonNumber([-10, 20, 0, 1.2]))
> true

// example - 2
let age = 19,
    id = 13456

console.log(jagile.isAllCommonNumber([age, id]))
> true

// example - 3
console.log(jagile.isAllCommonNumber([8, NaN, 50]))
> false

// example - 4
let name = "joão trindade",
    id = 145678

console.log(jagile.isAllCommonNumber([name, id]))
> false


and so on...
```

### isBoolean
> Check if the passed value is a **boolean**. The return is **boolean**.

#### Syntax
> isBoolean(value: any) => boolean

#### Use
```
// example
console.log(jagile.isBoolean(true));
> true

// example - 2
console.log(jagile.isBoolean(1));
> false

// example - 3
console.log(jagile.isBoolean("jay"));
> false


and so on...
```

### isAllBoolean
> Check if all elements of an array are **booleans**. The return is **boolean**.

#### Syntax
> isAllBoolean(values: any) => boolean

#### Use
```
// example
console.log(jagile.isAllBoolean([true, false]))
> true

// example - 2
let cool = true,
    data = 100

console.log(jagile.isAllBoolean([cool, data]))
> false


and so on...
```

### isObject
> Check if the passed value is a **object**. The return is **boolean**.

#### Syntax
> isObject(value: any) => boolean

#### Use
```
// example
console.log(jagile.isObject({}));
> true

// example - 2
console.log(jagile.isObject([]));
> true

// example - 3
console.log(jagile.isObject(null));
> true

// example - 4
console.log(jagile.isObject(1));
> false

// example - 5
console.log(jagile.isObject("jay"));
> false


and so on...
```

### isObjectId
> Check if the passed value is a common **objectId** like "5db7e872dab3eb3d7cc44080". The return is **boolean**.

#### Syntax
> isObjectId(value: any) => boolean

#### Use
```
// example
console.log(jagile.isObjectId("5db7e872dab3eb3d7cc44080"));
> true

// example - 2
console.log(jagile.isObjectId([]));
> false

// example - 3
console.log(jagile.isObjectId(null));
> false

// example - 4
console.log(jagile.isObjectId(1));
> false

// example - 5
console.log(jagile.isObjectId("jay"));
> false

and so on ...
```

### isAllObjectId
> Check if all elements of an array are **objectIds** like "5db7e872dab3eb3d7cc44080. The return is **boolean**.

#### Syntax
> isAllObjectId(value: array) => boolean

#### Use
```
// example
console.log(jagile.isAllObjectId(["5db7e872dab3eb3d7cc44080", "5db7e872dab3eb3d7cc44bcd"]))
> true

// example - 2
let obj1 = "5db7e872dab3eb3d7cc44080",
    obj2 = "5db7e872dab3eb3d7cc44bcd"

console.log(jagile.isAllObjectId([obj1, obj2]))
> true

// example - 3
console.log(jagile.isAllObjectId([1, "Oops", {}]))
> false

// example - 4
console.log(jagile.isAllObjectId(["5db7e872dab3eb3d7cc44bcd", 1, false]))
> false


and so on...
```

### isCommonObject
> Check if the passed value is a **common object** like "{}". The return is **boolean**.

#### Syntax
> isCommonObject(value: any) => boolean

#### Use
```
// example
console.log(jagile.isCommonObject({}));
> true

// example - 2
console.log(jagile.isCommonObject([]));
> false

// example - 3
console.log(jagile.isCommonObject(null));
> false

// example - 4
console.log(jagile.isCommonObject(1));
> false

// example - 5
console.log(jagile.isCommonObject("jay"));
> false

and so on...
```

### isAllCommonObject
> Check if all elements of an array are **common objects** like "{}". The return is **boolean**.

#### Syntax
> isAllCommonObject(value: any) => boolean

#### Use
```
// example
console.log(jagile.isAllCommonObject([{name: "jay"}, {age: 20}, {}]))
> true

// example - 2
let obj1 = {day: "today"},
    obj2 = {name: "soft"}

console.log(jagile.isAllCommonObject([obj1, obj2]))
> true

// example - 3
console.log(jagile.isAllCommonObject([1, "Oops", {}]))
> false

// example - 4
console.log(jagile.isAllCommonObject([["jay", "trindade"], 1]))
> false


and so on..
```

### isArray
> Check if the passed value is an **array**. The return is **boolean**.

#### Syntax
> isArray(value: any) => boolean

#### Use
```
// example
console.log(jagile.isArray([]));
> true

// example - 2
console.log(jagile.isArray(["jay", "trindade"]));
> false

// example - 3
console.log(jagile.isArray({}));
> false

// example - 4
console.log(jagile.isArray(1));
> false

// example - 5
console.log(jagile.isArray("jay"));
> false

and so on...
```

### isAllArray
> Check if all elements of an array are **arrays**. The return is **boolean**.

#### Syntax
> isAllArray(value: array) => boolean

#### Use
```
// example
console.log(jagile.isAllArray([["jay"], [20], []]))
> true

// example - 2
let arr1 = ["some"],
    arr2 = ["value"]

console.log(jagile.isAllArray([arr1, arr2]))
> true

// example - 3
console.log(jagile.isAllArray([1, "Oops", {}]))
> false

// example - 4
console.log(jagile.isAllArray([["jay", "trindade"], 1]))
> false


and so on...
```

### isEmail
> Check if the passed value is an **email**. The return is **boolean**.

#### Syntax
> isEmail(value: any) => boolean

#### Use
```
// example
console.log(jagile.isEmail("joaotrindade.soft@gmail.com"));
> true

// example - 2
console.log(jagile.isEmail("jay@gmail"));
> false

// example - 3
console.log(jagile.isEmail("jay"));
> false


and so on...
```

### isUsername
> Check if the passed value is a **username** like "_joao99, jay99_, jay, etc...". The return is **boolean**.

#### Syntax
> isUsername(value: any) => boolean

#### Use
```
// example
console.log(jagile.isUsername("_joao99"));
> true

// example - 2
console.log(jagile.isUsername("@jay"));
> false

// example - 3
console.log(jagile.isUsername("12jay"));
> false


and so on...
```

### isPhoneNumber
> Check if the passed value is an international **phone number** like "+244 913 056 212, +555 555 1234". The return is **boolean**.

#### Syntax
> isPhoneNumber(value: any) => boolean

#### Use
```
// example
console.log(jagile.isPhoneNumber("+244 913 056 212"));
> true

// example - 2
console.log(jagile.isPhoneNumber("555 555 1234"));
> false


and so on...
```

### inArray
> Check if value exists inside **array**. The return is **boolean**.

#### Syntax
> inArray(arr: array, values: string | array) => boolean

#### Use
```
// example
let arr = ["jay", "trindade", 1, true, -4]

console.log(jagile.inArray(arr, ["jay", 1]));
> true

console.log(jagile.inArray(arr, -4));
> true

console.log(jagile.inArray(arr, [0, 1]));
> false


and so on...
```

### inObject
> Check if value exists inside **object**. The return is **boolean**.

#### Syntax
> inObject(obj: obj, values: string | array) => boolean

#### Use
```
// example
let obj = {id: 1, name: "jay", lastName: "trindade", age: 19}

console.log(jagile.inObject(obj, ["id", "name"]));
> true

console.log(jagile.inObject(obj, "sex"));
> false

console.log(jagile.inObject(obj, ["id", "sex"]));
> false


and so on...
```

### hasValue
> Check if has some **value**. The return is **boolean**.

#### Syntax
> hasValue(value: any) => boolean

#### Use
```
// example
console.log(jagile.hasValue("jay"));
> true

// example - 2
console.log(jagile.hasValue(1));
> true

// example - 3
console.log(jagile.hasValue(false));
> true

// example - 4
console.log(jagile.hasValue([]));
> false

// example - 5
console.log(jagile.hasValue({}));
> false


and so on...
```

### hasAllValue
> Check if all elements of an array has **value**. The return is **boolean**.

#### Syntax
> hasAllValue(values: array) => boolean

#### Use
```
// example
console.log(jagile.hasAllValue(["jay", [20], true, -1]))
> true

// example - 2
let name = "jay",
    age = 19

console.log(jagile.hasAllValue([name, age]))
> true

// example - 3
console.log(jagile.hasAllValue(["", "Oops", {}, []]))
> false


and so on...
```

### justifySpaceWords
> Justify space between words. The return is **string**.

#### Syntax
> justifySpaceWords(value: string) => string

#### Use
```
// example
console.log(jagile.justifySpaceWords("joão  trindade"));
> joão trindade

and so on...
```

### capitalizeText
> Make the first letters of words capitalized. The return is **string**.

#### Syntax
> capitalizeText(value: string) => string

#### Use
```
// example
console.log(jagile.capitalizeText("jOÃO tRiNdade jsoFt"));
> JOÃO tRiNdade jsoFt

// example - 2
console.log(jagile.capitalizeText("jOÃO tRiNdade jsoFt", true));
> JOÃO TRiNdade JsoFt

and so on...
```

### checkMinValueEachWords
> Check the minimum amount of characters for each word. The return is **boolean**.

#### Syntax
> checkMinValueEachWords(value: string, min: number) => boolean

#### Use
```
// example
console.log(jagile.checkMinValueEachWords("joão de trindade", 2));
> true

// example - 2
console.log(jagile.checkMinValueEachWords("joão d trindade", 2));
> false

and so on...
```

### checkMaxValueEachWords
> Check the maximum amount of characters for each word. The return is **boolean**.

#### Syntax
> checkMaxValueEachWords(value: string, max: number) => boolean

* **max -** a positive number
#### Use
```
// example
console.log(jagile.checkMaxValueEachWords("jay soft", 5));
> true

// example - 2
console.log(jagile.checkMaxValueEachWords("joão trindade", 5));
> false

and so on...
```

### checkMinAndMaxValueEachWord
> Check the minimum and maximum amount of characters for each word. The return is **boolean**.

#### Syntax
> checkMinAndMaxValue(value: string, min: number, max: number) => boolean

* **min** \> 0 and **min** < **max**

#### Use
```
// example
console.log(jagile.checkMinAndMaxValueEachWord("jay soft", 2, 4));
> true

// example - 2
console.log(jagile.checkMinAndMaxValueEachWord("joão trindade", 5, 9));
> false

and so on...
```

### correctName
> Remove special characters and space except accents. The return is **string**.

#### Syntax
> correctName(value: string) => string

#### Use
```
// example
console.log(jagile.correctName("joão980_$ 78   soft"));
> joão soft


and so on...
```

### getArrayElements
> Get array element/s. The return is **array**.

#### Syntax
> getArrayElements(arr: array, elements: any) => array

#### Use
```
// example
let arr = ["jay", 19, true, "cool", -1, ...];

console.log(jagile.getArrayElements(arr, ["jay", -1]));
> ["jay", -1]

console.log(jagile.getArrayElements(arr, "jay"));
> ["jay"]


and so on...
```

### getObjectProps
> Get object prop/s. The return is **object**.

#### Syntax
> getObjectProps(obj: object, props: string | array) => object

#### Use
```
// example
let obj = {id: 1, name: "jay", age: 19};

console.log(jagile.getObjectProps(obj, ["id", "age"]));
> {id: 1, age: 19}

console.log(jagile.getObjectProps(obj, "age"));
> {age: 19}


and so on...
```

### getOnlyNumber
> Get only numbers. The return is **number**.

#### Syntax
> getOnlyNumber(value: any) => number

#### Use
```
// example
console.log(jagile.getOnlyNumber("jay 1df 34 soft"));
> 134


and so on...
```

### getElementPos
> Get the first position of an array of objects by field and value. The return is **number**.

#### Syntax
> getElementPos(arr: array, prop: string, value: any) => number

#### Use
```
// example
let arr = [{name: "jay", age: 19}, {name: "soft", age: 20}, {name: "trindade", age: 19}]

console.log(jagile.getElementPos(arr, "name", "soft"));
> 1

console.log(jagile.getElementPos(arr, "id", "1"));
> -1


and so on...
```

### generateObjectId
> Generates a unique objectId like "5db7e872dab3eb3d7cc44080". The return is **objectId**.

#### Syntax
> generateObjectId() => objectId

#### Use
```
// example
console.log(jagile.generateObjectId());
> 5db7e872dab3eb3d7cc44080


and so on...
```

### removeArrayElement
> Remove array elements. The return is **array**.

#### Syntax
> removeArrayElement(arr: array, element: string | array) => object

#### Use
```
// example
let arr = ["jay", 1, true, "soft"]

console.log(jagile.removeArrayElement(arr, ["jay", true]));
> [1, "soft"]

console.log(jagile.removeArrayElement(arr, 1);
> ["jay", true, "soft"]


and so on...
```

### removeObjectProps
> Remove object properties. The return is **object**.

#### Syntax
> removeObjectProps(obj: object, props: string | array) => object

#### Use
```
// example
let obj = {name: "jay", age: 19, sex: 1, username: "joaotrindade.soft"}

console.log(jagile.removeObjectProps(obj, ["name", "sex"]));
> {age: 19, username: "joaotrindade.soft"}

console.log(jagile.removeObjectProps(obj, "username");
> {name: "jay", age: 19, sex: 1}


and so on...
```

### uniqueArray
> Remove repeated elements from **array**. The return is **array**.

#### Syntax
> uniqueArray(arr: array) => array

#### Use
```
// example
let arr = [1, 4, 2, "jay", 2, 4, true, "jay"];

console.log(jagile.uniqueArray(arr));
> [1, 4, 2, "jay", true]


and so on...
```

### uniqueArrayObjectBy
> Remove repeated elements from an **array** of **objects** by property. The return is **array**.

#### Syntax
> uniqueArrayObjectBy(arr: any, prop: string) => array

#### Use
```
// example
let arr = [{name: "jay", age: 19}, {name: "soft", age: 20}, {name: "jay", age: 18}]

console.log(jagile.uniqueArrayObjectBy(arr, "name"));
> [{name: "jay", age: 19}, {name: "soft", age: 20}]


and so on...
```

### existModule
> Check if there is a node.js **module** like "http, jsoft-agile, etc...". The return is **boolean**.

#### Syntax
> existModule(value: any) => boolean

#### Use
```
// example
console.log(jagile.existModule("http"));
> true


and so on...
```

## Contributing
Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versions
We use [SemVer](https://semver.org/) for versioning.

## Author
> João Trindade

* **Email:** <joaotrindade.soft@gmail.com>
* **WhatsApp:** +244 913 056 212
* **[Facebook](https://www.facebook.com/jaytrindade.jt)**

## License
This project is licensed under the MIT License

## Acknowledgments
* I thank God for all the good you have done in my life
* To all those who supported me and always believed in me