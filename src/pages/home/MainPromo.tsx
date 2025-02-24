import styled from '@emotion/styled';
import Promo from '../../assets/Promo.png';
import Button from '../../components/common/Button/Button';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  left: 30%;
  text-align: center;
  word-wrap: break-word;

  h1 {
    color: white;
    font-size: 72px;
    line-height: 72px;
    margin-bottom: 1rem;
  }

  p {
    line-height: 32px;
    color: #787878;
    margin-bottom: 1rem;
  }
`;

function MainPromo() {
  return (
    <Wrapper>
      <img src={Promo} alt="promo" />
      <TextWrapper>
        <h1>Big Summer Sale</h1>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <Button size="medium" color="mediumWhite">
          Shop Now
        </Button>
      </TextWrapper>
    </Wrapper>
  );
}

export default MainPromo;
