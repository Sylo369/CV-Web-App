import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import Portfolio from "./components/Portfolio";

function App() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  useEffect(() =>{
    axios.get<Portfolio[]>('https://localhost:5001/api/portfolios')
    .then(response => setPortfolios(response.data))

    return () => {}
  }, []) 

  return (
    <>
      <Header />
      <ul>
        {portfolios.map((portfolio) =>
          (
            <li key={portfolio.id}>{portfolio.name}-{portfolio.techStack}-{portfolio.position}</li>

          ))}
      </ul>
      <Portfolio/>
    </>
  );
}

export default App;
