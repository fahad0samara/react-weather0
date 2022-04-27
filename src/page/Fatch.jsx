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
          className=" py-2 px-5 border-2 border-red-900 text-2xl text-black "
          placeholder="Search"
        />
        <button
          type="submit"
          className=" py-2 px-5 border-2 uppercase font-bold text-2xl  bg-orange-400"
        >
          {" "}
          Search
        </button>
      </form>

      <div>
        {getdata &&
          getdata.map(item => {
            return (
              <div key={item.id} className="flex justify-center  ">
                <div className="w-1/2  flex  space-x-5  bg-black text-white   text-center items-center text-3xl  space-y-6 ">
                  <h1 className=" ">
                    <span className=" bg-black"> city name:</span>
                    {item.name}
                  </h1>

                  <h1 className=" ">
                    {" "}
                    low temperature: {item.lat}
                  </h1>
                  <h1 > high temperature: {item.lon}</h1>
                  <h2></h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
