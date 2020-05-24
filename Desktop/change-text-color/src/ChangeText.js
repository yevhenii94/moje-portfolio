import React, {Component} from 'react';

import './ChangeText.css';

class ChangeText extends Component {

    constructor() {
        super();

        this.state = {
            classColor: 'color-red'
        }
    }

    changeColor = (color) =>{
        console.log(color);
        this.setState({classColor: color})
    }

    render() {
        return (
            <div className="change-text">
                <h1 className={this.state.classColor}>Tekst zmieniający kolor</h1>

                <button onClick={()=>this.changeColor('color-red')}>Red</button>
                <button onClick={()=>this.changeColor('color-green')}>Green</button>
                <button onClick={()=>this.changeColor('color-blue')}>Blue</button>
            </div>
        )
    }
}

export default ChangeText;