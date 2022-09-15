class Obj {
    constructor(div, p, h2) {
       this.div = div,
       this.p = p,
       this.h2 = h2
    }
}
let div = document.querySelectorAll('div');
let p = document.querySelectorAll('p');
let h2 = document.querySelectorAll('h2')
let res = new Obj(div.length, p.length, h2.length);
console.log(res)