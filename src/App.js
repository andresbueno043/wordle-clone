import { useEffect, useState } from "react";
import { GithubButton } from "react-github-link-button/dist"
import Wordle from "./components/Wordle";

function App() {
  //States
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/andresbueno043/wordle-db/solutions`)
    .then(res => res.json())
    .then(json => {
      //Random int between o and 14
      const randomSolution = json[Math.floor(Math.random()*json.length)];
      setSolution(randomSolution.word);
    })
  
  }, [setSolution])
  

  return (

    <div className="App">
      <h1> Wordle</h1>
      {solution && <Wordle solution={solution}/>}
      <GithubButton message="Check out my code!" href="https://github.com/andresbueno043/wordle-clone"/>
    </div>
  );
}

export default App;
