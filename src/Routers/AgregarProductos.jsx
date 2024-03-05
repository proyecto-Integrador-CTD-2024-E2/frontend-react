import { useState } from "react";
import { toast } from "sonner";

const AgregarProductos = () => {
  const [productData, setProductData] = useState({
    nombre: "",
    descripcion: "",
    stock: "",
    precio: "",
    categoria: "",
    disponibilidad: "",
    imageUrls: Array(1).fill({ url: "" }),
  });

  const isFieldEmpty = (fieldName) => !productData[fieldName];
  const isAllFieldsNonEmpty = () =>
    !(
      isFieldEmpty("nombre") ||
      isFieldEmpty("descripcion") ||
      isFieldEmpty("stock") ||
      isFieldEmpty("precio") ||
      isFieldEmpty("categoria")
    );

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
    setProductData((prevData) => ({
      ...prevData,
      imageUrls: [...prevData.imageUrls, ""],
    }));
  };

  const handleRemoveImageUrl = (index) => {
    const updatedUrls = [...productData.imageUrls];
    updatedUrls.splice(index, 1);
    setProductData((prevData) => ({ ...prevData, imageUrls: updatedUrls }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isAllFieldsNonEmpty()) {
      toast.error(
        "Hay campos vacios, rellena todos para poder agregar el producto."
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/Herramientas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoria: productData.categoria,
          stock: productData.stock,
          precio: productData.precio,
          disponibilidad: true,
          nombre: productData.nombre,
          marca: "Y",
          descripcion: productData.descripcion,
          imagenes: productData.imageUrls.filter((url) => url !== ""),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
      toast.success("Se ha agregado exitosamente el producto!");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(
        "Ha ocurrido un problema al crear el nuevo producto.",
        error.message
      );
    }
  };

  return (
    <div className="mx-auto p-8 w-full">
      {/* <h3>Agregar Producto</h3> */}
      <form onSubmit={handleFormSubmit} className="w-full">
        <div className="flex flex-row justify-around gap-8">
          <div className="bg-sky-900 rounded-xl p-8 w-1/2">
            <h5 className="text-white text-lg font-semibold mb-2">
              Informacion del Producto
            </h5>
            <div className="bg-sky-700 text-white rounded-xl p-4">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="p-2 rounded-lg my-2 w-full text-black"
                id="nombre"
                placeholder="Nombre del producto"
                value={productData.nombre}
                onChange={handleInputChange}
              />
              <label htmlFor="descripcion">Descripcion</label>
              <input
                type="text"
                className="p-2 rounded-lg my-2 w-full text-black"
                id="descripcion"
                placeholder="Descripcion del producto"
                value={productData.descripcion}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <h5 className="text-white text-lg font-semibold mb-2">
              Informacion Adicional
            </h5>
            <div className="bg-sky-700 text-white rounded-xl p-4">
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                className="p-2 rounded-lg my-2 w-full text-black"
                id="stock"
                placeholder="Cantidad de stock.."
                value={productData.stock}
                onChange={handleInputChange}
              />
              <label htmlFor="precio">Precio</label>
              <input
                type="number"
                className="p-2 rounded-lg my-2 w-full text-black"
                id="precio"
                placeholder="50$"
                value={productData.precio}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="bg-sky-900 rounded-xl p-8 w-1/2">
            <h5 className="text-white text-lg font-semibold mb-2">Categoria</h5>
            <div className="bg-sky-700 text-white rounded-xl p-4">
              <label htmlFor="categoria">Categoria del producto</label>
              <select
                className="p-2 rounded-lg my-2 w-full text-black"
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
            <h5 className="text-white text-lg font-semibold mb-2">Imagenes</h5>
            <div className="bg-sky-700 text-white rounded-xl p-4">
              {productData.imageUrls.map((imgObj, index) => (
                <div key={index} className="flex flex-row items-center gap-4">
                  <input
                    type="text"
                    className="p-2 rounded-lg my-2 w-full text-black"
                    placeholder={`URL de la imagen ${index + 1}`}
                    value={imgObj.url || ""}
                    onChange={(event) => handleImageUrlChange(index, event)}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImageUrl(index)}
                    className="border-2 border-gray-400 px-2 py-1 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                    </svg>
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddImageUrl}
                className="border-1 bg-sky-900 border-gray-400 p-2 text-sm rounded-md w-full mt-2"
              >
                + Agregar Nueva URL de Imagen
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="button"
            className="bg-red-500 text-white px-8 py-2 rounded-md"
          >
            Descartar
          </button>
          <button
            type="submit"
            className=" bg-sky-900 text-white px-8 py-2 rounded-md"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgregarProductos;
