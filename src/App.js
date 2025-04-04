import './App.css';

import Header from "./components/header/header"
import Contents from './components/contents/contents';

function App() {
  return (
    <div 
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflowX: "hidden"
      }}
    >
      <Header />
      <Contents />
    </div>
  );
}

export default App;
