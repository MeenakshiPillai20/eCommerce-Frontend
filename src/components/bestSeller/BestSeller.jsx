import React,{useEffect,useState} from "react";
import { Container, Navbar } from "react-bootstrap";
import Cards from "./Cards";
import { Nav, NavLink } from "react-bootstrap";
import NavLinks from "./NavLinks";

const BestSeller = () => {
  const [allData, setAllData] = useState([]);
  const [dramaData, setDramaData] = useState([]);
  const [romanceData, setRomanceData] = useState([]);
  const [crimeData, setCrimeData] = useState([]);
  const [horrorData, setHorrorData] = useState([]);
  const [literaryData, setLiteraryData] = useState([]);



  const [isShownAll, setIsShownAll] = useState(true);
  const [isShownDrama, setIsShownDrama] = useState(false);
  const [isShownRomance, setIsShownRomance] = useState(false);
  const [isShownCrime, setIsShownCrime] = useState(false);
  const [isShownHorror, setIsShownHorror] = useState(false);
  const [isShownLiterary, setIsShownLiterary] = useState(false);
  useEffect(() => {
    fetch("https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/Data/1").then((res) => res.json()).then((json) => setAllData(json))
  },[]);
  useEffect(() => {
    fetch("https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/Data/2").then((res) => res.json()).then((json) => setDramaData(json))
  },[]);
  useEffect(() => {
    fetch("https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/Data/3").then((res) => res.json()).then((json) => setRomanceData(json))
  },[]);
  useEffect(() => {
    fetch("https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/Data/4").then((res) => res.json()).then((json) => setCrimeData(json))
  },[]);
  useEffect(() => {
    fetch("https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/Data/5").then((res) => res.json()).then((json) => setHorrorData(json))
  },[]);
  useEffect(() => {
    fetch("https://e-commerce-backend-kd0gzurq9-meenakshipillai20.vercel.app/Data/6").then((res) => res.json()).then((json) => setLiteraryData(json))
  },[]);
  return (
    <>
      <Container>
        <h2 className="head2">BEST SELLER</h2>

        <Navbar bg="white" expand="md" className=" l-head2">
        <Nav className="navScroll l-head">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" activeclassname="active" className="nav-link nav-linker " onClick={() => {setIsShownAll(true);}}>
              ALL
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/bollywood" className="nav-link nav-linker " onClick={() => {setIsShownAll(false);setIsShownDrama(true);setIsShownRomance(false);setIsShownCrime(false);setIsShownHorror(false);setIsShownLiterary(false)}}>
              Drama
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/technology" className="nav-link nav-linker " onClick={() => {setIsShownAll(false);setIsShownRomance(true);setIsShownDrama(false);setIsShownCrime(false);setIsShownHorror(false);setIsShownLiterary(false)}}>
              Romance
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/hollywood" className="nav-link nav-linker " onClick={() => {setIsShownAll(false);setIsShownCrime(true);setIsShownDrama(false);setIsShownRomance(false);setIsShownHorror(false);setIsShownLiterary(false)}}>
              Crime
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/fitness" className="nav-link nav-linker " onClick={() => {setIsShownAll(false);setIsShownHorror(true);setIsShownDrama(false);setIsShownRomance(false);setIsShownCrime(false);setIsShownLiterary(false)}}>
              Horror
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/food" className="nav-link  " onClick={() => {setIsShownAll(false);setIsShownLiterary(true);setIsShownDrama(false);setIsShownRomance(false);setIsShownCrime(false);setIsShownHorror(false);}}>
             Literary
            </NavLink>
          </li>
        </ul>
      </Nav>
            <NavLinks />
        </Navbar>

        <div className="cards" style={{display: isShownAll ? 'grid' : 'none'}}>
        {
                allData && allData.map((item) => {
                    return(
                        <>
                           <Cards item={item}/>
                        </>
                    )
                })
            } 
        </div>
        <div className="cards" style={{display: isShownDrama ? 'grid' : 'none'}}>
        {
                dramaData && dramaData.map((item) => {
                    return(
                        <>
                           <Cards item={item}/>
                        </>
                    )
                })
            } 
        </div>
        <div className="cards" style={{display: isShownRomance ? 'grid' : 'none'}}>
        {
                romanceData && romanceData.map((item) => {
                    return(
                        <>
                           <Cards item={item}/>
                        </>
                    )
                })
            } 
        </div>
        <div className="cards" style={{display: isShownCrime ? 'grid' : 'none'}}>
        {
                crimeData && crimeData.map((item) => {
                    return(
                        <>
                           <Cards item={item}/>
                        </>
                    )
                })
            } 
        </div>
        <div className="cards" style={{display: isShownHorror ? 'grid' : 'none'}}>
        {
                horrorData && horrorData.map((item) => {
                    return(
                        <>
                           <Cards item={item}/>
                        </>
                    )
                })
            } 
        </div>
        <div className="cards" style={{display: isShownLiterary ? 'grid' : 'none'}}>
        {
                literaryData && literaryData.map((item) => {
                    return(
                        <>
                           <Cards item={item}/>
                        </>
                    )
                })
            } 
        </div>
        <div className="load-more"><a href="#link" className="text-decoration-none"> Load more - </a></div>
      </Container>
    </>
  );
};

export default BestSeller;


