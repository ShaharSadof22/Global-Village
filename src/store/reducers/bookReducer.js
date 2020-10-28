const initialState = {
    books: []
}

export function bookReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                books: action.books
            }
        case 'ADD_BOOK_LIST':
            return {
                ...state,
                books: [...state.books, action.book]
            }
        case 'REMOVE_BOOK':
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.bookId)
            }

        default:
            return state
    }
}