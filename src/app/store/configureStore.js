import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export const configureStore = (preloadedState) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    
    const storeEnhancer = [middlewareEnhancer];

    const composedEnhancer = composeWithDevTools(...storeEnhancer);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    )

    //enable hot reloading with redux in dev

    if(process.env.NODE_ENV !== 'production') {
        if(module.hot) {
            module.hot.accept('../reducers/rootReducer', () => {
                const newRootReducer = require('../reducers/rootReducer').default;
                store.replaceReducer(newRootReducer);
            });
        }
    }

    return store;
}