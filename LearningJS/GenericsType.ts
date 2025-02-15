/**
 * TS中的泛型使用(Generics Type) 样例:
 * 当我们想使用一个函数来获取对象的属性值时，我们可以使用泛型来实现
 * 1. 定义一个泛型函数getUserPropValue，它接受两个参数，第一个参数是一个对象，第二个参数是对象的属性名
 * 2. 函数的返回值是对象的属性值
 * 3. 使用泛型约束，使得第二个参数的类型必须是第一个参数对象的属性名 
 * 
 * 这里需要使用到关键字keyof，它可以获取对象的所有属性名，然后使用T[keyof T]来获取对象的属性值
 */

const user = {
    name: 'John',
    age: 20,
    address: 'New York' 
}

function getUserPropValue<T>(user: T, propName: keyof T): T[keyof T] {
    return user[propName];
}

const address = getUserPropValue(user, 'address');
console.log(address); // New York