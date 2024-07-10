import { useState } from "react";
import styled from "styled-components";
import wall from './banner-internafront.png';
import primeirafoto from './desenvolvedor.jpg';
import segundafoto from './note.jpg';


const ContainerEstilizado = styled.section`
    padding: 20px;
    width: 100%;
    background-size: 100%;
    border-bottom: 5px solid #F5F5F5;

    h1{
        font-family: "Raleway", sans-serif;
        color: #f6f6f6;
        font-size: 28px;
        padding: 20px 5px;
    }

    button {
        padding: 8px 20px;
        border-radius: 15px;
        background-color: black;
        border: 2px solid #FFB000;
        color: #FFB000;
        font-family: "Raleway", sans-serif;
        font-size: 15px;
        font-weight: 800;
    }

    @media (max-width: 440px){

        padding: 20px 0;

        h1{
            font-size: 18px;
            padding: 0;
        }
    }

`

const ModalEstilizada = styled.section`
    padding: 5px;
    border-radius: 30px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-image: linear-gradient(to right, #000000 , #161616);
    position: absolute;
    border: 3px solid #F5F5F5;

    .superior,
    .inferior{
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;
    }

    p{
        font-family: "Raleway", sans-serif;
        color: #f6f6f6;
        font-size: 16px;
        padding: 0 20px;
        font-weight: 300;
    }

    .foto{
        display: flex;
        align-items: center;
        width: 600px;
        height: 150px;
        border-radius: 15px;
    }

    @media (max-width: 790px){
        width: 90%;

        .foto{
            width: 100%;
        }

        p{
            font-size: 14px;

        }
    }
`

const Informacoes = ({onClose}) => {
    return(
        <ModalEstilizada>
            <div className="superior">
                <img className="foto" src={primeirafoto} alt=""/>
                <p>
                    Um desenvolvedor front-end é responsável por criar 
                    a interface do usuário e garantir uma experiência 
                    de usuário excepcional em sites e aplicativos da web.

                    As principais responsabilidades de um desenvolvedor front-end 
                    incluem:

                    1 - Desenvolvimento e implementação de interfaces de usuário 
                    interativas e responsivas.
                    2 - Otimização de desempenho do site para garantir carregamento 
                    rápido e experiência de usuário suave.
                    3 - Colaboração com designers para traduzir mockups e wireframes 
                    em código HTML, CSS e JavaScript.
                    4- Teste e depuração de aplicativos para garantir compatibilidade 
                    entre diferentes navegadores e dispositivos.
                    5 - Manutenção e atualização contínuas de sites e aplicativos para 
                    refletir as últimas tendências e tecnologias.
                </p>
            </div>
            
            <div className="inferior">
                <img className="foto" src={segundafoto} alt="" />
                <p>
                    Estes são os pilares do desenvolvimento front-end.

                    - HTML é a linguagem de marcação que define a estrutura 
                    do conteúdo da página, CSS controla a apresentação e o 
                    estilo, enquanto JavaScript adiciona interatividade e dinamismo.
                    - Familiaridade com frameworks e bibliotecas como Bootstrap, 
                    React.js, Angular.js e Vue.js é essencial para simplificar o 
                    desenvolvimento e aumentar a eficiência.
                    - Com a proliferação de dispositivos móveis, é crucial que 
                    os desenvolvedores front-end compreendam os princípios do 
                    design responsivo para garantir que os sites sejam visualmente 
                    atraentes e funcionais em todas as telas.
                    - O uso de sistemas de controle de versão, como Git, é 
                    fundamental para colaboração eficaz e gerenciamento de código.
                    - Um bom desenvolvedor front-end deve ser capaz de identificar 
                    e resolver problemas de forma eficiente, garantindo a funcionalidade 
                    e a usabilidade do site ou aplicativo.
                    - A tecnologia web está sempre mudando, e os desenvolvedores front-end 
                    devem estar constantemente aprendendo e se adaptando às últimas 
                    tendências e melhores práticas. - Aprender Constantemente: Dedique 
                    tempo para estudar e praticar regularmente. Existem inúmeras 
                    plataformas online, tutoriais e cursos que oferecem recursos para 
                    aprender habilidades de desenvolvimento front-end.
                    - Construir um Portfólio: Crie projetos pessoais e contribua para 
                    projetos de código aberto para construir um portfólio sólido que 
                    demonstre suas habilidades e experiência.
                    - Participar da Comunidade: Junte-se a fóruns, grupos de discussão 
                    e eventos da comunidade para networking e compartilhamento de 
                    conhecimento com outros desenvolvedores front-end.
                    - Estágios e Oportunidades de Trabalho: Considere a possibilidade 
                    de estágios ou freelancing para ganhar experiência prática e 
                    construir sua reputação profissional.
                </p>
            </div>
            <div>
                <button onClick={onClose}>Fechar</button>
            </div>
        </ModalEstilizada>
        
    );
};

function Meio(){
    const [mostrarModal, setMostrarModal] = useState(false);
    
    const saibaMaisClick = () => {
        setMostrarModal(true);
    };

    const fecharModal = () => {
        setMostrarModal(false);
    };

    return(
        <ContainerEstilizado style={{backgroundImage: `url(${wall})`}}>
            <h1>Guia Definitivo para se tornar um Desenvolvedor Front-end</h1>
            <button onClick={saibaMaisClick}>Saíba Mais...</button>
            {mostrarModal && <Informacoes onClose={fecharModal} />}            
        </ContainerEstilizado>
    );
};

export default Meio;