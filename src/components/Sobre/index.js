import styled from "styled-components";
import frontdev from './front.gif';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-image: linear-gradient(to right, #2B2B2B , #000000);
    border-bottom: 3px solid #F5F5F5;

    img{
        width: 800px;
        height: 500px;
        border: solid 3px #FFB000;
        border-radius: 10px;
        padding: 15px;
    }

    p{
        width: 90%;
        font-size: 20px;
        font-family: "Raleway", sans-serif;
        color: #F5F5F5;
        font-weight: 400;
    }

    @media (max-width: 870px){
        img{
            width: 100%;
            height: auto;
        }
            p{
                width: 100%;
                font-size: 16px;
            }
        }

    
`

function Informacoes(){
    return(
        <Container>
            <img src={frontdev} alt=""/>
            <p>
                Sou um Profissional dedicado com 17 anos de experiência na 
                indústria de manutenção de ar condicionado, buscando fazer 
                uma transição de carreira para área de Tecnologia. Com 35 
                anos de idade, estou comprometido em ingressar na área de 
                desenvolvimento front-end, onde minha paixão pela resolução 
                de problemas e minha habilidade para aprender novas tecnologias 
                serão aproveitadas ao máximo. Estou entusiasmado com a oportunidade 
                de contribuir para equipes dinâmicas e colaborativas, onde possa 
                aplicar minha determinação e minha capacidade de adaptação em um 
                ambiente desafiador e estimulante.<br></br>
                <br></br>
                Motivado pela paixão e pelo desejo de mergulhar na vanguarda da 
                inovação, estou embarcando em uma transição de carreira para me 
                tornar um desenvolvedor front-end. Minha jornada até aqui me proporcionou 
                habilidades valiosas, como resiliência, capacidade analítica e um forte 
                compromisso com a excelência. Agora, estou ansioso para aplicar essas 
                habilidades em um contexto tecnológico, onde posso aprender e crescer 
                continuamente. Investi em cursos e certificações relevantes para 
                aprimorar minhas habilidades técnicas e estou comprometido em me 
                manter atualizado com as últimas tendências e tecnologias do setor.<br>
                </br>
                Estou pronto para abraçar os desafios e as oportunidades que a área 
                de tecnologia oferece, enquanto me esforço para alcançar novos 
                patamares de excelência profissional e pessoal.
            </p>

        </Container>
    )
}

export default Informacoes;