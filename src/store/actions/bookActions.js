import { bookService } from '../../services/bookService'

export function loadBooks() {
    return async dispatch => {
        const books = await bookService.query()
        dispatch({ type: 'SET_BOOKS', books })
    }
}

export function addBook(book) {
    return dispatch => {
        dispatch({ type: 'ADD_BOOK_LIST', book })
    }
}
export function removeBook(bookId) {
    return dispatch => {
        dispatch({ type: 'REMOVE_BOOK', bookId })
    }
}