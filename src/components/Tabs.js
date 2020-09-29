import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  display: flex;
  .tab-list {
    display: flex;
    flex-direction: column;
  }
`;
const StyledTab = styled.li`
  padding: 0.4rem;
  border: 1px solid #555;
  border-radius: 0.5rem;
  cursor: pointer;
  &.active {
    background: red;
  }
`;

const Tab = ({ label, activeTab, updateLabel = () => {}, cName = '' }) => {
  const handleClick = () => {
    updateLabel(label);
  };
  return (
    <StyledTab onClick={handleClick} className={`${cName} ${activeTab === label && 'active'}`}>
      {label}
    </StyledTab>
  );
};
export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label || '');
  const onClickTabItem = (label) => {
    setActiveTab(label);
  };
  return (
    <StyledWrapper className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab activeTab={activeTab} key={label} label={label} updateLabel={onClickTabItem} />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </StyledWrapper>
  );
}
