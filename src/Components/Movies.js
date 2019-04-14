import React from 'react';

const Movies = ({moviesList}) => (
    <ul>
        {moviesList.map((item,i)=>{
           return <li key={i}>{item.title}</li>
        })}
    </ul>
);

export default Movies;