import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxSaga, { runSaga } from 'redux-saga';

import rootSaga from '../sagas'

function reducers(){
    return {
        testing: ''
    };
}

const sagaMiddleware = reduxSaga();

export default () => {
    return {
        // ...createStore(reducers, applyMiddleware(reduxSaga))
        ...createStore(reducers, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};

