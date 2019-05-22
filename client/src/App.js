import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Saved from "./components/Saved";
import Shop from "./components/Shop";
import Sidenav from "./components/sidenav/SideNav";
import Characters from "./components/Characters"
import Axios from "axios";
import Banner from "./components/banner/Banner"
import StatueInput from "./components/statueInput/StatueInput";
import Profile from "./components/profile/Profile"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: "",
      userID: "",
      photo: null,
      sNav: false
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
  }

  handleSideNav = e => {
  
    this.setState(prevState => ({
      sNav: !prevState.sNav
    })
    )
   
  }

  render() {
    return (

      <Router>
        <div>
          <Banner loggedIn={this.state.loggedIn} logout={this.logout} sNav={this.state.sNav} handleSideNav={this.handleSideNav} userID={this.state.userID} email={this.state.email} photo={this.state.photo}/>
          {this.state.sNav ? <Sidenav userID={this.state.userID} email={this.state.email} loggedIn={this.state.loggedIn} photo={this.state.photo} sNav={this.state.sNav} handleSideNav={this.handleSideNav}/> : null}
          {/* <SideNavButton sNav={this.state.sNav} handleSideNav={this.handleSideNav} */}


          <Switch>
            <Route user={this.state.loggedIn} exact path="/saved" component={Saved } />
            <Route user={this.state.loggedIn} exact path="/shop" component={Shop} />
            <Route user={this.state.loggedIn} exact path="/characters" component={Characters} />
            <Route user={this.state.loggedIn} exact path="/statueinput" component={StatueInput} />
            <Route user={this.state.loggedIn} exact path="/profile" component={Profile} />
            <Route render={(props) => <Home {...props} userID={this.state.userID} email={this.state.email} loggedIn={this.state.loggedIn} logout={this.logout} photo={this.state.photo} responseGoogle={this.responseGoogle}/>} />
          </Switch>

        </div>

      </Router>
    );
  }
}

export default App;


