import React from 'react';
import Pokemon from './pokemon.png';


const Image = (props) => {

    const toggleActive = () => {
        props.setAnswer('X');
        props.setActive(!props.active);
      };


    return(<div className='imageContainer' >
        <img className='image' src={Pokemon} onClick={toggleActive}/>
    </div>)
}

export default Image;