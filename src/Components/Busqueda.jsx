const Busqueda = () => {
  return (
    <form className="w-4/5 md:w-1/2 mx-auto mb-6">
      <label htmlFor="default-search" className="sr-only">
        Buscar
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full px-6 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50  focus:border-colorPrimario"
          placeholder="Que estas buscando?"
          autoComplete="off"
          required
        />
        <button
          type="submit"
          className="text-colorClaro bg-colorPrimario absolute right-2 bottom-2 hover:bg-colorPrimarioHover focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-6 py-1.5 transition-all"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};
export default Busqueda;
