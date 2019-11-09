# **jsoft-agile**
A [node.js](https://nodejs.org/en/) module that provides a collection of ready-made functions used on large systems for their development.

## Getting Started
![](https://github.com/Jaytrindade/jsoft-agile/blob/master/assets/img/getting-started.PNG?raw=true)

## Prerequisites
This module was developed in node.js v10.16.3.
> We recommend using node.js v10.x or higher.

## Installation
This is a [Node.js](https://nodejs.org/en/) module available through the npm registry.

Installation is done using the `npm install` command:

``` 
$ npm install --save jsoft-agile 
```

or in development mode:

``` 
$ npm install --save-dev jsoft-agile 
```

## Loading

you can load this module like this:

```javascript 
const jagile = require("jsoft-agile") 
```

or like this:

```javascript 
import jagile from "jsoft-agile" 
```

## What jsoft-agile offers us?

#### Addeds in version 2.x 

###### 2.1.0
* [**`isAll`**](#isAll) *check if all elements of `array` are `typeof` passed*

###### 2.0.0
* [**`inArrayAnyValue`**](#inArrayAnyValue) *check if any value exists inside `array`*
* [**`inObjectAnyProp`**](#inObjectAnyProp) *check if any prop exists inside `object`*
* [**`hasValueAllProps`**](#hasValueAllProps) *check if all **props** have **value***
* [**`getTypeof`**](#getTypeof) *get **type** of **value** like "commonNumber, commonObject, array, function, etc..."*
* [**`wallFilters`**](#wallFilters) *validates or filters all data according to a **rule***

```
6 new features added
``` 

#### Addeds in version 1.x

* [**`isString`**](#isString) *check if the passed value is a `string`*
* [**`isAllString`**](#isAllString) *check if all elements of an array are `strings`*
* [**`isNumber`**](#isNumber) *check if the passed value is a `number`*
* [**`isCommonNumber`**](#isCommonNumber) *checks if the passed value is a `commonNumber` like "-1, 0, 1, 1.2, etc..."*
* [**`isAllCommonNumber`**](#isAllCommonNumber) *check if all elements of an array are `commonNumber` like "-1, 0, 1, 1.2, etc..."*
* [**`isBoolean`**](#isBoolean) *check if the passed value is a `boolean`*
* [**`isAllBoolean`**](#isAllBoolean) *check if all elements of an array are `boolean`*
* [**`isObject`**](#isObject) *check if the passed value is a `object` like "null, {}, etc..."*
* [**`isObjectId`**](#isObjectId) *check if the passed value is a `objectId` like "5db7e872dab3eb3d7cc44080"*
* [**`isAllObjectId`**](#isAllObjectId) *check if all elements of an array are `objectId` like "5db7e872dab3eb3d7cc44080*
* [**`isCommonObject`**](#isCommonObject) *Check if the passed value is a `commonObject` like "{}"*
* [**`isAllCommonObject`**](#isAllCommonObject) *check if all elements of an array are `commonObject` like "{}"*
* [**`isArray`**](#isArray) *check if the passed value is an `array`*
* [**`isAllArray`**](#isAllArray) *check if all elements of an array are `array`*
* [**`isEmail`**](#isEmail) *check if the passed value is an `email`*
* [**`isUsername`**](#isUsername) *check if the passed value is a `username` like "_joao99, jay99_, jay, etc..."*
* [**`isPhoneNumber`**](#isPhoneNumber) *check if the passed value is an international **phone number** like "+244 913 056 212, +555 555 1234"*
* [**`inArray`**](#inArray) *check if value exists inside `array`*
* [**`inObject`**](#inObject) *check if prop exists inside `object`*
* [**`hasValue`**](#hasValue) *check if has some **value***
* [**`hasAllValues`**](#hasAllValues) *check if all elements of an array has **value***
* [**`justifySpaceWords`**](#justifySpaceWords) *justify space **between words***
* [**`capitalizeText`**](#capitalizeText) *make the first letters of **words capitalized***
* [**`checkMinValueEachWords`**](#checkMinValueEachWords) *check the minimum amount of characters for **each word***
* [**`checkMaxValueEachWords`**](#checkMaxValueEachWords) *check the maximum amount of characters for **each word***
* [**`checkMinAndMaxValueEachWord`**](#checkMinAndMaxValueEachWord) *check the minimum and maximum amount of characters for **each word***
* [**`correctName`**](#correctName) *remove special characters and space **except accents***
* [**`getArrayElements`**](#getArrayElements) *get `array` **elements***
* [**`getObjectProps`**](#getObjectProps) *get `object` **props***
* [**`getOnlyNumber`**](#getOnlyNumber) *get only **numbers***
* [**`getElementPos`**](#getElementPos) *get the **first** position of an `array` of `objects` by **field** and **value***
* [**`generateObjectId`**](#generateObjectId) *generates a unique `objectId` like "5db7e872dab3eb3d7cc44080"*
* [**`removeArrayElements`**](#removeArrayElements) *remove `array` elements*
* [**`removeObjectProps`**](#removeObjectProps) *remove `object` properties*
* [**`uniqueArray`**](#uniqueArray) *remove **repeated** elements from `array`*
* [**`uniqueArrayObjectBy`**](#uniqueArrayObjectBy) *remove **repeated** elements from an `array` of `objects` by property*
* [**`existModule`**](#existModule)  *check if there is a node.js **module** like "http, jsoft-agile, etc..."*

```
37 functions ready for you
``` 

## How can I use?
### isString
Check if the passed value is a **`string`**. The return is **`boolean`**.

#### Syntax
```javascript
isString: (value: any) => boolean
```

#### Use
```javascript
// example
console.log(jagile.isString("jay"));
> true

console.log(jagile.isString(19));
> false

console.log(jagile.isString({}));
> false


// and so on...
```

### isAllString
Check if all elements of an `array` are **`string`**. The return is **`boolean`**.

#### Syntax
```javascript 
isAllString: (values: array) => boolean
```

#### Use
```javascript
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

// example - 4
console.log(jagile.isAllString(["joão", 1, NaN, {}]))
> false


// and so on...
```

### isNumber
Check if the passed value is a **`number`**. The return is **`boolean`**.


#### Syntax
```javascript
isNumber: (value: any) => boolean
```

#### Use
```javascript
// example
console.log(jagile.isNumber(1));
> true

console.log(jagile.isNumber(NaN));
> true

console.log(jagile.isNumber("jay"));
> false


// and so on...
```

### isCommonNumber
Checks if the passed value is a **`commonNumber`** like "-1, 0, 1, 2.1, etc...". The return is **`boolean`**.

#### Syntax
```javascript
isCommonNumber: (value: any) => boolean
```

#### Use
```javascript
// example
console.log(jagile.isCommonNumber(1));
> true

console.log(jagile.isCommonNumber(NaN));
> false

console.log(jagile.isCommonNumber("jay"));
> false


// and so on...
```

### isAllCommonNumber
Check if all elements of an `array` are **`commonNumber`** like "-1, 0, 1, 2.1, etc...". The return is **`boolean`**.

#### Syntax
```javascript
isAllCommonNumber: (values: array) => boolean
```

#### Use
```javascript
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


// and so on...
```

### isBoolean
Check if the passed value is a **`boolean`**. The return is **`boolean`**.

#### Syntax
```javascript
isBoolean: (value: any) => boolean
``` 

#### Use
```javascript
// example
console.log(jagile.isBoolean(true));
> true

console.log(jagile.isBoolean(1));
> false

console.log(jagile.isBoolean("jay"));
> false


// and so on...
```

### isAllBoolean
Check if all elements of an `array` are **`boolean`**. The return is **`boolean`**.

#### Syntax
```javascript
isAllBoolean: (values: any) => boolean
```

#### Use
```javascript
// example
console.log(jagile.isAllBoolean([true, false]))
> true

// example - 2
let cool = true,
    data = 100

console.log(jagile.isAllBoolean([cool, data]))
> false


// and so on...
```

### isAll
Check if all elements of `array` are `typeof` passed. The return is **`boolean`**.

#### Syntax
```javascript
isAll: (values: any, type: string) => boolean
```

#### Use
```javascript
// example
console.log(jagile.isAll([true, false], "boolean"))
> true

console.log(jagile.isAll([1, 2.1], "commonNumber"))
> true

console.log(jagile.isAll([1, "jay"], "string"))
> false


// and so on...
```

### isObject
Check if the passed value is a **`object`**. The return is **`boolean`**.

#### Syntax
```javascript
isObject: (value: any) => boolean
``` 

#### Use
```javascript
// example
console.log(jagile.isObject({}));
> true

console.log(jagile.isObject([]));
> true

console.log(jagile.isObject(null));
> true

console.log(jagile.isObject(1));
> false

console.log(jagile.isObject("jay"));
> false


// and so on...
```

### isObjectId
Check if the passed value is a **`objectId`** like "5db7e872dab3eb3d7cc44080". The return is **`boolean`**.

#### Syntax
```javascript
isObjectId: (value: any) => boolean
``` 

#### Use
```javascript
// example
console.log(jagile.isObjectId("5db7e872dab3eb3d7cc44080"));
> true

console.log(jagile.isObjectId([]));
> false

console.log(jagile.isObjectId(null));
> false

console.log(jagile.isObjectId(1));
> false

console.log(jagile.isObjectId("jay"));
> false


// and so on ...
```

### isAllObjectId
Check if all elements of an `array` are **`objectId`** like "5db7e872dab3eb3d7cc44080. The return is **`boolean`**.

#### Syntax
```javascript
isAllObjectId: (value: array) => boolean
``` 

#### Use
```javascript
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


// and so on...
```

### isCommonObject
Check if the passed value is a **`commonObject`** like "{}". The return is **`boolean`**.

#### Syntax
```javascript
isCommonObject: (value: any) => boolean
``` 

#### Use
```javascript
// example
console.log(jagile.isCommonObject({}));
> true

console.log(jagile.isCommonObject([]));
> false

console.log(jagile.isCommonObject(null));
> false

console.log(jagile.isCommonObject(1));
> false

console.log(jagile.isCommonObject("jay"));
> false


// and so on...
```

### isAllCommonObject
Check if all elements of an `array` are **`commonObject`** like "{}". The return is **`boolean`**.

#### Syntax
```javascript
isAllCommonObject: (value: any) => boolean
```

#### Use
```javascript
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


// and so on..
```

### isArray
Check if the passed value is an **`array`**. The return is **`boolean`**.

#### Syntax
```javascript
isArray: (value: any) => boolean
``` 

#### Use
```javascript
// example
console.log(jagile.isArray([]));
> true

console.log(jagile.isArray(["jay", "trindade"]));
> true

console.log(jagile.isArray({}));
> false

console.log(jagile.isArray(1));
> false

console.log(jagile.isArray("jay"));
> false


// and so on...
```

### isAllArray
Check if all elements of an `array` are **`array`**. The return is **`boolean`**.

#### Syntax
```javascript
isAllArray: (value: array) => boolean
``` 

#### Use
```javascript
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


// and so on...
```

### isEmail
Check if the passed value is an **`email`**. The return is **`boolean`**.

#### Syntax
```javascript
isEmail: (value: any) => boolean
``` 

#### Use
```javascript
// example
console.log(jagile.isEmail("joaotrindade.soft@gmail.com"));
> true

console.log(jagile.isEmail("jay@gmail.com"));
> true

console.log(jagile.isEmail("jay@gmail"));
> false

console.log(jagile.isEmail("jay"));
> false


// and so on...
```

### isUsername
Check if the passed value is a **`username`** like "_joao99, jay99_, jay, etc...". The return is **`boolean`**.

#### Syntax
```javascript
isUsername: (value: any) => boolean
``` 

#### Use
```javascript
// example
console.log(jagile.isUsername("_joao99"));
> true

console.log(jagile.isUsername("@jay"));
> false

console.log(jagile.isUsername("12jay"));
> false


// and so on...
```

### isPhoneNumber
Check if the passed value is an international **phone number** like "+244 913 056 212, +555 555 1234". The return is **`boolean`**.

#### Syntax
```javascript
isPhoneNumber: (value: any) => boolean
``` 

#### Use
```javascript
// example
console.log(jagile.isPhoneNumber("+244 913 056 212"));
> true

console.log(jagile.isPhoneNumber("555 555 1234"));
> false


// and so on...
```

### inArray
Check if value exists inside **`array`**. The return is **`boolean`**.

#### Syntax
```javascript
inArray: (arr: array, values: string | array) => boolean
```

#### Use
```javascript
// example
let arr = ["jay", "trindade", 1, true, -4]

console.log(jagile.inArray(arr, ["jay", 1]));
> true

console.log(jagile.inArray(arr, -4));
> true

console.log(jagile.inArray(arr, [0, 1]));
> false


// and so on...
```

### inArrayAnyValue
Check if any value exists inside `array`. The return is **`commonObject`**.

#### Syntax
```javascript
inArrayAnyValue: (arr: array, values: array) => commonObject
```

#### Use
```javascript
// example
let arr = ["jay", "trindade", 1, true, -4]

console.log(jagile.inArrayAnyValue(arr, ["jay", 1]));
> {ok: true, complete: true}

console.log(jagile.inArrayAnyValue(arr, [2, "trindade", "soft"]));
> {ok: true, complete: false, exist: ["trindade"], notExist: [1, "soft"]}

console.log(jagile.inArrayAnyValue(arr, [0, "soft", true]));
> {ok: false, complete: false}


// and so on...
```

### inObject
Check if value exists inside **`object`**. The return is **`boolean`**.

#### Syntax
```javascript
inObject: (obj: commonObject, values: string | array) => boolean
``` 

#### Use
```javascript
// example
let obj = {id: 1, name: "jay", lastName: "trindade", age: 19}

console.log(jagile.inObject(obj, ["id", "name"]));
> true

console.log(jagile.inObject(obj, "sex"));
> false

console.log(jagile.inObject(obj, ["id", "sex"]));
> false


// and so on...
```

### inObjectAnyProp
Check if any prop exists inside **`commonObject`**. The return is **`commonObject`**.

#### Syntax
```javascript
inObjectAnyProp: (obj: commonObject, values: array) => commonObject
``` 

#### Use
```javascript
// example
let obj = {id: 1, name: "jay", lastName: "trindade", age: 19}

console.log(jagile.inObjectAnyProp(obj, ["id", "name"]));
> {ok: true, complete: true}

console.log(jagile.inObjectAnyProp(obj, ["name", "country"]));
> {ok: true, complete: false, exist: ["name"], notExist: ["country"]}

console.log(jagile.inObjectAnyProp(obj, ["sex", "city", "state"]));
> {ok: false, complete: false}


// and so on...
```

### hasValue
Check if has some **value**. The return is **`boolean`**.

#### Syntax
```javascript
hasValue: (value: any) => boolean
``` 

#### Use
```javascript
// example
console.log(jagile.hasValue("jay"));
> true

console.log(jagile.hasValue(1));
> true

console.log(jagile.hasValue(false));
> true

console.log(jagile.hasValue([]));
> false

console.log(jagile.hasValue({}));
> false

console.log(jagile.hasValue(null));
> false


// and so on...
```

### hasAllValue
Check if all elements of an `array` has **value**. The return is **`boolean`**.

#### Syntax
```javascript
hasAllValue: (values: array) => boolean
``` 

#### Use
```javascript
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


// and so on...
```

### hasValueAllProps
Check if all **props** have **value**. The return is **`commonObject`**.

#### Syntax
```javascript
hasValueAllProps: (values: array) => commonObject
``` 

#### Use
```javascript
// example
let obj = {name: "jay", username:"soft", age: 19, sex: 1}
console.log(jagile.hasValueAllProps(obj, ["name", "username"]))
> {ok: true}

console.log(jagile.hasValueAllProps(obj, ["name", "city"]))
> {ok: false, except: ["city"]}

console.log(jagile.hasValueAllProps(obj, ["country", "city"]))
> {ok: false, except: ["country", "city"]}


// and so on...
```

### justifySpaceWords
Justify space between **words**. The return is **`string`**.

#### Syntax
```javascript
justifySpaceWords: (value: string) => string
``` 

#### Use
```javascript
// example
console.log(jagile.justifySpaceWords("joão  trindade"));
> joão trindade


// and so on...
```

### capitalizeText
Make the **first** letters of **words** capitalized. The return is **`string`**.

#### Syntax
```javascript
capitalizeText: (value: string) => string
``` 

#### Use
```javascript
// example
console.log(jagile.capitalizeText("jOÃO tRiNdade jsoFt"));
> JOÃO tRiNdade jsoFt

console.log(jagile.capitalizeText("jOÃO tRiNdade jsoFt", true));
> JOÃO TRiNdade JsoFt


// and so on...
```

### checkMinValueEachWords
Check the minimum amount of characters for **each word**. The return is **`boolean`**.

#### Syntax
```javascript
checkMinValueEachWords: (value: string, min: number) => boolean
``` 

#### Use
```javascript
// example
console.log(jagile.checkMinValueEachWords("joão de trindade", 2));
> true

console.log(jagile.checkMinValueEachWords("joão d trindade", 2));
> false


// and so on...
```

### checkMaxValueEachWords
Check the maximum amount of characters for **each word**. The return is **`boolean`**.

#### Syntax
```javascript
checkMaxValueEachWords: (value: string, max: number) => boolean
``` 

* **max -** a positive number

#### Use
```javascript
// example
console.log(jagile.checkMaxValueEachWords("jay soft", 5));
> true

console.log(jagile.checkMaxValueEachWords("joão trindade", 5));
> false


// and so on...
```

### checkMinAndMaxValueEachWord
Check the minimum and maximum amount of characters for **each word**. The return is **boolean**.

#### Syntax
```javascript
checkMinAndMaxValue: (value: string, min: number, max: number) => boolean
``` 

* **min** \> 0 and **min** < **max**

#### Use
```javascript
// example
console.log(jagile.checkMinAndMaxValueEachWord("jay soft", 2, 4));
> true

console.log(jagile.checkMinAndMaxValueEachWord("joão trindade", 5, 9));
> false

// and so on...
```

### correctName
Remove special characters and space **except accents**. The return is **`string`**.

#### Syntax
```javascript
correctName: (value: string) => string
``` 

#### Use
```javascript
// example
console.log(jagile.correctName("joão980_$ 78   soft"));
> joão soft


// and so on...
```

### getTypeof
Get **type** of **value**. The return is **`typeof`**.

#### Syntax
```javascript
getTypeof: (value: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "commonNumber" | "commonObject" | "objectId" | "array"
```

#### Use
```javascript
// example
console.log(jagile.getTypeof("jay"));
> "string"

console.log(jagile.getTypeof(1));
> "commonNumber"

console.log(jagile.getTypeof([]));
> "array"

console.log(jagile.getTypeof({}));
> "commonObject"


// and so on...
```

### getArrayElements
Get array elements. The return is **`array`**.

#### Syntax
```javascript
getArrayElements: (arr: array, elements: any) => array
```

#### Use
```javascript
// example
let arr = ["jay", 19, true, "cool", -1, ...];

console.log(jagile.getArrayElements(arr, ["jay", -1]));
> ["jay", -1]

console.log(jagile.getArrayElements(arr, "jay"));
> ["jay"]


// and so on...
```

### getObjectProps
Get object props. The return is **`commonObject`**.

#### Syntax
```javascript
getObjectProps: (obj: object, props: string | array) => object
``` 

#### Use
```javascript
// example
let obj = {id: 1, name: "jay", age: 19};

console.log(jagile.getObjectProps(obj, ["id", "age"]));
> {id: 1, age: 19}

console.log(jagile.getObjectProps(obj, "age"));
> {age: 19}


// and so on...
```

### getOnlyNumber
Get only **numbers**. The return is **`number`**.

#### Syntax
```javascript
getOnlyNumber: (value: any) => number
``` 

#### Use
```javascript
// example
console.log(jagile.getOnlyNumber("jay 1df 34 soft"));
> 134


// and so on...
```

### getElementPos
Get the `first` position of an `array` of `objects` by **field** and **value**. The return is **`number`**.

#### Syntax
```javascript
getElementPos: (arr: array, prop: string, value: any) => number
``` 

#### Use
```javascript
// example
let arr = [{name: "jay", age: 19}, {name: "soft", age: 20}, {name: "trindade", age: 19}]

console.log(jagile.getElementPos(arr, "name", "soft"));
> 1

console.log(jagile.getElementPos(arr, "id", "1"));
> -1


// and so on...
```

### generateObjectId
Generates a unique `objectId` like "5db7e872dab3eb3d7cc44080". The return is **`objectId`**.

#### Syntax
```javascript
generateObjectId: () => objectId
``` 

#### Use
```javascript
// example
console.log(jagile.generateObjectId());
> 5db7e872dab3eb3d7cc44080


// and so on...
```

### removeArrayElement
Remove `array` elements. The return is **`array`**.

#### Syntax
```javascript
removeArrayElement: (arr: array, element: string | array) => array
``` 

#### Use
```javascript
// example
let arr = ["jay", 1, true, "soft"]

console.log(jagile.removeArrayElement(arr, ["jay", true]));
> [1, "soft"]

console.log(jagile.removeArrayElement(arr, 1);
> ["jay", true, "soft"]


// and so on...
```

### removeObjectProps
Remove `object` properties. The return is **`object`**.

#### Syntax
```javascript
removeObjectProps: (obj: object, props: string | array) => object
``` 

#### Use
```javascript
// example
let obj = {name: "jay", age: 19, sex: 1, username: "joaotrindade.soft"}

console.log(jagile.removeObjectProps(obj, ["name", "sex"]));
> {age: 19, username: "joaotrindade.soft"}

console.log(jagile.removeObjectProps(obj, "username");
> {name: "jay", age: 19, sex: 1}


// and so on...
```

### uniqueArray
Remove **repeated** elements from **`array`**. The return is **`array`**.

#### Syntax
```javascript
uniqueArray: (arr: array) => array
``` 

#### Use
```javascript
// example
let arr = [1, 4, 2, "jay", 2, 4, true, "jay"];

console.log(jagile.uniqueArray(arr));
> [1, 4, 2, "jay", true]


// and so on...
```

### uniqueArrayObjectBy
Remove **repeated** elements from an **`array`** of **`objects`** by property. The return is **`array`**.

#### Syntax
```javascript
uniqueArrayObjectBy: (arr: any, prop: string) => array
``` 

#### Use
```javascript
// example
let arr = [{name: "jay", age: 19}, {name: "soft", age: 20}, {name: "jay", age: 18}]

console.log(jagile.uniqueArrayObjectBy(arr, "name"));
> [{name: "jay", age: 19}, {name: "soft", age: 20}]


// and so on...
```

### existModule
Check if there is a node.js **module** like "http, jsoft-agile, etc...". The return is **`boolean`**.

#### Syntax
```javascript
existModule: (value: any) => boolean
``` 

#### Use
```javascript
// example
console.log(jagile.existModule("http"));
> true

console.log(jagile.existModule("jsoft-agile"));
> true

console.log(jagile.existModule("kkkkkk"));
> false


// and so on...
```

### wallFilters
Validates or filters all data according to a **rule**. The return is **`commonObject`**.

#### Syntax
```javascript
wallFilters: (data: commonObject) => commonObject

data: {
    service: "string",
    data: "commonObject",
    rules: "commonObject",
    validations: ?"function"
}
``` 

#### Use
###### rules.js
```javascript
const rules = {
  signup: {
    fields: {
      name: {
        type: "string",
        importantFields: ["username"],
        validate: ["name", "username"]
      },
      username: { type: "string", validate: "username" },
      sex: { type: "commonNumber", required: true, accepts: [1, 2] },
      country: { type: "string", accepts: ["angola", "brasil"] },
      state: { type: "string", needFields: ["country"] }
    },
    config: {
      minFields: 3,
      output: {
        name: "Name",
        username: "UserName",
        sex: "Sex",
        country: "Country",
        state: "State"
      }
    }
  }
};

/**
 * field: {
 * type: typeof,
 * required: boolean,
 * default: value,
 * validate: string | array(string),
 * importantFields: array(string),
 * needFields: array(string),
 * accepts: array
 * }
 * 
 * config: {
 * minField: commonNumber,
 * output: commonObject
 * }
 */

module.exports = rules;
```

##### validates.js
```javascript
const jagile = require("jsoft-agile");

// validate name
const name = value => {
  value = jagile.correctName(value);
  if (jagile.checkMinAndMaxValueEachWord(value, 2, 8)) {
    return { ok: true, value: value };
  } else return { ok: false, message: "limit char" };
};

// validate username
const username = value => {
  if (jagile.isUsername(value)) return { ok: true, value: value };
  else return { ok: false, message: "invalid username" };
};

// validate email
const email = value => {
  value = value.trim();
  if (jagile.isEmail(value)) return { ok: true, value: value };
  else return { ok: false, message: "invalid email" };
};

// all validates
const validate = data => {
  let { type, value } = data;
  if (type == "name") return name(value);
  if (type == "username") return username(value);
  if (type == "email") return email(value);
  return null
};

module.exports = validate;
```

###### index.js
```javascript
const jagile = require("jsoft-agile");
const myRules = require("./rules");
const myValidations  = require("./validates");

// example
console.log(
  jagile.wallFilters({
    service: "signup",
    data: {
      name: "jay trindade",
      username: "jaytrindade",
      email: "soft",
      age: 20,
      sex: 2,
      country: "angola"
    },
    rules: myRules,
    validations: myValidations
  })
);
> 
{ 
    ok: true,
    exec: true,
    data: { 
        Name: 'jay trindade',
        UserName: 'jaytrindade',
        Sex: 2,
        Country: 'angola' 
    } 
}
>

// example - 2
console.log(
  jagile.wallFilters({
    service: "signup",
    data: {
      name: "jay",
      username: "@jay",
      age: 19,
      sex: 3,
      country: "china"
    },
    rules: myRules,
    validations: myValidations
  })
);
> 
{ 
    ok: false,
    exec: true,
    errors: { 
        username: 'invalid username',
        sex: 'Not allowed value',
        country: 'Not allowed value' 
    },
    keys: [ 
        'username', 
        'sex', 
        'country' 
    ]
}
>


// and so on...
```

## Contributing
Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versions
We use [SemVer](https://semver.org/) for versioning.

## Author
> João Trindade

* **Email:** <joaotrindade.soft@gmail.com>
* **WhatsApp:** +244 913 056 212
* **Instagram:** jayjsoft
* **[Facebook](https://www.facebook.com/jaytrindade.jt)**

## License
This project is licensed under the MIT License

## Acknowledgments
* I thank God for all the good you have done in my life
* To all those who supported me and always believed in me