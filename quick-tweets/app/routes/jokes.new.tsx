

const JokesNewRoute = () => {
  return (
    <>
      <form
        method="POST"
      >
        <p>Add your own hilarious joke</p>
        <div>
          <label>
            Name: <input type="text" name="name" />  
          </label>
        </div>
        <div>
          <label>
            Content: <input type="textarea" name="content"/>  
          </label>
        </div>
        <button
          type="submit"
          className="button"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default JokesNewRoute;
