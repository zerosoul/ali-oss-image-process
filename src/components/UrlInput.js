import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  display: flex;
  padding: 1rem 0.5rem;
  width: 40rem;
  .url_input {
    padding: 0.4rem 0.5rem;
    border: 1px solid #333;
    border-radius: 0.5rem;
    width: 100%;
  }
`;
export default function UrlInput({ url, updateUrl }) {
  const [currUrl, setCurrUrl] = useState(url);
  const handleChange = (evt) => {
    setCurrUrl(evt.target.value);
  };
  const handleUpdate = () => {
    updateUrl(currUrl);
  };
  return (
    <StyledWrapper>
      <input
        onChange={handleChange}
        className="url_input"
        type="url"
        value={currUrl}
        placeholder="请输入阿里云图片URL"
      />
      <button onClick={handleUpdate}>确定</button>
    </StyledWrapper>
  );
}
