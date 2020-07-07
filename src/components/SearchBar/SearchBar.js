import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }

    handleTermChange(event) {
        const newTerm = event.target.value;
        this.setState({ term: newTerm });
    }

    handleLocationChange(event) {
        const newLocation = event.target.value;
        this.setState({ location: newLocation });
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li 
                key={sortByOptionValue} 
                className={this.getSortByClass(sortByOptionValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                    {sortByOption}
                </li>);
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;