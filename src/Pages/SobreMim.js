import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Informacoes from "../components/Sobre";

function Sobre(){
    return(
        <main>
            <Cabecalho/>
            <Informacoes/>
            <Rodape/>
        </main>
    )
}

export default Sobre;