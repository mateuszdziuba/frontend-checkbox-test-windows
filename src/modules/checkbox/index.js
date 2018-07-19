/* eslint-disable */
import React from 'react';

class Checkbox extends React.Component {
    constructor() {
        super();
        this.state = {
            isChecked: false
        }
    }

    handleInputChange = () => {
        this.setState(prevState => ({
            isChecked: !prevState.isChecked
        }))
    }
    render() {
        const { isChecked } = this.state
        return(
            <div className="checkbox">
                <div className="title">
                    Checkbox
                </div>
                <div className="content">
                    <input 
                        id="switch"
                        type="checkbox"
                        checked = {isChecked}
                        onChange={this.handleInputChange}
                    />
                    <label for="switch"></label>
                </div>
                {!isChecked ? '' :
                <div className="hidden">
                    hidden content
                </div>
                }
            </div>
        );
    }
}

export default Checkbox;
