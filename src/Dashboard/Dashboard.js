import data from '../data.json'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setLibraryAsyncActionCreator} from '../state/library'
import Library from "../Library/Library";

class Dashboard extends Component {
    componentDidMount() {
        this.props._setLibrary(data.library);
    }

    render() {
        return (
            <div>
               <Library
                library={this.props._library}
               />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    _library: state.library.library,
});

const mapDispatchToProps = dispatch => ({
    _setLibrary: (library) => dispatch(setLibraryAsyncActionCreator(library))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
