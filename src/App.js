// import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./Screens/Home";
import MovieDetailScreen from "./Screens/Detail";
import SignupScreen from "./Screens/Signup";
import SigninScreen from "./Screens/Signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Layout/header";
import { Component } from "react";
import { connect } from "react-redux";
import { actionCreater } from "./Redux/Action";
import { FETCH_CREDENTIALS } from "./Redux/Action/type";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            {/* : ở đây là để truyền id phim vào */}
            <Route path="/detail/:movieId" component={MovieDetailScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/signup" component={SignupScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </Router>
      </>
    );
  }
  _getLocalStorageData = () => {
    const credentials = localStorage.getItem("credentials");
    if (credentials) {
      this.props.dispatch(
        actionCreater(FETCH_CREDENTIALS, JSON.parse(credentials))
      );
    }
  };
  componentDidMount() {
    this._getLocalStorageData();
  }
}

export default connect()(App);
