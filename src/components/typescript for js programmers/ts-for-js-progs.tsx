const user: User = {
    name: 'John',
    age: 25
}
/* can apply this interface to object, so object will follow these types described in interface */
interface User {
    name: string,
    age: number
}


// unions
/*  can create our own types with unions 
    (can't use unions in interface) 
*/
type myBool = true | false;
type modalWindow = 'opened' | 'closed'

function drewUsers(arg: string | string[]) {
  return arg.length
}


// typeof
/* checking types */
function typeCheck(obj: string | string[]) {
  if (Array.isArray(obj)) {
      return 'is Array'
  }
  else if (typeof obj === 'string') {
    return 'is String'
  }
}
function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj]
  }
  return obj
}
console.log(wrapInArray(['hey']))
console.log(wrapInArray('sup!?'))


// Structural type system 
/*  if the interface and variable matches with types we can use. It is called structural typing
    or duck typing: if it's walks like duck and it's sounds like duck must a duck :)

    typescript checks the shapes
    if two objects has same shapes they're
*/

interface Point {
  num1: number,
  num2: number
}

function printDuck(p: Point) {
  console.log(`${p.num1}, ${p.num2}`)
}

const duck = {
  num1: 2,
  num2: 34
}
/*  the duck was not declared as Point's type. However TP checks shape of duck 
    to the shape of Point, they're matches and code passes */

console.log(printDuck(duck))

const duck2 = {
  num1: 'yo',
  num2: 234
}
// console.log(printDuck(duck2)) 
/* Argument of type '{ num1: string; num2: number; }' is not assignable to parameter of type 'Point'.
    Types of property 'num1' are incompatible.
      Type 'string' is not assignable to type 'number'.
*/

const duck3 = {
  num1: 23,
  num2: 84,
  x: 23,
  y: 3
}
/* the interface requires only num1, num2. subsets, num1 num2 are subsets of Point interface */
console.log(printDuck(duck3))


// Generics
/*  generics are used when we don't know the type.
    so we're creating generic <Type> or <AnyOtherName>. 
     */

type arrayWithNumbers = Array<number>;
type arrayWithString = Array<string>;
type arrayWithObjects = Array<{name: string}>;
/*  these are custom types which can be used
    on variables for example, and
    they're will follow the rules that are described */
const array: arrayWithNumbers = [2,3,4,75];
const arrayString: arrayWithString = ['hey', 'yo!']
const arrayObjects: arrayWithObjects = [{name: 'James'}]


interface Backpack<Type> {
  add: (obj: Type) => void,
  get: () => Type
}

declare const backpack: Backpack<string>


backpack.add('some string');
backpack.get()
/* here we're making generic. we don't know what kind of type it could come
    so we're making generic. and then we're setting type <string> to that. */


const LearningTP = () => {
  return (
    <header>
        <h2>{user.age} ages</h2>
        <p>{drewUsers(['1,', '2','3'])}</p>
        <p>{drewUsers('hello my friend!')}</p>
        <h3>{typeCheck([])}</h3>
        <h3>{typeCheck('yo!')}</h3>
        <p>{}</p>

    </header>
  )
}

export default LearningTP