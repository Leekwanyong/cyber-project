/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const loadingAnimation = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 200px 0;
    }
`;

const WrapperDiv = styled.div`
  width: 24%;
  text-align: center;
`;

const SkeletonBox = styled.div`
  width: 220px;
  margin: 0 auto;
  height: 220px;
  background: linear-gradient(90deg, #eee, #ddd, #eee);
  border-radius: 8px;
  animation: ${loadingAnimation} 1.5s infinite;
`;

const SkeletonText = styled.div`
  width: 80%;
  height: 16px;
  margin: 10px auto;
  background: linear-gradient(90deg, #eee, #ddd, #eee);
  border-radius: 4px;
  animation: ${loadingAnimation} 1.5s infinite;
`;

function Skeleton() {
  return (
    <WrapperDiv>
      <SkeletonBox />
      <div style={{ padding: '10px' }}>
        <SkeletonText />
        <SkeletonText />
      </div>
      <div>
        <SkeletonText style={{ width: '50%' }} />
      </div>
    </WrapperDiv>
  );
}

export default Skeleton;
