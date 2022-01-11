import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listing from 'pages/Listing';
import Form from 'pages/Form';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Listing />}/>
                <Route path="/form">
                    <Route path=":movieid" element={<Form />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
