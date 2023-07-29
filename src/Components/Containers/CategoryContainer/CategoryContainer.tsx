import React from "react";
import styles from "./CategoryContainer.module.css";

const CategoryContainer: React.FC = () => {
  return <input type="text" className={styles.categoryList} />;
};

export default CategoryContainer;
