import axios from "axios";
import { useEffect, useState } from "react";
import photo from "../../public/photo.jpg"

export default function Portfolio() {

     const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
    
      useEffect(() =>{
        axios.get<Portfolio[]>('https://localhost:5001/api/portfolios')
        .then(response => setPortfolios(response.data))
    
        return () => {}
      }, []) 
      
  return (
    <>
    <div className="portfolio__photograph">
        <img src={photo}></img>
    </div>
      {portfolios.map((portfolio) => (
        <div key={portfolio.id}>
          <h2>Full Name: {portfolio.name}</h2>
          <h2>Position: {portfolio.position}</h2>
          <h2>Tech Stack: {portfolio.techStack}</h2>
        </div>
      ))}
    </>
  );
}
