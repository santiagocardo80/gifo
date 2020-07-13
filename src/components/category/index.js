import React from "react"

import {
  CategoryTitle,
  CategoryListItem,
  CategoryLink,
  CategoryList,
} from "./styles";

const Category = ({ name, options = [] }) => (
  <section>
    <CategoryTitle>{name}</CategoryTitle>
    <CategoryList>
      {options.map((singleOption, index) => (
        <CategoryListItem
          key={singleOption}
          index={index}
          type='primary'
        >
          <CategoryLink to={`/search/${singleOption}/g`}>
            {singleOption}
          </CategoryLink>
        </CategoryListItem>
      ))}
    </CategoryList>
  </section>
)

export default Category
