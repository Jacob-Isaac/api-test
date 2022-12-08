import "./App.css";
import { useEffect, useState } from "react";
import handler from "./getdata";

function App() {

  // const [dataResponse, setdataResponse] = useState([]);

  // useEffect(() => {
  //   async function getPageData() {
  //     const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
  //     const response = await fetch(apiUrlEndpoint);
  //     const res = await response.json();
  //     console.log(res);
  //     setdataResponse(res.products);
  //   }
  //   getPageData();
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>Not from database: Example number 1</div>
        <div className="App-photo">
          <img src={`/images/shoes_1.webp`} alt="API data" />
        </div>
      </header>
    </div>
  );
}

export default App;
