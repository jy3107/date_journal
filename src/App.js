import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="top">
        <h1 className="title">Date Planner :&gt;</h1>
        <div className="create-date">
          <form className="form">
            <label for="file">Event's Date: </label>
            <input type="date" placeholder="Date" name="date" />
            <div className="padding-more">
              <label for="file">Date Location: </label>
              <input
                type="text"
                placeholder="Location (City, State)"
                name="location"
                className="border"
              />
            </div>
            <div className="padding-more">
              <label for="file">Photo (if any): </label>
              <input type="file" accept="image/*" name="file" />
            </div>
            <section id="radio1" className="datetype">
              <div>
                What type of date was this?
                <span class="choice_error"> Please select a choice</span>
              </div>
              <label>
                <input type="radio" name="choice0" value="A" />
                Food
              </label>
              <label>
                <input type="radio" name="choice0" value="B" />
                Entertainment
              </label>
              <label>
                <input type="radio" name="choice0" value="C" />
                Other
              </label>
            </section>
            <div className="padding-more">
              <label for="rating">Overall Rating (from 0 to 10): </label>
              <input type="number" id="rating" name="rating" min="0" max="10" />
            </div>

            <div className="padding-more">
              <textarea
                name="note"
                id=""
                cols="30"
                rows="8"
                placeholder="Additional Info for the journal (food eaten, type of event, feelings, etc.)"
                className="border size"
              ></textarea>
            </div>

            <div className="padding-more">
              <button type="submit" className="submit">
                Add New Date!
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="dates-container">
        <div className="date">
          <button className="delete-date">X</button>
          <h3>Hello World</h3>
          <p> Lorem ipsum dolor sit amet caksjdhf. aslkjdfhlaks asdlfkjhasdf</p>
        </div>
      </div>
    </div>
  );
}

export default App;
