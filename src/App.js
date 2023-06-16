import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AddSurvey from './Containers/AddSurvey';
import ListSurvey from "./Containers/ListSurvey"
import OneSurvey from "./Containers/OneSurvey"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to="/addsurvey" />} />
            <Route path='/addsurvey' element={<AddSurvey />} />
            <Route path='/listsurvey' element={<ListSurvey />} />
            <Route path='/onesurvey' element={<OneSurvey />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
