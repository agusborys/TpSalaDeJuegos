export class AdivinaNumero {
    numeroSecreto:number;
    numeroIngresado:number;
    intentos:number;

    constructor()
    {
        this.intentos=0;
        //this.numeroIngresado=0;
        this.numeroSecreto=0;
    }
    public GenerarNumero() : number
    {
        this.intentos=0;
        this.numeroSecreto = Math.floor((Math.random() * 50) + 1);  
        return this.numeroSecreto;
    }
    public Ayuda() : string
    {
        if(this.numeroIngresado < this.numeroSecreto)
        {
            return "el numero secreto es mayor...";
        }
        else
        {
            return "el numero secreto es menor...";
        }
    }
    public Verificar():boolean
    {
        if(this.numeroIngresado==this.numeroSecreto)
        {
            this.intentos++;
            return true;
        }
        else
        {
            this.intentos++;
            return false;
        }
    }
}
