export class JuegoPPT {
    eleccionMaquina:string;
    eleccionUsuario:string;
    constructor(){}
    public ObtenerEleccion() : string
    {
        let eleccion:number;
        eleccion = Math.floor((Math.random() * 3) + 1);
        switch(eleccion)
        {
            case 1:
                this.eleccionMaquina = "piedra";
                break;
            case 2:
                this.eleccionMaquina = "papel";
                break;
            case 3:
                this.eleccionMaquina = "tijera";
                break;
        }
        return this.eleccionMaquina;
    }
}
