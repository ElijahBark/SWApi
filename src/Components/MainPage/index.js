import React from "react";
import Category from "../Category";
import style from './index.module.css';

const MainPage = () =>
    <div className={style.main}>
        <Category title={"persons"}/>
        <Category title={"movies"}/>
        <Category title={"vehicles"}/>
    </div>

;

export default MainPage;