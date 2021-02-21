// import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./Screens/Home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./Redux/Reducer/root";

function App() {
  const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </>
  );
}

export default App;