import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  useEffect(() =>{
    fetch('https://localhost:5001/api/portfolios')
    .then(response => response.json())
    .then(data => setPortfolios(data))

    return () => {}
  }, []) 

  return (
    <>
      <Header />
<h1>test</h1>
      <ul>
        {portfolios.map((portfolio) =>
          (
            <li key={portfolio.id}>{portfolio.name}-{portfolio.techStack}-{portfolio.position}</li>

          ))}
      </ul>
    </>
  );
}

export default App;
