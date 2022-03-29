"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a;
var b;
var c = 101;
var recursos = ["memoria", "disco", "procesador"];
var message = "Hello World";
console.log(message);
var saludo = "Hola, mundo";
var nombre = "Mateo";
var mensaje = "Mi nombre es " + nombre + ". Soy nuevo en Typescrip";
console.log(mensaje);
var codigoProducto = 6;
var Color;
(function (Color) {
    Color[Color["Azul"] = 0] = "Azul";
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["Verde"] = 2] = "Verde";
})(Color || (Color = {}));
var colorAuto = Color.Azul;
var Persona = /** @class */ (function () {
    function Persona() {
        this.nombre = "";
        this.apellido = "";
    }
    return Persona;
}());
// let marcela1: Persona = new Persona("Marcela", "Viana")
var marcela = new Persona();
marcela.nombre = "Marcela";
marcela.apellido = "Viana";
console.log("Mi nombre es " + marcela.nombre + " " + marcela.apellido);
marcela.nombre = "Marcela Liliana";
console.log("Mi nombre es " + marcela.nombre + " " + marcela.apellido);
var Operacion = /** @class */ (function () {
    function Operacion() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    Object.defineProperty(Operacion.prototype, "ValorA", {
        set: function (value) {
            this.valorA = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operacion.prototype, "ValorB", {
        set: function (value) {
            this.valorB = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operacion.prototype, "Resultado", {
        get: function () {
            return this.resultado;
        },
        enumerable: true,
        configurable: true
    });
    return Operacion;
}());
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Suma.prototype.Sumar = function () {
        this.resultado = this.valorA + this.valorB;
    };
    return Suma;
}(Operacion));
var Resta = /** @class */ (function (_super) {
    __extends(Resta, _super);
    function Resta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Resta.prototype.Restar = function () {
        this.resultado = this.valorA - this.valorB;
    };
    return Resta;
}(Operacion));
var operacionS = new Suma();
operacionS.ValorA = 45;
operacionS.ValorB = 10;
operacionS.Sumar();
console.log("El resultado de la suma es " + operacionS.Resultado + ".");
var operacionR = new Resta();
operacionR.ValorA = 45;
operacionR.ValorB = 10;
operacionR.Restar();
console.log("El resultado de la resta es " + operacionR.Resultado + ".");
