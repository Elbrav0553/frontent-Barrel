import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Home } from "../components/Home";
import { View } from "../components/View";
import { Edit } from "../components/Edit";
import { New } from "../components/New";


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/new" element={<New/>}/>
              <Route exact path="/view/:id" element={<View/>}/>
              <Route exact path="/edit/:id" element={<Edit/>}/> 
            </Routes>
        </Router>
    </div>
  );
}
 
export default App;