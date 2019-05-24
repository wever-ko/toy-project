import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Data extends Component {
    state = {

    };

    render() {
        return (
            <div className="quote-data">
                {this.props.quote}
            </div>
        );
    }
}

Data.propTypes = {
    quote: PropTypes.string.isRequired
};

Data.defaultProps = {
    quote: 'React is Fun!'
};

export default Data;
