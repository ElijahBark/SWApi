import React, {Component} from 'react';
import Item from "./Item";
import style from "./index.module.css"
import {withRouter} from "react-router-dom";


class ItemList extends Component {
    render() {
        const {itemsList, arrOfKeys, imageLink,history, location, num} = this.props;

        return (
            itemsList? (<ul className={style.list}>
                {itemsList.map((item, i) => {
                    return <Item key={i} item={item} imageLink={imageLink} keys={arrOfKeys}/>
                })}
                <button className={style.button} onClick={()=>history.push(`${num}`)}>load next</button>
            </ul>): null
        )
    }

}



export default withRouter(ItemList);