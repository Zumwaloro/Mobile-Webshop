import React from 'react';
import CategoryContainer from '../components/category-container';

function CategoriesScreen(props) {

  const navigate = (screen) => {
    props.navigation.navigate(screen);
  }

  return (
      <CategoryContainer navigate={navigate}/>
  );
};

export default CategoriesScreen;