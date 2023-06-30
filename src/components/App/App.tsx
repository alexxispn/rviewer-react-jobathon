import {BrowserRouter as Router} from "react-router-dom";
import {Header} from "../Header";
import MoviesSearcher from "../MoviesSearcher/MoviesSearcher";

function App() {
    return (
        <Router>
            <>
                <Header/>
                <MoviesSearcher/>
            </>
        </Router>
    )
}

export default App;
