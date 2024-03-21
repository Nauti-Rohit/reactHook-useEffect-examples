import { useState, useEffect } from "react";

export default function Joke() {
  let [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h4>joke!</h4>
      <h3>{joke.setup}</h3>
      <h4>{joke.punchline}</h4>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
