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