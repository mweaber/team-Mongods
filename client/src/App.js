import React, { Component } from "react";
import "./App.css";
// import Background from "./pencilbkgrnd.jpg";
// import ComicCard from "./components/ComicCard";
// import Card from "./components/Card";
// import Header from "./components/Header";
import Home from "./components/Home";
// import Login from "./components/Login";
// import Temp from "./placeholder.json";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Saved from "./components/Saved";
import Shop from "./components/Shop";
// import ErrorPage from "./components/ErrorPage";
// import GoogleLogin from 'react-google-login';
import Sidenav from "./components/sidenav/SideNav";
import Characters from "./components/Characters"
import Axios from "axios";

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

  componentDidMount(){
    Axios.get("/auth/getuser").then(res => {
      console.log(res.data)
      this.setState({
        loggedIn: true,
        email: res.data.user.email,
        userID: res.data.user.name,
        photo: res.data.user.img
      })

      console.log("magnets")
      console.log(this.state.email)
      console.log(this.state.userID)
      console.log(this.state.photo)
    })
    .catch(err => console.log(err))
    ///// add path to call and determine whether or not i am logged in
  }


  render() {
    return (

      <Router>
        {/* ////
        <Sidenav {...props} userID={this.state.userID} email={this.state.email} loggedIn={this.state.loggedIn} logout={this.logout} photo={this.state.photo} responseGoogle={this.responseGoogle}/>}/>

        */}
        <div>
        <Sidenav userID={this.state.userID} email={this.state.email} loggedIn={this.state.loggedIn} photo={this.state.photo}/>
          <Switch>
          {/* <Route exactuser={this.state.loggedIn} exact path="/home" component={Home} /> */}
          <Route user={this.state.loggedIn} exact path="/saved" component={Saved} />
          <Route user={this.state.loggedIn} exact path="/shop" component={Shop} />
          <Route user={this.state.loggedIn} exact path="/characters" component={Characters} />
          <Route render={(props) => <Home {...props} userID={this.state.userID} email={this.state.email} loggedIn={this.state.loggedIn} logout={this.logout} photo={this.state.photo} responseGoogle={this.responseGoogle} />} />
          </Switch>

          </div>
        {/* <Route user={this.state.loggedIn} exact path="/" component={Home} /> */}
        {/* <Route user={this.state.loggedIn} exact path="/login" component={Login} /> */}

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


