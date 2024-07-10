import minhaFoto from './euu.jpg';
import styled from "styled-components";
import wall from './wall.png';
import { Link } from 'react-router-dom';

const SecaoEstilizada = styled.section`
    padding: 10px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: 100%;
    gap: 20px;
    border-bottom: 2px solid #F5F5F5;

    h1{
        font-family: "Raleway", sans-serif;
        color: #FFB000;
        font-size: 30px;
    }

    .sobre{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border-radius: 60px;
        border: solid 3px #FFB000;
        transition: transform 0.7s;
        box-shadow: rgba(255, 176, 0, 0.56) 0px 22px 70px 4px;
    }

    .sobre:hover{
        transform: scale(1.1);
    }

    img{
        width: 400px;
        height: 460px;
        border-radius: 60px;
    }

    .sobre p {
        font-size: 14px;
        display: flex;
        align-items: center;
        color: #393646;
        text-decoration: underline #393646;
    }

    @media (max-width: 540px){

        .sobre {
            width: 100%;
            height: auto;
            padding: 0;
        }

        .sobre:hover{
            transform: scale(1.0);
        }

        img{
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 300px){
        h1{
            font-size: 16px;
        }
    }
`

function Superior(){
    return(
        <SecaoEstilizada style={{backgroundImage: `url(${wall})`}}>
            <h1>
                "Procuro um primeiro emprego na área 
                de Tecnologia onde eu possa demonstrar 
                todo o meu Potêncial."
            </h1>
            <Link to="/sobremim">
                <div className='sobre'>
                   <img src={minhaFoto} alt=""/>
                    <p>Clique na foto...</p> 
                </div>
                
            </Link>
            
        </SecaoEstilizada>
    )
}

export default Superior;