import React from "react";
import style from "../index.module.css";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux' ;
import {personalPageActionCreator} from "../../../actions/personalPageAction";


const Item = ({item, keys, imageLink, history, location, setCurrentPage}) => {
    const category = location.pathname.split('/')[1];
    const dividedLink = item.url.split('/');
    const num = dividedLink[dividedLink.length - 2];
    return <li className={style.item} onClick={() => {
        setCurrentPage(item);
        history.push(`/${category}/item/${num}`);
    }}>
        <img className={style.image} src={`https://starwars-visualguide.com/assets/img/${imageLink}/${num}.jpg`}
             alt=""/>
        <div>
            {keys.map((key, j) => {
                return <p className={style.text} key={j}>{`${key}: ${item[key]}`}</p>
            })}
        </div>
    </li>
};


const mapStateToProps = (store) => {
    return {
        store: store,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: (data) => dispatch(personalPageActionCreator(data))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Item));


