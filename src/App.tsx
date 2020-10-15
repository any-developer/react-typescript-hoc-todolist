import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import './App.scss';
import { TodosPage } from './components/pages/TodosPage';
import { AboutPage } from './components/pages/AboutPage';


const App: React.FC = () => {
  return (
   <BrowserRouter>
    <Navbar />
    <div className='container'>
      <Switch>
          <Route component={TodosPage} path='/' exact />
          <Route component={AboutPage} path='/about'/>
      </Switch>     
    </div>
   </BrowserRouter>
  );
}

export default App;
