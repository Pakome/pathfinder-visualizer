import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import Metadata from './Metadata/Metadata'

function App() {
  return (
    <div className="App">
      <Metadata></Metadata>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
