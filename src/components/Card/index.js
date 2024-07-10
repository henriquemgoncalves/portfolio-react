import styled from "styled-components";
import cinetag from './cinetag.png';
import geek from './geek.png';
import mario from './mario.png';
import numero from './n_sec.png';
import odonto from './odonto.png';
import organo from './organo.png';
import { Link } from "react-router-dom";

const CardEstilizado = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px;
    background-image: linear-gradient(to right, #2B2B2B , #000000);
    border-bottom: 3px solid #F5F5F5;

    h3{
        color: #F5F5F5;
        font-size: 24px;
        font-family: "Raleway", sans-serif;
        font-weight: 600;
    }

    p{
        font-family: "Raleway", sans-serif;
        font-size: 18px;
        color: #F5F5F5;
        width: 80%;
    }

    .containerCards{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }
`

const Cards = styled.div`
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: solid 3px #FFB000;
    border-radius: 15px;
    padding: 5px;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    a{
        text-decoration: none;
    }

    p{
        color: #F5F5F5;
        font-size: 16px;
        font-family: "Raleway", sans-serif;
    }

    @media (max-width: 450px){
        width: 100%;
        height: auto;
    }
`

function Card(){
    return(
        <CardEstilizado>
            <h3>Projetos</h3>
            <p>Esses são projetos interessantes para praticar habilidades de desenvolvimento web com HTML, CSS e 
                JavaScript. Eles oferecem uma oportunidade de aplicar conceitos e técnicas aprendidas, além de serem 
                divertidos de criar e testar.
            </p>
            <div className="containerCards">
                <Cards>
                    <Link to="https://cinetag-wine.vercel.app/">
                        <p>Cinetag</p>
                        <img src={cinetag} alt=""/>
                    </Link>      
                </Cards>
                <Cards>
                    <Link to="https://alurageek-challenge-olive.vercel.app/">
                        <p>AluraGeek</p>
                        <img src={geek} alt=""/>
                    </Link>      
                </Cards>
                <Cards>
                    <Link to="https://mario-bros-game-two.vercel.app/">
                        <p>Mario Bros(Jogo)</p>
                        <img src={mario} alt=""/>
                    </Link>      
                </Cards>
                <Cards>
                    <Link to="https://jogo-numero-secreto-six-rouge.vercel.app/">
                        <p>Numero Secreto(Jogo)</p>
                        <img src={numero} alt=""/>
                    </Link>      
                </Cards>
                <Cards>
                    <Link to="https://projeto-uscs.vercel.app/">
                        <p>Odontologia</p>
                        <img src={odonto} alt=""/>
                    </Link>      
                </Cards>
                <Cards>
                    <Link to="https://projeto-organo-delta.vercel.app/">
                        <p>Organo</p>
                        <img src={organo} alt=""/>
                    </Link>      
                </Cards>
            </div>            
        </CardEstilizado>
    )
}

export default Card;