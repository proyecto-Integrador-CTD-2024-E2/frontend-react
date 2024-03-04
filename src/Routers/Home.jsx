import Busqueda from "../Components/Busqueda";
import Products from "../Components/Products";
import Categories from "../Components/Categories";

const Home = () => {
  return (
    <div>
      <div className="!pt-8 relative">
        <Busqueda />
      </div>
      <div className="p-2 p-md-3 p-lg-4 px-8">
        <Categories />
        <Products />
      </div>
    </div>
  );
};

export default Home;
