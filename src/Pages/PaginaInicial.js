import Banner from "../components/Banner";
import Cabecalho from "../components/Cabecalho";
import Inferior from "../components/Inferior";
import Meio from "../components/Meio";
import Rodape from "../components/Rodape";
import Superior from "../components/Superior";

function PaginaInicial(){
    return(
        <main>
            <Cabecalho/>
            <Banner/>
            <Superior/>
            <Meio/>
            <Inferior/>
            <Rodape/>
        </main>
    )
}

export default PaginaInicial;