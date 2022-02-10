import './App.css';
import Homepage from './Components/Bodies/Homepage/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import BurgerBuilder from './Components/Bodies/Projects/BurgerBuilder';
import MyBrochure from './Components/Bodies/Projects/MyBrochure';
import TodoList from './Components/Bodies/Projects/TodoList';
import HimachalHomestays from './Components/Bodies/Projects/HimachalHomestays';
import GoToTop from './Components/GoToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <GoToTop>
      <Route path="/" exact component={Homepage} />
      <Route path="/BurgerBuilder" component={BurgerBuilder} />
      <Route path="/MyBrochure" component={MyBrochure} />
      <Route path="/TodoList" component={TodoList} />
      <Route path="/HimachalHomestays" component={HimachalHomestays} />
      </GoToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
