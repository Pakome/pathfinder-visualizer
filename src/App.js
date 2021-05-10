import './App.css';
import Metadata from './Metadata/Metadata'
import Navbar from './Navbar/Navbar'
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function App() {
  return (
    <div className="App">
      <Metadata></Metadata>
      <Navbar></Navbar>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
