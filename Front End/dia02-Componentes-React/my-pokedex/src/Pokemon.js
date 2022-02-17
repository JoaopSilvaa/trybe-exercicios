import React from "react";
import pokemons from "./data";

class Pokemon extends React.Component{
    render() {
        return (
            pokemons.map((element) => (<div className='infos'> 
                <div>
                    <span>{element.name}</span><br />
                    <span>{element.type}</span><br />
                    <span>{element.averageWeight.value} {element.averageWeight.measurementUnit}</span> <br />
                </div>
                <div>
                    <img src={element.image} alt={`imagem do ${element.name}`}></img>
                </div>
            </div>) )
        )
    }
}


export default Pokemon