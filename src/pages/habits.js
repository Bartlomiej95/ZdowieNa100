import React from 'react';
import CategoryPage from '../layouts/CategoryPage';

const Habits = (props) => {
    return(
        <CategoryPage category="Nawyki" path={props.location.pathname}> </CategoryPage>
    )
}

export default Habits;