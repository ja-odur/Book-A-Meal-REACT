import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, reduxImmutableStateInvariant())

)

  );
}
