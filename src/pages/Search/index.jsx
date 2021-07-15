import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import Btn from '../../components/Button';

class Search extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        inputValue: '',
                };
        }

        searchOnChange = (e) => {
                this.setState({
                        inputValue: e.target.value,
                });
        };

        render() {
                const { inputValue } = this.state;
                return (
                        <div>
                                <div>
                                        <SearchBar
                                                inputValue={inputValue}
                                                searchOnChange={this.searchOnChange}
                                                placeholder="Search for..."
                                        />
                                </div>
                                <div>
                                        <Btn btn="button is-info" name="submit" />
                                </div>
                        </div>
                );
        }
}

export default Search;
