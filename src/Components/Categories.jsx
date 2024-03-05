// import { useState, useEffect } from 'react';

const Categories = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //     fetch('http://localhost:8080/Herramientas')
  //     .then((res) => res.json())
  //     .then((categorias) => {
  //         const categoriasApiFake = categorias.map((categoria) => ({
  //             id: categoria.id,
  //             name: categoria.nombre,
  //             image: categoria.imagenes[0].url,
  //         }));
  //         setCategories(categoriasApiFake);
  //     });
  // }, []);

  return (
    <div className="p-3 rounded-3 mb-4">
      <div className="flex justify-between overflow-auto">
        <div className="my-2 my-lg-0 ">
          <div className="card h-100 w-[14em] border-0 rounded-3 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-world stroke-[1.5]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke="#2c3e50"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M3.6 9h16.8" />
              <path d="M3.6 15h16.8" />
              <path d="M11.5 3a17 17 0 0 0 0 18" />
              <path d="M12.5 3a17 17 0 0 1 0 18" />
            </svg>

            <div className="p-2 row-cols-auto align-self-center">
              <h5 className="p-2 mb-0 card-title text-center rounded-pill bg-warning text-dark">
                Todos
              </h5>
            </div>
          </div>
        </div>

        <div className="my-2 my-lg-0 ">
          <div className="card h-100 w-[14em] border-0 rounded-3 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-gavel stroke-[1.5]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke="#2c3e50"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
              <path d="M6 9l4 4" />
              <path d="M13 10l-4 -4" />
              <path d="M3 21h7" />
              <path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z" />
            </svg>

            <div className="p-2 row-cols-auto align-self-center">
              <h5 className="p-2 mb-0 card-title text-center  rounded-pill bg-warning text-dark">
                Construccion
              </h5>
            </div>
          </div>
        </div>

        <div className="my-2 my-lg-0 ">
          <div className="card h-100 w-[14em] bg-white  rounded-3 border-0 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plant stroke-[1.5]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke="#2c3e50"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" />
              <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
              <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
              <path d="M12 15l0 -6" />
            </svg>

            <div className="p-2 row-cols-auto align-self-center">
              <h5 className="p-2 mb-0 card-title text-center  rounded-pill bg-warning text-dark">
                Jardineria
              </h5>
            </div>
          </div>
        </div>

        <div className="my-2 my-lg-0 ">
          <div className="card h-100 w-[14em] bg-white rounded-3 border-0 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-home-heart stroke-[1.5]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke="#2c3e50"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304" />
              <path d="M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z" />
            </svg>

            <div className="p-2 row-cols-auto align-self-center">
              <h5 className="p-2 mb-0 card-title text-center  rounded-pill bg-warning text-dark">
                Hogar
              </h5>
            </div>
          </div>
        </div>

        <div className="my-2 my-lg-0 ">
          <div className="card h-100 w-[14em] rounded-3 justify-center items-center border-0 stroke-[1.5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke="#2c3e50"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 10m-3 0a3 7 0 1 0 6 0a3 7 0 1 0 -6 0" />
              <path d="M21 10c0 -3.866 -1.343 -7 -3 -7" />
              <path d="M6 3h12" />
              <path d="M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10" />
              <path d="M6 10h.01" />
            </svg>

            <div className="p-2 row-cols-auto align-self-center">
              <h5 className="p-2 mb-0 card-title text-center  rounded-pill bg-warning text-dark">
                Sanitario
              </h5>
            </div>
          </div>
        </div>

        <div className="my-2 my-lg-0 ">
          <div className="card h-100 w-[14em] rounded-3 justify-center items-center border-0 stroke-[1.5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-pencil stroke-[1.5]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke="#2c3e50"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
              <path d="M13.5 6.5l4 4" />
            </svg>

            <div className="p-2 row-cols-auto align-self-center">
              <h5 className="p-2 mb-0 card-title text-center  rounded-pill bg-warning text-dark">
                Escolares
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;