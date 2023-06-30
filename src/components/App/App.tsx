import {BrowserRouter as Router} from "react-router-dom";
import {Header} from "../Header";
import MoviesSearcher from "../MoviesSearcher/MoviesSearcher";
import Footer from "../Footer/Footer";

function App() {
    return (
        <Router>
            <>
                <Header/>
                <MoviesSearcher/>
                <Footer/>
            </>
        </Router>
    )
}

export default App;
