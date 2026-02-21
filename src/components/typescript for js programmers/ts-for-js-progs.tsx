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
/* can create our own types with unions */
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