import { useState } from "react";

const Home = () => {
  // let name = 'mario';
  const [name, setName] = useState('yoshi');
  const setNames = () => {
    setName('Jane')
  }

  return (  
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={setNames}>Print Hello</button>
      <p>{ name}</p>
    </div>
  );
}
 
export default Home;