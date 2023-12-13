import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BadgerGuardian from './components/BadgerGuardian';
import BadgerBackersParent from './components/BadgerBackersParent';

function App() {

  return <div style={{ margin: "2rem" }}>
    <header style={{ textAlign: "left", marginTop: "-1rem" }}>
      <h1>Badger Backers</h1>
      <sub>This is NOT a "real" website. This is a simulated environment for you to do security testing on. This website is for <em>educational purposes only</em>.</sub>
      <hr />
    </header>
    <BadgerGuardian>
      <BadgerBackersParent/>
    </BadgerGuardian>
  </div>
}

export default App
