import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Atividades from '../Pages/Atividades';
import Aulinhas from '../Pages/Aulinhas';
import Contato from '../Pages/Contato';
import Header from '../Components/Header';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Atividades" element={<Atividades/>}/>
              <Route path="/Aulinhas" element={<Aulinhas/>} />
              <Route path="/Contato" element={<Contato/>}/>

            </Routes>
        </BrowserRouter>

    )

}