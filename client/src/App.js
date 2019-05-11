import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Saved from "./components/Saved";
import Shop from "./components/Shop";
import Sidenav from "./components/sidenav/SideNav";
import Characters from "./components/Characters"
import Axios from "axios";
import Background2 from "./images/unsplashBack1-4k.jpg"

// const protected1 = () => (
//   <h3>This is your homepage</h3>
// )
// const protected2 = () => (
//   <h2>You are not logged in</h2>
// )

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => user
        ? <Component {...props} {...rest} user={user} />
        : <Redirect to={{ pathname: "/home", state: { from: props.location } }} />}
    />
  )
}

const sectionStyle = {
  backgroundImage: `url(${Background2})`,
  backgroundSize: "cover"
}

const containerStyle = {
  paddingLeft: "170px",

}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: "",
      userID: "",
      photo: null
    };


  }

  componentDidMount() {
    Axios.get("/api/auth/getuser").then(res => {
      console.log(res.data)
      this.setState({
        loggedIn: true,
        email: res.data.user.email,
        userID: res.data.user.name,
        photo: res.data.user.img
      })
    })
      .catch(err => console.log(err))
    ///// add path to call and determine whether or not i am logged in
  }


  render() {
    return (

      <Router>
        <div>
          <Sidenav userID={this.state.userID} email={this.state.email} loggedIn={this.state.loggedIn} photo={this.state.photo} />
          <div style={sectionStyle}>
            <div style={containerStyle}>
            </div>

          </div>
          <Switch>
            {/* <Route user={this.state.loggedIn} exact path="/home" component={Home} /> */}
            <Route user={this.state.loggedIn} exact path="/saved" component={Saved} />
            <Route user={this.state.loggedIn} exact path="/shop" component={Shop} />
            <Route user={this.state.loggedIn} exact path="/characters" component={Characters} />
            <Route render={(props) => <Home {...props} userID={this.state.userID} email={this.state.email} loggedIn={this.state.loggedIn} logout={this.logout} photo={this.state.photo} responseGoogle={this.responseGoogle} />} />
          </Switch>

        </div>


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


