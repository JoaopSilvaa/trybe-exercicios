import { useEffect, useState } from 'react';

const usePokemonSprite = () => {
    const [pokemonURL, setURL] = useState('');
    const [pokemonImage, setImage] = useState('');
    useEffect(()=>{
        const getImage = async () => {
            const { sprites } = await fetch(pokemonURL).then(response => response.json());
            const { front_default: sprite } = sprites;
            setImage(sprite);
        } 
          getImage();
        }, [pokemonURL])

    return [pokemonImage,setURL];
}

export default usePokemonSprite;
