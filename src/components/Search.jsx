import React, {useState} from "react";

const Search = (props) => {
  const {searchMovies = Function.prototype} = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };
  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };


    return (
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                    onKeyDown={handleKey}
                    className="materialize-textarea"
                ></input>
                <button
                    className="btn search-btn"
                    onClick={() => searchMovies(search, type)}
                >
                  Search
                </button>
              </div>
              <div>
                <label>
                  <input
                      className="with-gap"
                      name="type"
                      type="radio"
                      data-type="all"
                      onChange={handleFilter}
                      checked={type === "all"}
                  />
                  <span>All</span>
                </label>
                <label>
                  <input
                      className="with-gap"
                      name="type"
                      type="radio"
                      data-type="movie"
                      onChange={handleFilter}
                      checked={type === "movie"}
                  />
                  <span>Movies</span>
                </label>
                <label>
                  <input
                      className="with-gap"
                      name="type"
                      type="radio"
                      data-type="series"
                      onChange={handleFilter}
                      checked={type === "series"}
                  />
                  <span>Serials</span>
                </label>
              </div>
            </div>
          </form>
        </div>
    );
}



export default Search;
