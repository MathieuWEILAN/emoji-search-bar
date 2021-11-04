import "./App.css";
import Search from "./component/Search";
import Line from "./component/Line";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (event) => {
    let value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="container">
      <Search searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />
      <Line searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />
    </div>
  );
}

export default App;
