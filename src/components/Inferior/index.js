import back from './machine.gif';
import styled from 'styled-components';

const InferiorEstilizado = styled.div`
    width: 100%;
    border-bottom: 5px solid #F5F5F5;

    img{
        width: 100%;
        height: 500px;
    }

    @media (max-width: 420px){
        img{
            height: 250px;
        }
    }


`

function Inferior(){
    return(
        <InferiorEstilizado>
            <img src={back} alt='' />
        </InferiorEstilizado>
    )
}

export default Inferior;