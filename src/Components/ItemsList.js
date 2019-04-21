import React from 'react';


const ItemsList = ({itemsList, arrOfKeys}) => {

    // let addDefaultSrc = (ev) => {
    //     ev.target.src = 'https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg'
    // }

    return (

        itemsList? (<ul>
                {itemsList.map((item, i) => {
                    return <li key={i}>

                        {arrOfKeys.map((key, j) => {
                            return <p key={j}>{item[key]}</p>
                        })}
                    </li>
                })}
            </ul>): null
    )
};



export default ItemsList;