import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticleListPage from "./pages/ArticleListPage";
import DetailArticle from "./pages/DetailArticle";
import Registrasi from './components/Registrasi'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registrasi' element={<Registrasi />} />
        <Route path="/article" element={<ArticleListPage />} />
        <Route path="/detail/:id" element={<DetailArticle />} />
      </Routes>
    </div>
  );
}

export default App;
