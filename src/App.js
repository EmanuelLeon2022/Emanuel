import './App.css'
import Me from './Components/Me';
import Skill1 from './Components/Skill1';
import Skill2 from './Components/Skill2';
import Skill3 from './Components/Skill3';
import Contact1 from './Components/Contact1';
import Contact2 from './Components/Contact2';
import Contact3 from './Components/Contact3';
import Contact4 from './Components/Contact4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Me/>
      </header>
      <div className='able'>
        <div className='s1'>
          <Skill1/>
        </div>
        <div className='s2'>
          <Skill2/>
        </div>
        <div className='s3'>
          <Skill3/>
        </div>
      </div>
      <div className='contacts'>
        <div className='phone'>
          <Contact1/>
        </div>
        <div className='email'>
          <Contact2/>
        </div>
        <div className='socials'>
          <Contact3/>
        </div>
        <div className='socials2'>
          <Contact4/>
        </div>
      </div>
    </div>
  );
}

export default App;