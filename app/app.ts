let message: string= "Hello World";
console.log(message);
let saludo: string = "Hola, mundo"
let nombre: string= "Mateo"
let mensaje: string= `Mi nombre es ${nombre}. Soy nuevo en Typescrip`;
console.log (mensaje);
let codigoProducto: number= 6;
enum Color {
    Azul,
    Rojo,
    Verde
}
let colorAuto: Color= Color.Azul;

class Persona {
    nombre: string = "";
    apellido: string = "";

   
    
}

// let marcela1: Persona = new Persona("Marcela", "Viana")
let marcela: Persona = new Persona();
marcela.nombre = "Marcela"
marcela.apellido = "Viana"


console.log (`Mi nombre es ${marcela.nombre} ${marcela.apellido}` );
marcela.nombre = "Marcela Liliana";
console.log (`Mi nombre es ${marcela.nombre} ${marcela.apellido}` );

class Operacion{ 
    protected valorA:number;
    protected valorB:number;
    protected resultado:number;

    constructor(){
        this.valorA=0;
        this.valorB=0;
        this.resultado=0;
    }

    set ValorA(value:number){
        this.valorA=value;
    }
    
    set ValorB(value:number){
        this.valorB=value;
    }

    get Resultado():number{
        return this.resultado;
    }
}

class Suma extends Operacion{
    Sumar(){
        this.resultado=this.valorA+this.valorB;
    }    
}

class Resta extends Operacion{
    Restar(){
        this.resultado=this.valorA-this.valorB;
    }
}

let operacionS=new Suma();
operacionS.ValorA=45;
operacionS.ValorB=10;
operacionS.Sumar();
console.log(`El resultado de la suma es ${operacionS.Resultado}.`)

let operacionR=new Resta();
operacionR.ValorA=45;
operacionR.ValorB=10;
operacionR.Restar();
console.log (`El resultado de la resta es ${operacionR.Resultado}.`)
