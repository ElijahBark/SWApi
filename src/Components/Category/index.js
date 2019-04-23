import React from "react";
import {withRouter} from 'react-router-dom';
import style from './index.module.css'

const Category = ({title, history}) => {
    return <div className={style["category-item"]} onClick={() => history.push(title)}>{title}</div>
};

export default withRouter(Category)