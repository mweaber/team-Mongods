import React, { Component } from "react";
import "./App.css";
// import Background from "./pencilbkgrnd.jpg";
// import ComicCard from "./components/ComicCard";
// import Card from "./components/Card";
// import Header from "./components/Header";
import Home from "./components/Home";
// import Login from "./components/Login";
// import Temp from "./placeholder.json";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
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
    // console.log(this.props)
    const id = localStorage.getItem("id");
    const email = localStorage.getItem("email");
    const photo = localStorage.getItem("photo");
    const userID = localStorage.getItem("userID");
    console.log(id)
    this.state = {
      loggedIn: id ? true : false,
      email: email,
      photo: photo,
      userID: userID

      // cards: Temp
    };


  }

  componentDidMount(){
    // Axios.get()
    ///// add path to call and determine whether or not i am logged in
  }


  responseGoogle = (res) => {
    console.log(res)

    localStorage.setItem('id', res.googleId);
    this.setState({
      loggedIn: true,
      email: res.w3.U3,
      userID: res.w3.ig,
      photo: res.w3.Paa
    })
    console.log(this.state.userID)
  
    localStorage.setItem("email", this.state.email)
    localStorage.setItem("userID", this.state.userID)
    localStorage.setItem("photo", this.state.photo)
  
  }

  // componentDidMount() {

  // }

  // testAuth = () => {
  //   $.get('/api/test')
  //   .then(res => {
  //     this.setState({ 
  //       isAuth: true,
  //       email:  res.data.email,
  //       userId: res.data.id
  //     })
  //   })
  //   .catch(err => this.setState({
  //       isAuth: false
  //   }))


  logout = () => {
    localStorage.clear();
    console.log("the logout button was clicked")
    this.setState({
      loggedIn: false,
      email: "",
      userID: "",
      photo: null
    })
  }

  render() {
    return (

      <Router>
        {/* //// 
        <Sidenav {...props} userID={this.state.userID} email={this.state.email} loggedIn={this.state.loggedIn} logout={this.logout} photo={this.state.photo} responseGoogle={this.responseGoogle}/>}/>
        
        */}
        <div>
        <Sidenav userID={this.state.userID} email={this.state.email} loggedIn={this.state.loggedIn} logout={this.logout} photo={this.state.photo} responseGoogle={this.responseGoogle}/>

          <Route exact path="/" render={(props) => <Home {...props} userID={this.state.userID} email={this.state.email} loggedIn={this.state.loggedIn} logout={this.logout} photo={this.state.photo} responseGoogle={this.responseGoogle} />} />
          {/* <Route exactuser={this.state.loggedIn} exact path="/home" component={Home} /> */}
          <PrivateRoute user={this.state.loggedIn} exact path="/saved" component={Saved} />
          <PrivateRoute user={this.state.loggedIn} exact path="/shop" component={Shop} />
          <PrivateRoute user={this.state.loggedIn} exact path="/characters" component={Characters} />

          </div>
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


