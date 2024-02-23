import { useState } from 'react';
import style from '../Styles/agregar.module.css';
import { toast } from 'sonner'

const AgregarProductos = () => {
  const [productData, setProductData] = useState({
    nombre: '',
    descripcion: '',
    stock: '',
    precio: '',
    categoria: '',
    disponibilidad: '',
    imageUrls: Array(1).fill({ url: '' }),
  });

  const isFieldEmpty = (fieldName) => !productData[fieldName];
  const isAllFieldsNonEmpty = () => !(isFieldEmpty('nombre') || isFieldEmpty('descripcion') || isFieldEmpty('stock') || isFieldEmpty('precio') || isFieldEmpty('categoria'));

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleImageUrlChange = (index, event) => {
    const inputValue = event.target.value.trim();
  
    if (inputValue === "") {
      return; 
    }
    const updatedUrls = [...productData.imageUrls];
    updatedUrls[index] = { url: inputValue };
    setProductData((prevState) => ({
      ...prevState,
      imageUrls: updatedUrls,
    }));
  };
  
  const handleAddImageUrl = () => {
    setProductData((prevData) => ({ ...prevData, imageUrls: [...prevData.imageUrls, ""] }));
  };
  
  const handleRemoveImageUrl = (index) => {
    const updatedUrls = [...productData.imageUrls];
    updatedUrls.splice(index, 1);
    setProductData((prevData) => ({ ...prevData, imageUrls: updatedUrls }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isAllFieldsNonEmpty()) {
      toast.error('Hay campos vacios, rellena todos para poder agregar el producto.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8080/Herramientas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          categoria: productData.categoria,
          stock: productData.stock,
          precio: productData.precio,
          disponibilidad: true,
          nombre: productData.nombre,
          marca: 'Y',
          descripcion: productData.descripcion,
          imagenes: productData.imageUrls.filter((url) => url !== ""),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
    console.log('Success:', responseData);
    toast.success('Se ha agregado exitosamente el producto!');
  } catch (error) {
    console.error('Error:', error.message);
    toast.error('Ha ocurrido un problema al crear el nuevo producto.' , error.message);
  }
  };

  return (
    <div className={style.container}>
      <h3>Agregar Producto</h3>
      <form onSubmit={handleFormSubmit}>
        <div className={style.form}>

        <div className={style.primeraColumna}>
            <h5>Informacion del Producto</h5>
            <div className={style.formgroup}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre del producto"
                    value={productData.nombre}
                    onChange={handleInputChange}
                />
                <label htmlFor="descripcion">Descripcion</label>
                <input
                    type="text"
                    className="form-control"
                    id="descripcion"
                    placeholder="Descripcion del producto"
                    value={productData.descripcion}
                    onChange={handleInputChange}
                />
            </div>
            <br />
            <h5>Informacion Adicional</h5>
            <div className={style.formgroup}>
                <label htmlFor="stock">Stock</label>
                <input
                    type="number"
                    className="form-control"
                    id="stock"
                    placeholder="Cantidad de stock.."
                    value={productData.stock}
                    onChange={handleInputChange}
                />
                <label htmlFor="precio">Precio</label>
                <input
                    type="number"
                    className="form-control"
                    id="precio"
                    placeholder="50$"
                    value={productData.precio}
                    onChange={handleInputChange}
                />
            </div>
        </div>

        <div className={style.segundaColumna}>
            <div className={style.formgroup}>
            <h5>Categoria</h5>
            <label htmlFor="categoria">Categoria del producto</label>
            <select
              className="form-control"
              id="categoria"
              value={productData.categoria}
              onChange={handleInputChange}
            >
                <option hidden>Seleccionar...</option>
                <option value="Construccion">Construcción</option>
                <option value="Jardineria">Jardinería</option>
                <option value="Hogar">Hogar</option>
                <option value="Sanitario">Sanitario</option>
            </select>
            </div>
                <br />
            <div className={style.formgroup}>
                <h5>Imagenes</h5>
                {productData.imageUrls.map((imgObj, index) => (
                <div key={index} className={style.imageContainer}>
                    <input
                    type="text"
                    className="form-control"
                    placeholder={`URL de la imagen ${index + 1}`}
                    value={imgObj.url || ""}
                    onChange={(event) => handleImageUrlChange(index, event)}
                    />
                    <button type="button" onClick={() => handleRemoveImageUrl(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>
                    </button>
                </div>
                ))}
                <button type="button" onClick={handleAddImageUrl} className={style.addImage}>+ Agregar Nueva URL de Imagen</button>
            </div>          
        </div>
    
        </div>
            <div className={style.botones}>
            <button type="button" className="btn">
                Descartar
            </button>
            <button type="submit" className="btn">
                Agregar
            </button>
            </div>
      </form>
    </div>
  );
};

export default AgregarProductos;