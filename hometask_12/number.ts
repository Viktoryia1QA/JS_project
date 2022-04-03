// async function add(a:number, b: number): Promise<number> {
// return a + b
// }

function sayHi(name: string | number): boolean | number {
  if (typeof name === 'string') {
    return name.startsWith('oo');
  }
  return name * name;
}

console.log(sayHi('ooo'));
console.log(sayHi(8));
