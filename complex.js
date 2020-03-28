"use strict";
class Complex {
    constructor(r, u) {
        this.rzeczywista = r;
        this.urojona = u;
    }
    add(Num) {
        return new Complex(Num.rzeczywista + this.rzeczywista, Num.urojona + this.urojona);
    }
    sub(Num) {
        return new Complex(this.rzeczywista - Num.rzeczywista, this.urojona - Num.urojona);
    }
    mod() {
        return Math.sqrt(Math.pow(this.rzeczywista, 2) + Math.pow(this.urojona, 2));
    }
    toString() {
        return this.rzeczywista + " " + this.urojona;
    }
}
let liczba1 = new Complex(3, 4);
let liczba2 = new Complex(7, 3);
let wynikAdd = liczba1.add(liczba2);
console.log("Result: " + wynikAdd.toString());
let wynikSub = wynikAdd.sub(liczba1);
console.log("Result: " + wynikSub.toString());
let wynikMod = wynikSub.mod();
console.log("Result: " + wynikMod);
