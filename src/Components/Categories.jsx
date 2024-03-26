import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconByName } from "../utilities/icons";

const Categories = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      onCategorySelect(null);
    } else {
      setSelectedCategory(category);
      onCategorySelect(category);
    }
  };
  return (
    <div className="w-full flex justify-between mb-6 flex-wrap">
      <CategoryButton
        label="Construccion"
        category="Construccion"
        iconName="hammer"
        onClick={() => handleCategoryClick("Construccion")}
        isActive={selectedCategory === "Construccion"}
      />
      <CategoryButton
        label="Herreria"
        category="Herreria"
        iconName="toolbox"
        onClick={() => handleCategoryClick("Herreria")}
        isActive={selectedCategory === "Herreria"}
      />
      <CategoryButton
        label="Exterior"
        category="Exterior"
        iconName="tree"
        onClick={() => handleCategoryClick("Exterior")}
        isActive={selectedCategory === "Exterior"}
      />
      <CategoryButton
        label="Electricidad"
        category="Electricidad"
        iconName="lightbulb"
        onClick={() => handleCategoryClick("Electricidad")}
        isActive={selectedCategory === "Electricidad"}
      />
      <CategoryButton
        label="Medicina"
        category="Medicina"
        iconName="houseMedical"
        onClick={() => handleCategoryClick("Medicina")}
        isActive={selectedCategory === "Medicina"}
      />
      <CategoryButton
        label="Escolar"
        category="Escolar"
        iconName="pencil"
        onClick={() => handleCategoryClick("Escolar")}
        isActive={selectedCategory === "Escolar"}
      />
    </div>
  );
};

const CategoryButton = ({ label, category, onClick, isActive, iconName }) => {
  return (
    <button
      className={`${
        isActive ? "font-bold !text-black" : ""
      } hover:underline focus:outline-none focus:shadow-outline-blue flex flex-col items-center gap-2 text-[#717171] px-2 py-1 rounded-lg`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={getIconByName(iconName)} size="sm" />
      {label}
    </button>
  );
};

export default Categories;
