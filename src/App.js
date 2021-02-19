
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
       <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" component={Dashboard}/>
        </Switch>
     </div>
    </BrowserRouter>
   
  );
}

export default App;
