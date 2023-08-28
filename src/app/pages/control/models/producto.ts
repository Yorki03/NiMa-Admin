export class Producto{
    id_producto: number;
    imagen: string;

    constructor(data: any){
        this.id_producto = data.id_producto;
        this.imagen = data.imagen;
    }

    get url(){
        return this.imagen;
    }

    get id(){
        return this.id_producto;
    }
}