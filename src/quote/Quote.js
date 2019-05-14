import React, { Component } from 'react';
import QuoteSearch from './Search';
import QuoteData from './Data';
import QuoteList from './QuoteList';

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
                <QuoteData quote={}/>
                <QuoteList/>
            </div>
        );
    }
}

export default Quote;
