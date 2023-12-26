import { DndProvider } from 'react-dnd';
import './App.css';
import { Outlet } from 'react-router';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Link } from 'react-router-dom';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Link to="/registration">
          <p>Регистрация</p>
        </Link>
        <Outlet />
      </div>
    </DndProvider>
  );
}

export default App;
