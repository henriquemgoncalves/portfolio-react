import banner from './frontend.jpg';
import styled from 'styled-components';

const BannerEstilizado = styled.section`
    width: 100%;
    border-bottom: 3px solid #F5F5F5;

    img{
        width: 100%;
        height: 200px;
    }

    @media (max-width: 330px){
        img{
            height: 100px;
        }
    }
`

function Banner(){
    return(
        <BannerEstilizado>
            <img src={banner} alt=''/>
        </BannerEstilizado>
    )
}

export default Banner;