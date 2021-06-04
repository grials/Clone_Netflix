import React from "react";
import RowList from "./RowList";
import "./style/styleCategoriesBrowse.scss";

function CategoriesBrowse({
  cardListCategories,
  textButton_1,
  textButton_2,
  categories,
}) {
  // console.log(cardListCategories, categories);
  return (
    <div className="categoriesBrowse">
      <div className="continerRowList">
        {cardListCategories.map((category, index) => (
          <RowList
            category={category}
            key={index}
            ulrCategory={categories[index].getCategory}
            textButton_1={textButton_1}
            textButton_2={textButton_2}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesBrowse;
