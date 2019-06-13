import data from '../data.json'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteBookActionCreator, setLibraryAsyncActionCreator} from '../state/library'
import Library from "../Library/Library";

class Dashboard extends Component {
    componentDidMount() {
        if (this.props._library.length === 0) {
            this.props._setLibrary(data.library);
        }
    }

    render() {
        return (
            <Library
                library={this.props._library}
                deleteBook={this.props._deleteBook}
            />
        );
    }
}

const mapStateToProps = state => ({
    _library: state.library.library,
});

const mapDispatchToProps = dispatch => ({
    _setLibrary: (library) => dispatch(setLibraryAsyncActionCreator(library)),
    _deleteBook: (bookId) => dispatch(deleteBookActionCreator(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
