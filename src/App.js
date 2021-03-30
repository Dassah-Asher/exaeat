import './App.css';
import AddStudent from './components/AddStudent';
import ExeatRecords from './components/ExeatRecords';
import Header from './components/Header';
import Students from './components/Students';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddStudent/>
      <ExeatRecords/>
     
      <Students/>
    </div>
  );
}

export default App;
