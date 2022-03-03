import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 16;
  width: 50%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0%;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 12px;
  user-select: none;
  cursor: pointer;
  margin: 10px 8px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
  }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  padding: 12px;
  border: 1px solid #ccc;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  display: none;

  &.is-selected {
      display: block;
  }
`;
WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div `
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  `;

export const WrapperResultsCount = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #3D5A80;
padding: 0 4px;
font-size: 14px;

`;