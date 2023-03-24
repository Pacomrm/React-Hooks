import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Gallery from "../useState/Gallery";
import Exchange from "../useState/Exchange";

export default function Header(){

    return(
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link" href="#">Gallery(useState)</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/exchange" className="nav-link" href="#">Products(useState)</Link>
                        </li>
                    </ul>
            </nav>
            <div>
                <Routes>
                    {/*<Route path="/" element={<App/>} />*/}
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/exchange" element={<Exchange/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}