import { DndProvider } from 'react-dnd';
import './App.css';
import { Outlet } from 'react-router';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Outlet />
      </div>
    </DndProvider>
  );
}

export default App;
