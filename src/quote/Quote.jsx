import React, { Component } from 'react';
import QuoteSearch from './Search';
import QuoteData from './Data';
import QuoteList from './QuoteList';

class Quote extends Component {
    state = {
        searchData: ''
    };

    getSearchData = (data) =>{
        this.setState({
            searchData: data
        })
    };

    render() {
        return (
            <div className="quote">
                <QuoteSearch getSearchData={this.getSearchData}/>
                <QuoteData quote={"I'm happy!"}/>
                <QuoteList searchString={this.state.searchData}/>
            </div>
        );
    }
}

export default Quote;
