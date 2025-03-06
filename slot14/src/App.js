import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventHandlingDemo from './components/EventHandlingDemo';
import MyAlert from './components/MyAlert';
import MyDropdown from './components/MyDropdown';
import MyModal from './components/MyModal';
import MyRadioButton from './components/MyRadioButton';

function App() {
  return (
    <div className="App">
      <EventHandlingDemo/>
      <MyAlert/>
      <MyDropdown/>
      <MyModal/>
      <MyRadioButton/>

    </div>
  );
}

export default App;