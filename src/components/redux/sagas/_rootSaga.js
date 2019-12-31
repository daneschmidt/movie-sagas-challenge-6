import { all } from 'redux-saga/effects';
import { takeEvery} from 'redux-saga/effects';


function* rootSaga() {
    yield takeEvery('GET_DETAILS', getDetailsSaga);
    console.log(`I'm in the watcher saga`)
    yield all(
        [
            getMoviesSaga(),
           
        ]
    );
}



export default rootSaga;