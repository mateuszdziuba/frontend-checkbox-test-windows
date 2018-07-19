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
                        type="checkbox"
                        checked = {this.state.isChecked}
                        onChange={this.handleInputChange}
                    />
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
