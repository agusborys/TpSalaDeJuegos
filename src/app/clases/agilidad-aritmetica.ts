export class AgilidadAritmetica {
    numeroUno:number;
    numeroDos:number;
    operadores : Array<string> = ["+","-","*","/"];
    operador:string;
    resultadoVerdadero:number;
    resultadoJugador:number;

    constructor(){
        this.numeroDos=0;
        this.numeroUno=0;
        this.operador="";
        this.resultadoVerdadero=0;
        this.resultadoJugador=0;
    }

    public GenerarJuego() : number
    {
        this.numeroUno = Math.floor((Math.random()*20)+1);
        this.numeroDos = Math.floor((Math.random()*10)+1);
        let randOperator = Math.floor((Math.random() * 3) + 0);
        this.operador = this.operadores[randOperator];
        switch(this.operador)
        {
            case "+":
                 this.resultadoVerdadero = this.numeroUno + this.numeroDos;
                 break;
            case "-":
                 this.resultadoVerdadero = this.numeroUno - this.numeroDos;
                 break;
            case "*":
                 this.resultadoVerdadero = this.numeroUno * this.numeroDos;
                 break;
            case "/":
                  if(this.numeroDos == 0)
                  {
                      this.numeroDos = Math.floor((Math.random() * 10) + 1);
                      this.resultadoVerdadero = this.numeroUno / this.numeroDos;
                  }
                  else
                    {
                        this.resultadoVerdadero = this.numeroUno / this.numeroDos;
                    }
                break;
        }
        return this.resultadoVerdadero;
    }
    public Verificar() : boolean
    {
        if(this.resultadoJugador == this.resultadoVerdadero)
        {
            return true;
        }
        else{
            return false;
        }
    }

}
