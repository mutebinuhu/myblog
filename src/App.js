import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Create from './Create';
import BlogDetails from './BlogDetails';
import  NotFound  from './NotFound';

function App() {
  let name = "mutebi";
  return (
   <Router>
      <div className="App">
      <div className="content">
      <NavBar />
      <Switch>
        <Route exact path="/">
            <Home /> 
        </Route>
        <Route path="/about">
            <About /> 
        </Route>
        <Route path="/create">
            <Create /> 
        </Route>
        <Route path="/blogs/:id">
            <BlogDetails /> 
        </Route>
        <Route path="*">
          <NotFound />  
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}
export default App;
