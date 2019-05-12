import React, {Component} from 'react';
import PropTypes from "prop-types";
import QuoteListItemClass from "./js/QuoteListItemClass";
import QuoteListItem from "./QuoteListItem";

class QuoteList extends Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quote-list">
                <ul>
                    {this.props.quoteList.map((value, key) => {
                        return <QuoteListItem quote={value} key={`quote-list-${key}`}/>
                    })}
                </ul>
            </div>
        );
    }
}

QuoteListItem.propTypes = {
    quoteList: PropTypes.arrayOf(PropTypes.instanceOf(QuoteListItemClass)).isRequired
};

export default QuoteList;
