import { useState } from "react";

export default function Homepage() {
  let rando = Math.floor(Math.random() * 826);
  let randotext = rando.toString();

  const [character, setCharacter] = useState();
  const [name, setName] = useState([]);

  const [status, setStatus] = useState([]);
  const [identification, setIdentification] = useState([]);
  const [submitName, setSubmitName] = useState(randotext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    /* setSubmitName(""); */
  };
  const getCharacter = () => {
    fetch("https://rickandmortyapi.com/api/character/" + submitName)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCharacter(json.image);
        setName(json.name);
        setStatus(json.status);
        setIdentification(json.id);
      });
  };

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <img
        src="https://www.pngkit.com/png/full/112-1128909_rick-and-morty-transparent-png-fondos-de-pantalla.png"
        className="img-fluid"
        alt="..."
      ></img>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 hello bigtext">
          <label /* htmlFor="exampleInputEmail1" */ className="form-label">
            Enter a number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => {
              setSubmitName(event.target.value);
            }}
          />

          <div id="emailHelp" className="form-text">
            Pick a number from 1 ~ 826
          </div>
          <button
            onClick={() => {
              let randomNumber = Math.floor(Math.random() * 826);
              let text = randomNumber.toString();
              setSubmitName(text);
              getCharacter();
            }}
            type="button"
            className="btn btn-dark"
          >
            Random Character
          </button>
          <input
            value="Search"
            onClick={() => {
              getCharacter();
            }}
            className="btn btn-primary"
            type="submit"
          />
        </div>
      </form>
      <img className="border border-black picture" src={character} alt="" />
      <h2>
        <b>Name:</b> {name}
      </h2>
      <h2>
        <b>Status:</b> {status}
      </h2>
      <h2>
        <b>ID: </b> {identification}{" "}
      </h2>
    </>
  );
}
