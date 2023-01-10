import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients, cuisineType, dishType, instructions, url}) => {
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <h5><em>{cuisineType} &nbsp; | &nbsp; {dishType}</em></h5>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            {/* <p>{calories}</p> */}
            <img className={style.image} src={image} alt=""/>
            <a href={url} target="_blank" rel="noopener"><button className={style.button}>View recipe</button></a>
            <p>{instructions}</p>
        </div>
    );
};

export default Recipe;