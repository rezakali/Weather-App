import { useEffect, useState } from "react";

const WeatherSearch = () => {
    const [ search,  setSearch ] = useState("Kolkata");
    const [ data,  setData ] = useState([]);
    const [ input,  setInput ] = useState("");

    const componentMounted = true;

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6949fc7b17646e5cd5f1f7ad182e4676`);
            if(componentMounted){
                setData(await response.json());
                console.log(data)
            }
            return () => {
                componentMounted = false;
            }
        }

        fetchWeather()
    }, [search]);
    console.log(data);

        let emoji = null;

        if(typeof data.main != "undefined"){
            if(data.weather[0].main == "Clouds"){
                emoji = "fa-cloud"
            }else if(data.weather[0].main == "Thunderstorm"){
                emoji = "fa-bolt"
            }else if(data.weather[0].main == "Drizzle"){
                emoji = "fa-cloud-rain"
            }else if(data.weather[0].main == "Rain"){
                emoji = "fa-cloud-shower-heavy"
            }else if(data.weather[0].main == "Snow"){
                emoji = "fa-snow-flake"
            }else{
                emoji = "fa-smog"
            }
        }else{
            return(
                <div>...Loading</div>
            )
        }




        let mainTemp = (data.main.temp - 273.15).toFixed(2);
        let minTemp = (data.main.temp_min - 273.15).toFixed(2);
        let maxTemp = (data.main.temp_max - 273.15).toFixed(2);


        let d = new Date();
        let date = d.toLocaleString("default", {dateStyle: 'full'});
        // let month = d.toLocaleString("default", {month:'long'});
        // let day = d.toLocaleString("default", {weekday:'long'});
        console.log(date)
        //Time
        let time = d.toLocaleString([], {
            hour : "2-digit",
            minute : '2-digit',
        });

        const handleSubmit = (event) => {
            event.preventDefault();
            setSearch(input);
        }


   return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-center border-0 text-white">
              <img
                className="card-img"
                src={`https://source.unsplash.com/600x900/?${data.weather[0].main}`}
                alt="Card image"
              />
              <div className="card-img-overlay">
                <form onSubmit={handleSubmit}>
                  <div className="form-group d-flex mb-4 w-75 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search City"
                      aria-label="Search City"
                      name="search"
                      value={input}
                      onChange={(e) =>setInput(e.target.value)}
                      required
                    />
                    <button type="submit" className="input-group-text">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
                <div className="bg-dark bg-opacity-50 py-3">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text lead">
                        {date}
                        <br />
                        {time}
                  </p>
                  <hr />
                  <i className={`fas ${emoji} fa-4x`}></i>
                  <h1 className="fw-bolder mb-5"> {mainTemp} &deg; C</h1>
                  <p className="lead fw-bolder mb-0">{data.weather[0].main}</p>
                  <p className="lead">{minTemp} &deg; C | {maxTemp} &deg; C </p>
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
