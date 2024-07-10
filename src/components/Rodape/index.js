import linkedin from './linkedin.png';
import github from './github.png';
import styled from 'styled-components';

const RodapeEstilizado = styled.footer`padding: 10px;
    padding: 0 0 20px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFB000;
    

    h2{
        padding: 0;
        font-size: 28px;
        font-family: "Raleway", sans-serif;
        font-weight: 700;
    }

    .sociais{
        display: flex;
        flex-direction: row;
        gap: 40px;
    }

    img{
        width: 30px;
        height: 30px;
    }

    @media (max-width: 420px){
        h2{
            font-size: 16px;
        }

        img{
            width: 20px;
            height: 20px;
        }

    }
`

function Rodape(){
    return(
        <RodapeEstilizado>
            <h2>Desenvolvido por Henrique.</h2>
            <div className='sociais'>
                <a href='https://www.linkedin.com/in/henrique-madruga-gonçalves-044a072aa'>
                    <img src={linkedin} alt=""/>
                </a>
                <a href='https://www.github.com/henriquemgoncalves'>
                    <img src={github} alt="" />
                </a>
            </div>
        </RodapeEstilizado>
    )
}

export default Rodape;