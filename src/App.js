import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configStore from "./redux/configureStore";
import { MoonLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from "./components/ErrorBoundary";
const ParentBody = React.lazy(() => import("./components/ParentBody"));

function App() {
  //wrap store and persistor around app.js

  return (
    <>
      <Provider store={configStore.store}>
        <PersistGate
          persistor={configStore.persistor}
        >
          <ErrorBoundary>
            <Suspense fallback={<MoonLoader />}>
              <ToastContainer style={{ fontSize: "16px" }} />

              <ParentBody />
            </Suspense>
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
