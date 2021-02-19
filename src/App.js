
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PrrojectDetails from './components/project/PrrojectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
       <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/project/:id" component={PrrojectDetails}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
     </div>
    </BrowserRouter>
   
  );
}

export default App;
