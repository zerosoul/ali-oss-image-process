import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  label {
    font-size: 0.8rem;
    color: #666;
    padding-right: 0.4rem;
    &:after {
      content: ':';
    }
  }
  .tip {
    font-size: 1rem;
    padding: 0.4rem;
  }
  input[type='range'] {
    -webkit-appearance: none;
    margin: 1rem 0;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.4rem;
    cursor: pointer;
    background: #03a9f4;
    border-radius: 25px;
  }
  input[type='range']::-webkit-slider-thumb {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 1);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.6rem;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #03a9f4;
  }
`;
export default function Range({
  label = 'range',
  value = 0,
  updateValue,
  step = 1,
  min = 0,
  max = 100
}) {
  const handleUpdateValue = (evt) => {
    updateValue(evt.target.value);
  };
  return (
    <StyledWrapper>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        step={step}
        min={min}
        max={max}
        type="range"
        value={value}
        onChange={handleUpdateValue}
      />
      <div className="tip">{value}</div>
    </StyledWrapper>
  );
}
