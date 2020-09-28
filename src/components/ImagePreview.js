import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
`;
export default function ImagePreview({ src }) {
  return (
    <StyledWrapper>
      <img src={src} alt="效果预览图" />
    </StyledWrapper>
  );
}
