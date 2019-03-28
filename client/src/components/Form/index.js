import React from "react";

function Form({ style, q, handleInputChange, handleFormSubmit }) {
  return (
    <form style={style} className="rounded">
      <div className="form-group">
        <label className="fancyFont" style={{fontSize:"150%"}} htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
