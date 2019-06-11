import data from '../data.json'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setLibraryAsyncActionCreator,
    deleteBookActionCreator} from '../state/library'
import Library from "../Library/Library";

class Dashboard extends Component {
    componentDidMount() {
        this.props._setLibrary(data.library);
    }

    editBook = (book) => {
        window.location.href = `/book/${book.id}`
    };

    render() {
        return (
            <div>
               <Library
                library={this.props._library}
                deleteBook={this.props._deleteBook}
                editBook={this.editBook}
               />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    _library: state.library.library,
});

const mapDispatchToProps = dispatch => ({
    _setLibrary: (library) => dispatch(setLibraryAsyncActionCreator(library)),
    _deleteBook: (bookId) => dispatch(deleteBookActionCreator(bookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
