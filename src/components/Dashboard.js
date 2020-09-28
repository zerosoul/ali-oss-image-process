import React from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
const StyledWrapper = styled.section`
  display: flex;
`;
export default function Dashboard() {
  return (
    <StyledWrapper>
      <Tabs>
        <div label="缩放">
          <input type="progress" />
        </div>
        <div label="压缩">
          <input type="progress" />
        </div>
        <div label="模糊">
          <input type="progress" />
        </div>
      </Tabs>
    </StyledWrapper>
  );
}
