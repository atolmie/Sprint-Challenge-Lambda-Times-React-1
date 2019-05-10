import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => <Tab key={tab}
          selectTabHandler={props.selectTabHandler}
          selectedTab={props.selectedTab} tab={tab} />)}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectTabHandler: PropTypes.func,
};
export default Tabs;


