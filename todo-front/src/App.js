import {Route, Routes} from 'react-router-dom'
import ToDoPage from './pages/ToDoPage';
import ProfilePage from './pages/ProfilePage';
import SmthPage from './pages/SmthPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<ToDoPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/smth' element={<SmthPage />} />
      </Routes>
    </div>
  );
}

export default App;
