import { Link } from 'react-router-dom';
import logo from './code.png';
import CabecalhoLink from '../CabecalhoLink';
import styled from 'styled-components';

const CabecalhoEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    background-color: #FFB000;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-weight: 800;
    border-bottom: 3px solid #F5F5F5;

    img{
        width: 50px;
        height: 50px;
    }

    .links{
        display: flex;
        gap: 20px;  
    }

    a {  
        color: #000000;
        text-decoration: none;
    }

    //.link_home p{
    //   padding: 10px 20px;
    //    background-color: #000000;
    //    color: #FFB000;
    //    border-radius: 10px;
    //}

    //.link_project p{
    //    padding: 10px 20px;
    //    background-color: #FFB000;
    //    color: #000000;
    //    border-radius: 10px;
    //}

    @media (max-width: 300px){
        p {
            font-size: 14px;
        }
    }
`

function Cabecalho(){
    return(
        <CabecalhoEstilizado>   
            <img src={logo} alt=''/>
            <div className='links'>
                <CabecalhoLink>
                    <Link to="/" className='link_home'>
                        <p>Home</p>
                    </Link>                   
                </CabecalhoLink>
                <CabecalhoLink>
                    <Link to="/projetos" className='link_project'>
                        <p>Projetos</p>
                    </Link>                    
                </CabecalhoLink>
            </div>
        </CabecalhoEstilizado>
    )
}

export default Cabecalho;