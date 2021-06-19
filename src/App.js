import { Provider } from "react-redux";
import ParentBody from "./components/ParentBody";
import { PersistGate } from "redux-persist/integration/react";
import configStore from "./stateConfig.js/configureStore";
import persistor from "./stateConfig.js/configureStore";
import {ScaleLoader} from "react-spinners"


function App() {

  //create store and persistor
  return (
    <>
      <Provider store={configStore.store}>
        <PersistGate loading={<ScaleLoader/>} persistor={configStore.persistor}>
          <ParentBody />

        </PersistGate>


      </Provider>
    </>
  );
}

export default App;
