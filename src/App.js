import './App.css';
import { useDataContext } from './Context/DataContext';
import { Route,Routes } from "react-router-dom";
import { Landing } from './Pages/Landing';
function App() {
  const { data } = useDataContext();

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
