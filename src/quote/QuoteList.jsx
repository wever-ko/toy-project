import React, {Component} from 'react';
import PropTypes from "prop-types";
import QuoteListItemClass from "./js/QuoteListItemClass";
import QuoteListItem from "./QuoteListItem";

class QuoteList extends Component {
    state = {};

    render() {
        return (
            <div className="quote-list">
                <ul>
                    {this.props.quoteList.map((value, key) => {
                        return <QuoteListItem quote={value} searchString={this.props.searchString} key={`quote-list-${key}`}/>
                    })}
                </ul>
            </div>
        );
    }
}

QuoteList.propTypes = {
    quoteList: PropTypes.arrayOf(PropTypes.instanceOf(QuoteListItemClass)).isRequired,
    searchString: PropTypes.string
};

QuoteList.defaultProps = {
    quoteList: [
        new QuoteListItemClass('Helen Keller','The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'),
        new QuoteListItemClass('Oscar Wilde','Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.'),
        new QuoteListItemClass('Aristotle','It is during our darkest moments that we must focus to see the light.'),
        new QuoteListItemClass('Maya Angelou','Try to be a rainbow in someone\'s cloud.'),
        new QuoteListItemClass('Joseph Campbell\n','Find a place inside where there\'s joy, and the joy will burn out the pain.'),
        new QuoteListItemClass('Audrey Hepburn','Nothing is impossible, the word itself says \'I\'m possible\'!'),
        new QuoteListItemClass('Robert Louis Stevenson','Don\'t judge each day by the harvest you reap but by the seeds that you plant.'),
        new QuoteListItemClass('Buddha','Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.\n'),
        new QuoteListItemClass('Edmund Burke','The only thing necessary for the triumph of evil is for good men to do nothing.'),
        new QuoteListItemClass('Lucius Annaeus Seneca','One of the most beautiful qualities of true friendship is to understand and to be understood.'),
    ]
};

export default QuoteList;
