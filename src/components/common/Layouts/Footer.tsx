import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ASSISTANCE_MENU, SERVICES_MENU } from '../../../types/footer';
import { FacebookIcon, InstagramIcon, TiktokIcon, TwitterIcon } from '../Icon/index';

/** @jsxImportSource @emotion/react */

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: black;
  gap: 2rem;
  padding: 104px 160px;
  width: 100%;
`;
const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  color: white;
  width: 80%;
`;
const UlWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

function Footer() {
  return (
    <Wrapper>
      <FooterWrapper>
        <div>
          <div>
            <h3
              css={css`
                margin-bottom: 1rem;
              `}
            >
              Cyber
            </h3>
            <p
              css={css`
                line-height: 1.3rem;
              `}
            >
              We are a residential interior design firm located in <br />
              Portland. Our boutique-studio offers more than
            </p>
          </div>
        </div>
        <div>
          <h3
            css={css`
              margin-bottom: 0.5rem;
            `}
          >
            Services
          </h3>
          <UlWrapper>
            {SERVICES_MENU.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </UlWrapper>
        </div>
        <div>
          <h3
            css={css`
              margin-bottom: 0.5rem;
            `}
          >
            Assistance to the buyer{' '}
          </h3>
          <UlWrapper>
            {ASSISTANCE_MENU.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </UlWrapper>
        </div>
      </FooterWrapper>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        `}
      >
        <TwitterIcon />
        <FacebookIcon />
        <TiktokIcon />
        <InstagramIcon />
      </div>
    </Wrapper>
  );
}

export default Footer;
