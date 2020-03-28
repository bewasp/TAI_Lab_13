var Complex = /** @class */ (function () {
    function Complex(r, u) {
        this.rzeczywista = r;
        this.urojona - u;
    }
    Complex.prototype.add = function (Num) {
        return new Complex(Num.rzeczywista + this.rzeczywista, Num.urojona + this.urojona);
    };
    Complex.prototype.sub = function (Num) {
        return new Complex(this.rzeczywista - Num.rzeczywista, this.urojona - Num.urojona);
    };
    Complex.prototype.mod = function () {
        return Math.sqrt(Math.pow(this.rzeczywista, 2) + Math.pow(this.urojona, 2));
    };
    Complex.prototype.toString = function () {
        return this.rzeczywista + " " + this.urojona;
    };
    return Complex;
}());
var liczba1 = new Complex(3, 4);
var liczba2 = new Complex(7, 3);
var wynikAdd = liczba1.add(liczba2);
console.log("Result: " + wynikAdd.toString());
var wynikSub = wynikAdd.sub(liczba1);
console.log("Result: " + wynikSub.toString());
var wynikMod = wynikSub.mod();
console.log("Result: " + wynikMod);
