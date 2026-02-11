// App.jsx - Make sure it exports default
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import BookDetailPage from "./pages/BookDetailPage";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <Router>
            <div className="App">
                <Toaster position="top-center" />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/book/:id" element={<BookDetailPage />} />
                </Routes>
            </div>
        </Router>
    );
}

// Make sure this is a default export
export default App;