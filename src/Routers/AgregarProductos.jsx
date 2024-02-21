import style from "../Styles/agregar.module.css";

const AgregarProductos = () => {

return (
<div className={style.container}> 
    <h3>Agregar Producto</h3>
    <form>
        <div className={style.form}>
    {/* Primer Div */}
    <div className={style.primeraColumna}>
        <h5>Informacion del Producto</h5>
        <div className={style.formgroup}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Nombre del producto" />
            <label htmlFor="descripcion">Descripcion</label>
            <input type="text" className="form-control" id="descripcion" placeholder="Descripcion del producto" />
        </div>
            <br />
        <h5>Medidas/Uso</h5>
        <div className={style.formgroup}>
            <label htmlFor="medidas">Medidas</label>
            <input type="text" className="form-control" id="medidas" placeholder="AxAxP" />
            <label htmlFor="uso">Uso</label>
            <input type="text" className="form-control" id="uso" placeholder="" />
        </div>
    </div>
  
    {/* SegundoDiv */}
    <div className={style.segundaColumna}>
            {/* Imagenes */}
            <h5>Imagen del Producto</h5>
            <div className={style.formgroup}>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
            </div>
            <br />
            <div className={style.formgroup}>
                <h5>Categoria</h5>
                <label htmlFor="categoria">Categoria del producto</label>
                    <select className="form-control" id="categoria">
                        <option>Seleccionar..</option>
                    </select>
            </div>
            <br />
            <div className={style.formgroup}>
                <h5>Fechas disponibles</h5>
                <label htmlFor="desde">Desde</label>
                <input type="date" className="form-control" id="desde" placeholder="AxAxP" />
                <label htmlFor="hasta">Hasta</label>
                <input type="date" className="form-control" id="hasta" placeholder="" />
            </div>
    </div>
    </div>

    <div className={style.botones}>
        <button type="submit" className="btn">Descartar</button>
        <button type="submit" className="btn">Agregar</button>
    </div>

</form>
</div>
    );
};

export default AgregarProductos;