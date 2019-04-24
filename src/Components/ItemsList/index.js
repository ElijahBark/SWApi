import React, {Component} from 'react';
import Item from "./Item";
import style from "./index.module.css"

class ItemList extends Component {
    render() {
        const {itemsList, arrOfKeys, imageLink} = this.props;

        return (
            itemsList? (<ul className={style.list}>
                {itemsList.map((item, i) => {
                    return <Item key={i} item={item} imageLink={imageLink} keys={arrOfKeys}/>
                })}
            </ul>): null
        )
    }

}



export default ItemList;