import React from "react";

const CategoryItem = ({category}) => {
  return (
    <div>
      <div className="border border-gray-500   text-center rounded-lg px-4 py-2">
        {category.name}
      </div>
    </div>
  );
};

export default CategoryItem;
