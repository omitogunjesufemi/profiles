import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Layout from "./components/Layout.jsx";
import SearchResult from "./pages/SearchResult.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path='/results' element={<SearchResult />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;