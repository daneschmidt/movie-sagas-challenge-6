const getMoviesReducer = (state = [], action) => {

    switch (action.type) {
        case 'SET_HOMEPAGE':
            return action.payload;
        default:
            return state;
    }
}
export default getMoviesReducer;