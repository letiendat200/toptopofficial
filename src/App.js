import './App.css';
import Homepage from './components/HomePage';
import StartingPage from './components/StartingPage';
import CommentBox from './components/CommentBox';
import Album from './components/Album';
import BottomNav from './nav/BottomNav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {  
  return (
    <Router>
           
      <div className="content">      
      <Switch>
        <Route exact path="/">
          <StartingPage />
        </Route>
        <Route path = "/home">
          <Homepage />  
          <BottomNav/>
        </Route>  
        <Route path = "/comment">
          <CommentBox />  
          <BottomNav/>
        </Route> 
        <Route path = "/album">
          <Album />  
          <BottomNav/>
        </Route>      
      </Switch> 
      </div>      
    </Router>
      
  );
}

export default App;
