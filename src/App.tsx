import { DndProvider } from 'react-dnd';
import './App.css';
import { Outlet } from 'react-router';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RootStoreContext } from './store/root-store-context';
import { RootStore } from './store/roote-store';

function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <Outlet />
        </div>
      </DndProvider>
    </RootStoreContext.Provider>
  );
}

export default App;
