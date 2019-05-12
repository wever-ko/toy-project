import React, { Component } from 'react';
import PropTypes from "prop-types";
import QuoteListItemClass from './js/QuoteListItemClass'

class QuoteListItem extends Component {
    state = {

    };

    constructor(props){
        super(props);
    }

    render() {
        return (
            <li className="quote-list-item">
                {this.props.quote.name} - {this.props.quote.data}
            </li>
        );
    }
}

QuoteListItem.propTypes = {
    quote: PropTypes.instanceOf(QuoteListItemClass).isRequired
};

export default QuoteListItem;
