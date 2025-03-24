/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Iphone from '../../assets/Iphone.png';
import Button from '../../components/common/Button/Button';
import DefaultImg from '../../assets/defaultImg.png';
import imageFallbackHandler from '../../utils/image';

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(91deg, #211c24 0%, #211c24 100%);
`;

const MainBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 7rem;
    padding: 0;
  }
`;

const MainTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  color: white;
  word-wrap: break-word;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 40%;
  }
`;

const MainTextTitle = styled.p`
  font-size: clamp(36px, 6vw, 76px);
  line-height: 1.2;
  font-weight: bold;

  span {
    background: linear-gradient(45deg, #d4af37, #f7e7ce, #e6c200);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  @media (max-width: 768px) {
    font-size: clamp(28px, 5vw, 60px);
  }
`;

function MainBanner() {
  return (
    <section>
      <MainWrapper>
        <MainBannerContainer>
          <MainTextContainer>
            <p
              css={css`
                opacity: 0.4;
                font-size: clamp(16px, 2vw, 25px);
                line-height: 1.5;
              `}
            >
              Pro. Beyond.
            </p>
            <MainTextTitle>
              IPhone 14 <span>Pro</span>
            </MainTextTitle>
            <p
              css={css`
                color: #909090;
                font-size: clamp(14px, 1.8vw, 18px);
                font-weight: 500;
                line-height: 1.5;
                margin-bottom: 1rem;
              `}
            >
              Created to change everything for the better. For everyone
            </p>
            <div>
              <Button size="medium" color="mediumWhite">
                Shop Now
              </Button>
            </div>
          </MainTextContainer>
          <StyledImage
            src={Iphone}
            alt="Iphone"
            onError={imageFallbackHandler(DefaultImg, Iphone)}
          />
        </MainBannerContainer>
      </MainWrapper>
    </section>
  );
}

export default MainBanner;
