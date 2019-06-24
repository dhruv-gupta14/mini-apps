import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{
    //static contextType = LanguageContext;

    renderButton(color){
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language}) => language === 'english' ? 'Submit' : 'Voorleggen' }
                </LanguageContext.Consumer>
            </button>
        );
    }

    render(){
        //console.log(this.context);
        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen'; // agar this.context ki value jo bhi hai uslo text ke equal krna
       return(
           <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
       ); 
    }
}

export default Button;    