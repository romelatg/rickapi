export default function Search() {
  return (
    <>
      <form>
        <div className="mb-3 hello bigtext">
          <label /* htmlFor="exampleInputEmail1" */ className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            /* id="exampleInputEmail1" */
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else
          </div>
          <button type="button" className="btn btn-primary btn">
            Search
          </button>
        </div>
      </form>
    </>
  );
}
