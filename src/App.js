import './App.css';
import HelloReact from './HelloReact';
import PhotoGallery from './PhotoGallery';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React</h1>
        <p className="message">wow! that's cool</p>
        <HelloReact />
        <PhotoGallery />
      </header>
    </div>
  );
}

export default App;