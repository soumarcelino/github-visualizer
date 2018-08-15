import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./reducers"
import App from './App';
import Loading from './components/Loading';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
let persistor = persistStore(store)

ReactDOM.render( <Provider store={store}>
                    <PersistGate loading={<Loading/>} persistor={persistor}>
                        <App />
                    </PersistGate>
                </Provider>, document.getElementById('root'));
