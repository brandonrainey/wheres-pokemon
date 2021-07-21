import { React, useEffect } from 'react';


const Clicker = (props) => {
    
   
    

    const toggleActive = () => {
        
        props.setActive(!props.active);
        
      };
    
        

        const checkBox = () => {
            props.setAnswer('Q');
            props.setActive(!props.active);
            
        }

        const checkBox2 = () => {
            props.setAnswer('W');
            props.setActive(!props.active);
            
        }

        const checkBox3 = () => {
            props.setAnswer('E');
            props.setActive(!props.active);
            
        }

const check = () => props.setChoice('Q');
const check2 = () => props.setChoice('W');
const check3 = () => props.setChoice('E');

const checkAnswer = () => {if (props.choice  === props.answer) {
                    alert('you win')}}
                  

        useEffect(() => {

            checkAnswer();
  
          }, [props.choice])

    return(
        <div>
            <div className='pokemon'  onClick={() => checkBox()}></div>
            <div className='pokemon2' onClick={() => checkBox2()}></div>
            <div className='pokemon3' onClick={() => checkBox3()}></div>

            <div className={props.active ? 'clicked' : 'notClicked'} style={ {position: 'absolute', left: `${props.x - 10}px`, top: `${props.y - 10}px`} } onClick={() => toggleActive()} > 
                <br></br>
                
                <ul className='list' >
                    <li className='li' onClick={check}>Q</li>
                    <li className='li' onClick={check2}>W</li>
                    <li className='li' onClick={check3}>E</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Clicker;
