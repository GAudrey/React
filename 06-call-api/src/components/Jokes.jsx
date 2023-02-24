import { useEffect, useState } from 'react';
import Loader from './Loader';

const Jokes = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzI2NjkzNTc0ODY5NjQ3MzYxIiwibGltaXQiOjEwMCwia2V5IjoiSkdoY0Y3c0lKUU96TVJjQVExam1VTHZndEQ5REI0dWI4alZydGczVmNna0ZUOWV6bU4iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0yNFQxMDo0MToyMCswMDowMCIsImlhdCI6MTY3NzIzNTI4MH0.vFX7em8598nnYPnoQBJSVwWib36QOjeJyt-kvM5fE6w';

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('https://www.blagues-api.fr/api/type/dev/random', {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const data = await res.json();
      setJoke(data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <h1 className="text-3xl my-2 text-center">{joke.joke}</h1>
        <h2 className="py-1 text-center text-xl bg-black duration-200 hover:bg-transparent">
          {joke.answer}
        </h2>
        <button
          type="button"
          className="btn primary block mx-auto mt-4"
          onClick={getData}>
          Une autre blague ?
        </button>
      </div>
    </>
  );
};

export default Jokes;
