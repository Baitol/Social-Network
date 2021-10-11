import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Navigation from './components/Navigation/navigation';
import Content from './components/Content/content';
import Dialogs from './components/Dialogs/dialogs';
import News from './components/News/news';
import Settings from './components/Settings/settings';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="Workspace">
          <Route path="/Dialogs">
            <Dialogs />
          </Route>
          <Route path="/Content">
            <Content />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Settings">
            <Settings />
          </Route>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
