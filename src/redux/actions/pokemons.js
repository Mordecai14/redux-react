export const START_GET_POKEMONS = 'START_GET_POKEMONS';
export const SUCCESS_GET_POKEMONS = 'SUCCESS_GET_POKEMONS';


export const startGetPokemons = payload => ({
    type: START_GET_POKEMONS,
    ...payload
});

const successGetPokemons = payload => ({
    type: SUCCESS_GET_POKEMONS,
    ...payload
});

 /* REDUX-THUNK
 export const fetchPokemons = payload => {
    return dispatch => {
        dispatch(startGetPokemons());

        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(result => dispatch(successGetPokemons(result)));
    };
};*/