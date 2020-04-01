const sum =(a,b) =>a + b

// ES6 generator函数（处理异步），被async/await代替
function* tell(){
    console.log('执行a处理');
    yield 'a';

    console.log('执行b处理');
    yield 'b';

    console.log('执行c处理');
    yield 'c';
    
}
let k=tell()
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
