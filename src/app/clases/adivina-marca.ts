export class AdivinaLaMarca {
    opcionOk:string;
    opcionIngresada:string;
    opcionesMostradas:Array<string>;
    elementoAdivinar:any;
    pathMarca:string;
    constructor(){}
    public Verificar() : boolean
    {
        if(this.opcionOk == this.opcionIngresada)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    public GenerarOpcion()
    {
        let index = Math.floor((Math.random() * 7) +0);
        this.elementoAdivinar = this.arrayMarcas[index];
        this.opcionOk = this.elementoAdivinar["opcionOk"];
        this.opcionesMostradas = this.elementoAdivinar["opciones"];
        this.pathMarca = this.elementoAdivinar["path"];
    }

    arrayMarcas=[
        {
            path:"Yamaha.jpg",
            opciones:["Honda", "Ducati", "Yamaha", "BMW"],
            opcionOk:"Yamaha"
        },
        {
            path:"Tommy.jpg",
            opciones:["Levis", "Tommy Hilfiger", "Zara", "Lacoste"],
            opcionOk:"Tommy Hilfiger"
        },
        {
            path:"XBox.png",
            opciones:["PlayStation", "Nintendo", "Atari", "XBox"],
            opcionOk:"XBox"
        },
        {
            path:"Canterbury.gif",
            opciones:["Canterbury", "UnderArmor", "Pelican", "Kooga"],
            opcionOk:"Canterbury"
        },
        {
            path:"Chevrolet.png",
            opciones:["Toyota", "Chevrolet", "Fiat", "VolksWagen"],
            opcionOk:"Chevrolet"
        },
        {
            path:"Apple.gif",
            opciones:["Samsung", "Microsoft", "Apple", "Google"],
            opcionOk:"Apple"
        },
        {
            path:"McDonals.png",
            opciones:["BurgerKing", "Mostaza", "KFC", "McDonals"],
            opcionOk:"McDonals"
        },
        {
            path:"Nike.png",
            opciones:["Nike", "Adidas", "Reebok", "Toper"],
            opcionOk:"Nike"
        }
    ];
}
