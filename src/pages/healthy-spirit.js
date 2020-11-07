import React from 'react';
import CategoryPage from '../layouts/CategoryPage';

const HealthySpirit = (props) => {
    return(
        <CategoryPage category="Zdrowy duch" path={props.location.pathname}> </CategoryPage>
    )
}

export default HealthySpirit;