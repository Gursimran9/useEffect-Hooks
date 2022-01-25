import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  // I will render everytime
  useEffect(() => {
    console.log('I render everytime');
  });

  // I will render when the component mounts
  useEffect(() => {
    console.log('I render when Component mounts');
  }, []);

  // I will render when component mounts and whenever dependency changes
  useEffect(() => {
    console.log(`The name is Changed :${name}`);
  }, [name]);

  //It will be used when want to unmount a component after it has been trigger
  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  });

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className='App'>
      <h1>The width is: {width}</h1>
      <form>
        <input
          type='text'
          placeholder='Enter name...'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter age...'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
