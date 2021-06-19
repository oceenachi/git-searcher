import {applyMiddleware, createStore, compose } from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const PersistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (initialState) => {
    return createStore(PersistedReducer,initialState,composeEnhancers(applyMiddleware()) )
}

export default (() => {
  
    let store = configureStore();

    let persistor = persistStore(store);

    return {store, persistor}
})()