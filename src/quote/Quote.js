import React, { Component } from 'react';
import QuoteSearch from 'search';
import QuoteData from 'data';

class Quote extends Component {
    state = {

    };

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="quote">
                <QuoteSearch/>
                <QuoteData/>
            </div>
        );
    }
}

export default Quote;
