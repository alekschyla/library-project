import React, {Component} from 'react';
import {editBookActionCreator} from "../state/library";
import {connect} from "react-redux";

class EditBook extends Component {
    state = {
        newTitle: this.props.location.state.book.title,
        newAuthor: this.props.location.state.book.author
    };

    onTitleChange = (event) => {
        this.setState({newTitle: event.target.value})
    };

    onAuthorChange = (event) => {
        this.setState({newAuthor: event.target.value})
    };

    save = () => {
        const bookId = this.props.location.state.book.id;
        const bookTitle = this.state.newTitle;
        const bookAuthor = this.state.newAuthor;

        this.props._editBook(bookId, bookTitle, bookAuthor);

        this.props.history.push('/')
    };

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div className={"edit-book--container"}>
                <div>
                    <label>
                        Title:
                        <input
                            onChange={this.onTitleChange}
                            value={this.state.newTitle}
                        />
                    </label>
                    <label>
                        Author:
                        <input
                            onChange={this.onAuthorChange}
                            value={this.state.newAuthor}
                        />
                    </label>
                </div>
                <div>
                    <button
                        onClick={this.save}
                    >
                        save
                    </button>
                    <button
                        onClick={this.goBack}
                    >
                        cancel
                    </button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    _editBook: (bookId, newTitle, newAuthor) => dispatch(editBookActionCreator(bookId, newTitle, newAuthor))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);