import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/Home';
import Report from './views/Report'; // Ensure this is an array of routes
import ReportComponent from './components/ReportComponent/title';
import '/node_modules/primeflex/primeflex.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {Report.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <ReportComponent label={route.label}>
                                    <route.component />
                                </ReportComponent>
                            }
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
