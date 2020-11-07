import React from 'react';
import CategoryPage from '../layouts/CategoryPage';

const Nutrition = (props) => {
    console.log(props)
    return(
        
        <CategoryPage category="Odżywianie" path={props.location.pathname}> </CategoryPage>
    )
}

export default Nutrition;