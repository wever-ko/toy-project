import React, {Component} from 'react';

class Search extends Component {
    state = {
        data: ''
    };

    handleChange = (e) => {
        this.props.getSearchData(e.target.value);
        this.setState({
            data: e.target.value,
        })
    };

    onClick = () => {

    };

    render() {
        return (
            <div>
                <input className="quote-search" onChange={this.handleChange}/>
                <input type="button" value="검색" onClick={this.onClick}/>
            </div>
        );
    }
}

export default Search;
