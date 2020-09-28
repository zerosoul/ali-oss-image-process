import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  display: flex;
`;

const Tab = ({ label, onClick = () => {}, cName = '' }) => {
  return (
    <li className={cName} onClick={onClick}>
      {label}
    </li>
  );
};
export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label || '');
  const onClickTabItem = (label) => {
    setActiveTab(label);
  };
  return (
    <StyledWrapper>
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props;

          return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />;
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
