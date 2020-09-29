import React, { useState } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Range from './Range';
const StyledWrapper = styled.section`
  display: flex;
  .tabs {
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem;
  }
`;
export default function Dashboard() {
  const [width, setWidth] = useState(10);
  const [compressRatio, setCompressRatio] = useState(0);
  return (
    <StyledWrapper>
      <Tabs>
        <div label="缩放">
          <Range label="宽度" value={width} updateValue={setWidth} />
          <Range label="宽度" value={width} updateValue={setWidth} />
        </div>
        <div label="压缩">
          <Range label="压缩比" value={compressRatio} updateValue={setCompressRatio} />
        </div>
        <div label="模糊">
          <Range label="模糊度" value={10} />
        </div>
      </Tabs>
    </StyledWrapper>
  );
}
