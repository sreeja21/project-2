var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var Link = window.ReactRouter.Link;

class Signin extends React.Component {
    constructor(props) {
      super(props);
      this.signIn = this.signIn.bind(this);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.state = {
        username:'',
        password:''
      };
    }
    signIn(){
      axios.post('/signin', {
        username: this.state.username,
        password: this.state.password
      })
      .then(function (response) {
        if(response.data == 'success'){
          window.location.assign('http://localhost:7777/home')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    handleUsernameChange(e){
      this.setState({username:e.target.value})
    }
    handlePasswordChange(e){
      this.setState({password:e.target.value})
    }
    render() {
      return (
        <div>
          <form className="form-signin">
            <h2 className="form-signin-heading">Login Page</h2>
            <label for="inputName" className="sr-only">Username</label>
            <input type="name" onChange={this.handleUsernameChange} id="inputName" className="form-control" placeholder="username" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
            
            <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>
          </form>
          <div>
            <Link to="/signup">{'Signup'}</Link>
          </div>
        </div>

      )
    }
}

class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      name:'',
      username:'',
      password:''
    };
  }
  handleNameChange(e){
    this.setState({name:e.target.value})
  }
  handleUsernameChange(e){
    this.setState({usename:e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }
  signUp(){
    axios.post('/signup', {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
      return (
        <div>
          <form className="form-signin">
            <h2 className="form-signin-heading">Sign up</h2>
            <label for="inputName" className="sr-only">Name</label>
            <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
            <label for="inputName" className="sr-only">Username</label>
            <input type="username" onChange={this.handleUsernameChange} id="inputName" className="form-control" placeholder="User name" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
            
            <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp}  type="button">Sign up</button>
          </form>
          <div>
            <Link to="/">{'Signin'}</Link>
          </div>
        </div>
        
      )
  }
}


ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={Signin} path="/"></Route>
        <Route component={Signup} path="/signup"></Route>
    </Router>,
document.getElementById('app'));