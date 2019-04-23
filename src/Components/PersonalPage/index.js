import React from 'react'
import {connect} from 'react-redux' ;
import style from "./index.module.css";
const PersonalPage = ({match, store, arrOfKeys, kind, imageLink, }) => {


    let item, num;
    if ( store.currentPage.data.url) {
        item = store.currentPage.data;
        const dividedLink = item.url.split('/');
        num = dividedLink[dividedLink.length - 2];
    }


    return item ? <div className={style.item}>
        <img className={style.image} src={`https://starwars-visualguide.com/assets/img/${imageLink}/${num}.jpg`} alt=""/>
        <div>
            {arrOfKeys.map((key, j) => {
                return <p className={style.text} key={j}>{`${key}: ${item[key]}`}</p>
            })}
        </div></div> : null;

};

const mapStateToProps = (store) => {
    return {
        store: store,
    }
};



export default connect(mapStateToProps)(PersonalPage)


// let id = match.params.id;
// let page = Math.floor(id/10);
// let num = id%10;
//
// let items = store[kind];
// let item = items.list[page]? items.list[page][num-1]: null;