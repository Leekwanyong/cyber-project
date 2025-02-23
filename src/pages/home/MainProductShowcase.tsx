import styled from '@emotion/styled';
import Ps5 from '../../assets/PlayStation.png';
import MacBook from '../../assets/MacBookPro.png';
import AirPodMax from '../../assets/AirPodsMax.png';
import VisionPro from '../../assets/VIsionPro.png';
import Button from '../../components/common/Button/Button';

const Wrapper = styled.section`
  display: grid;
  grid-template-areas:
    'ps5 ps5  macbook  macbook'
    'max vision macbook macbook';
`;

const Ps5Wrapper = styled.section`
  grid-area: ps5;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  word-wrap: break-word;
  div {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 49px;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #909090;
  line-height: 24px;
`;

const MackBookWrapper = styled.section`
  grid-area: macbook;
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-wrap: break-word;
  div {
    padding: 2rem;
  }
`;

const MackBookTitle = styled.h2`
  font-size: 64px;
  font-weight: 100;
  line-height: 56px;
  span {
    font-weight: 100;
  }
`;

const MackBookSubTitle = styled.p`
  color: #909090;
  font-size: 14px;
  line-height: 24px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const AirPodsWrapper = styled.section`
  grid-area: max;
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-wrap: break-word;
  div {
    padding: 2rem;
  }
`;

const AirPodsTitle = styled.h2`
  font-size: 29px;
  line-height: 40px;
`;

const AirPodsSubTitle = styled.p`
  line-height: 24px;
  color: #909090;
  font-size: 14px;
`;

const VisionWrapper = styled.section`
  grid-area: vision;
  background-color: #353535;
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-wrap: break-word;
  div {
    padding: 2rem;
  }
`;

const VisionTitle = styled.h2`
  font-size: 29px;
  line-height: 40px;
  color: white;
`;

const VisionSubTitle = styled.p`
  color: #909090;
  font-size: 14px;
  line-height: 24px;
`;

function MainProductShowcase() {
  return (
    <Wrapper>
      <Ps5Wrapper>
        <img src={Ps5} alt="Playstation 5" />
        <div>
          <Title>Playstation 5</Title>
          <SubTitle>
            Incredibly powerful CPUs, GPUs, and an SSD with <br />
            integrated I/O will redefine your PlayStation <br />
            experience
          </SubTitle>
        </div>
      </Ps5Wrapper>
      <MackBookWrapper>
        <div>
          <MackBookTitle>
            Macbook <span>Air</span>
          </MackBookTitle>
          <MackBookSubTitle>
            The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid
            Retina display.
          </MackBookSubTitle>
          <Button size="medium" color="mediumBlack">
            Shop Now
          </Button>
        </div>
        <img src={MacBook} alt="Macbook Air" />
      </MackBookWrapper>
      <AirPodsWrapper>
        <img src={AirPodMax} alt="Apple AirPods Max" />
        <div>
          <AirPodsTitle>
            Apple <br /> AirPods <br /> Max
          </AirPodsTitle>
          <AirPodsSubTitle>
            Computational audio. <br /> Listen, powerful.
          </AirPodsSubTitle>
        </div>
      </AirPodsWrapper>
      <VisionWrapper>
        <img src={VisionPro} alt="Apple Vision Pro" />
        <div>
          <VisionTitle>
            Apple <br /> Vision Pro
          </VisionTitle>
          <VisionSubTitle>
            An immersive way to <br /> experience <br /> entertainment.
          </VisionSubTitle>
        </div>
      </VisionWrapper>
    </Wrapper>
  );
}

export default MainProductShowcase;
