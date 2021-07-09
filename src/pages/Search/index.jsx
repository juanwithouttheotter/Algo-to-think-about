import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from '../../components/SearchBar';
import Btn from '../../components/Button';

class Search extends Component {
    state = {
        inputValue: ''
    }

    searchOnChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }
    render() {
    return(
        <Container fluid>
            <Row>
                <SearchBar></SearchBar>
            </Row>
            <Row>
                <Btn btn="Primary"></Btn>

            </Row>
        </Container>
    )
    }
}

export default Search;