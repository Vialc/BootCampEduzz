import React, { useState } from 'react';
import styled from 'styled-components';
import { InputGroup, FormControl, Button, Form, Col } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getBooks } from './BooksService';

const SearchHeader = styled.div`
    margin-top: 4px;
`;

function SearchBar(props) {
    const [search, setSearch] = useState('');
    function handleOnSubmit(event) {
        event.preventDefault();
        const books = getBooks();
        console.log(books)
        const results = books.filter(book => book.title.toLowerCase().indexOf(search) !== -1);
        props.setBooks(results);
    }

    function handleSearchChange(event) {
        setSearch(event.target.value.toLowerCase());
    }

    return (
        <SearchHeader>
            <Form onSubmit={handleOnSubmit}>
                <Col className="col-xl-3">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search your books"
                            aria-label="Search your books"
                            onChange={handleSearchChange}
                        />
                    </InputGroup>
                    <Button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </Col>
            </Form>
        </SearchHeader>
    );
}

export default SearchBar;