// import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./Screens/Home";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./Redux/Reducer/root";
import MovieDetailScreen from "./Screens/Detail";
import SignupScreen from "./Screens/Signup";
import SigninScreen from "./Screens/Signin";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Layout/header";
function App() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return (
    <>
      <Router>
        <Header />
        <Provider store={store}>
          <Switch>
            {/* : ở đây là để truyền id phim vào */}
            <Route path="/detail/:movieId" component={MovieDetailScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/signup" component={SignupScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </Provider>
      </Router>
    </>
  );
}

export default App;
