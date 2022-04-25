import React, {useState, useEffect} from "react";
import "../index.css";
export const Fatch = () => {
  const [loding, setloding] = useState(true);
  const [data, setdata] = useState("");
  const [datafinal, setdatafinal] = useState("");
  const [getdata, setgetdata] = useState([]);
  const onSubmit = e => {
    e.preventDefault();
    setdatafinal(data);
    console.log("yhhhh");
  };
  useEffect(() => {
    setTimeout(() => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          "X-RapidAPI-Key":
            "a36645c39cmsh442eca47f280340p14c14cjsnda822bd0f627",
        },
      };

      fetch(
        `https://weatherapi-com.p.rapidapi.com/search.json?q=+${data}`,
        options
      )
        .then(response => response.json())
        .then(response => {
          setgetdata(response);
          console.log(response);
        })

        .catch(err => console.error(err));
    }, 4000);
  }, [datafinal]);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={data}
          onChange={e => setdata(e.target.value)}
          className=" py-2 px-5 border-2 border-red-900 "
          placeholder="Search"
        />
        <button type="submit" className=" py-2 px-5 border-2 border-red-900">
          {" "}
          Search
        </button>
      </form>

      <div>
        {getdata &&
          getdata.map(item => {
            return (
              <div key={item.id} className="flex justify-center ">
                <div className="w-1/2 grid grid-cols-2">
                  <h1>{item.name}</h1>
                  <h1>{item.country}</h1>
                  <h1>{item.lat}</h1>
                  <h2></h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
