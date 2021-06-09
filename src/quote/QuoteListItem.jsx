import React, {Component} from 'react';
import PropTypes from "prop-types";
import QuoteListItemClass from './js/QuoteListItemClass'
import './css/QuoteListItem.css'

class QuoteListItem extends Component {
    state = {};

    setHighlight = () => {
        const idx = this.props.quote.data.indexOf(this.props.searchString);
        if (idx !== -1 ) {
            return (<>
                <span>{this.props.quote.data.slice(0, idx)}</span>
                <b>{this.props.quote.data.slice(idx, idx + this.props.searchString.length)}</b>
                <span>{this.props.quote.data.slice(idx + this.props.searchString.length, this.props.quote.data.length)}</span>
            </>);
        } else {
            return <span>{this.props.quote.data}</span>;
        }
    };

    render() {
        return (
            <li className="quote-list-item">
                {this.props.quote.name} - {this.setHighlight()}
            </li>
        );
    }
}

QuoteListItem.propTypes = {
    quote: PropTypes.instanceOf(QuoteListItemClass).isRequired,
    searchString: PropTypes.string
};

export default QuoteListItem;
