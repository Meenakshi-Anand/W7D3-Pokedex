import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

const pokemonReducer = (state = {},action) =>{
  // console.log(action);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
     return action.pokemon;
    case RECEIVE_POKEMON:
     return action.pokemon;
     default:
     return state;
  }

};

export default pokemonReducer;
