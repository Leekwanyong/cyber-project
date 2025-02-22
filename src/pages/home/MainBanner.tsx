/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Iphone from '../../assets/Iphone.png';

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
`;

const MainTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  color: white;
  word-wrap: break-word;
`;

const MainTextTitle = styled.p`
  font-size: clamp(36px, 6vw, 96px);
  line-height: 1.2;
  font-weight: bold;

  span {
    color: #ffcc00;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
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
              `}
            >
              Created to change everything for the better. For everyone
            </p>
          </MainTextContainer>
          <StyledImage src={Iphone} alt="iphone" />
        </MainBannerContainer>
      </MainWrapper>
    </section>
  );
}

export default MainBanner;
