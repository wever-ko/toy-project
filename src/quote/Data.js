import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Data extends Component {
    state = {

    };

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="data">
                {this.props.quote}
            </div>
        );
    }
}

Data.propTypes = {
    quote: PropTypes.string
};

Data.defaultProps = {
    quote: 'React is Fun!'
};

export default Data;
