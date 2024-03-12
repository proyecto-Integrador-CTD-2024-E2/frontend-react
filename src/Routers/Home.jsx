import Busqueda from "../Components/Busqueda";
import Products from "../Components/Products";
import Categories from "../Components/Categories";
import { useState } from 'react';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="!pt-8 relative">
        <Busqueda />
      </div>
      <div className="p-2 p-md-3 p-lg-4 px-8">
        <Categories onCategorySelect={handleCategorySelect} />
        <Products selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Home;
