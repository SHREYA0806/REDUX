import NavBar from './Components/NavBar';
import Contact from './Components/contacts/Contact';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddContact from './Components/contacts/AddContact';
import EditContact from './Components/contacts/EditContact';

function App() {
  return (
    <Provider store= {store}>
    <Router>
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="py-3">
        <Switch>
          <Route exact path="/" component={Contact}  />
          <Route exact path="/contacts/add" component={AddContact} />
          <Route exact path="/contacts/edit/:id"  component={EditContact} />
        </Switch>
          
        </div>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
