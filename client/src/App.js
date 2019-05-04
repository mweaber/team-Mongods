import React, { Component } from "react";
import "./App.css";
// import Background from "./pencilbkgrnd.jpg";
// import ComicCard from "./components/ComicCard";
// import Card from "./components/Card";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Temp from "./placeholder.json";
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom";
import Saved from "./components/Saved";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";
import GoogleLogin from 'react-google-login';

const protected1 = () => (
  <h3>This is your homepage</h3>
)
const protected2 = () => (
  <h2>You are not logged in</h2>
)

const PrivateRoute = ({component: Component, user,...rest}) => {
  return (
    <Route
    {...rest}
    render={(props) => user
    ? <Component {...props} {...rest} user={user} />
    : <Redirect to={{pathname: "/home", state: {from: props.location}}} />}
    />
  )
}


class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    const id = localStorage.getItem("id");
    this.state = { 
      loggedIn: id ? true : false,
      // cards: Temp
    };
  }

  componentDidMount() {
    //// all the necessary everything right here
    
  }
  responseGoogle = (res) => {
    console.log(res)
    localStorage.setItem('id', res.googleID);
    this.setState({
      loggedIn: true
    })
  }

  logout = () => {
    localStorage.clear();
    this.setState({
      loggedIn: false
    })
  }

  render() {
    return (
      <Router>
        <Header/>

          {this.state.loggedIn
          ? <button style={{float: "right"}} onClick={this.logout}>Logout</button>
          : <GoogleLogin 
          clientId="76521146114-75a1tkldbt9tr9thhf8a604ut9fvpoie.apps.googleusercontent.com"
          buttonText="Login with Google"
          style={{float: "right"}}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle} />
        }

          <Route exact path="/" component={Login} />
          <PrivateRoute user={this.state.loggedIn} exact path="/home" component={Home} />
          <PrivateRoute user={this.state.loggedIn} exact path="/saved" component={Saved} />
          <PrivateRoute user={this.state.loggedIn} exact path="/shop" component={Shop} />
          {/* <PrivateRoute user={this.state.loggedIn} exact path="/" component={Home} /> */}
          {/* <PrivateRoute user={this.state.loggedIn} exact path="/login" component={Login} /> */}

          {/* <Switch>
            <Route exact path= "/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/shop" component={Shop} />
            <Route component = {ErrorPage} />
          </Switch> */}
        

      </Router>
    );
  }
}

export default App;      


