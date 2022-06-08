const WeatherSearch = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-center border-0 text-white">
              <img
                className="card-img"
                src="https://source.unsplash.com/600x900/?nature,water"
                alt="Card image"
              />
              <div className="card-img-overlay">
                <form>
                  <div className="form-group d-flex mb-4 w-75 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search City"
                      aria-label="Search City"
                    />
                    <button type="submit" className="input-group-text">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
                <div className="bg-dark bg-opacity-50 py-3">
                  <h5 className="card-title">London</h5>
                  <p className="card-text lead">
                        Webnesday, June 08, 2022
                  </p>
                  <hr />
                  <i className="fas fa-cloud fa-4x"></i>
                  <h1 className="fw-bolder mb-5">35.06 &deg; C</h1>
                  <p className="lead fw-bolder mb-0">Cloud</p>
                  <p className="lead">35.06 &deg; C | 35.06 &deg; C </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherSearch;
