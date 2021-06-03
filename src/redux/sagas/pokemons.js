import { put, call, takeLatest } from 'redux-saga/effects';
import { START_GET_POKEMONS, SUCCESS_GET_POKEMONS } from '../actions/pokemons';
import apiCall from '../utilies';

function* getPokemons({ payload }) {
    try{
        console.log("La funcion escucha");
        const results = yield call(apiCall, 'get', 'https://pokeapi.co/api/v2/pokemon');
        console.log(results);
        yield put({type: SUCCESS_GET_POKEMONS, results});
    } catch (err) {

    }
}

//WATCHERS
export default function* pokemons() {
    yield takeLatest(START_GET_POKEMONS, getPokemons);
}