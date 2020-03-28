class Complex {
    private rzeczywista: number;
    private urojona: number;

    constructor(r: number, u: number) {
        this.rzeczywista = r;
        this.urojona - u;
    }

    add(Num : Complex) : Complex {
        return new Complex(Num.rzeczywista + this.rzeczywista, Num.urojona + this.urojona);
    }

    sub(Num : Complex) : Complex {
        return new Complex(this.rzeczywista - Num.rzeczywista, this.urojona - Num.urojona);
    }

    mod() : number {
        return Math.sqrt(Math.pow(this.rzeczywista, 2) + Math.pow(this.urojona, 2));
    }

    toString() : string {
        return this.rzeczywista + " " + this.urojona;
    }
}

let liczba1 : Complex = new Complex(3, 4);
let liczba2 : Complex = new Complex(7, 3);

let wynikAdd : Complex = liczba1.add(liczba2);
console.log("Result: " + wynikAdd.toString());

let wynikSub : Complex = wynikAdd.sub(liczba1);
console.log("Result: " + wynikSub.toString());

let wynikMod : number = wynikSub.mod();
console.log("Result: " + wynikMod);
