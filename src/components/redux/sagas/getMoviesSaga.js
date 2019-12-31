mport axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getMovies() {
    console.log(`In getHomePage`);
    try {
        const response = yield axios({
            method: 'GET',
            url: '/getMovies'
        });
       
        yield put({
            type: 'SET_HOMEPAGE',
            payload: response.data
        });
    } catch(err) {
        console.log('error fetching homepage movies', err);
    }
}
function* getHMovies() {
    yield takeLatest('GET_HOMEPAGE', getHomePage);
}

export default getMoviesSaga;