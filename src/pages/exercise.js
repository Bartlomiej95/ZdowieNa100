import React from 'react';
import CategoryPage from '../layouts/CategoryPage';

const Exercise = (props) => {
    return(
        <CategoryPage category="Ruch" path={props.location.pathname}> </CategoryPage>
    )
}

export default Exercise;