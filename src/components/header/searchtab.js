import React, { Component } from 'react'
import '../../index.css';
import { Icon, Input, AutoComplete } from 'antd';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;


const dataSource = [{
    title: 'Psychology',
    children: [{
      title: 'SOmeBook',
      count: 100,
    }, {
      title: 'Dental',
      count: 102,
    }],
  }, {
    title: 'Some Other category',
    children: [{
      title: 'some other books again',
      count: 200,
    }, {
      title: 'some title again',
      count: 30,
    }],
  }, {
    title: 'Neuro',
    children: [{
      title: 'Some books again',
      count: 10,
    }],
  }];
  
  function renderTitle(title) {
    return (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >search
        </a>
      </span>
    );
  }
  
  const options = dataSource.map(group => (
    <OptGroup
      key={group.title}
      label={renderTitle(group.title)}
    >
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
          <span className="certain-search-item-count">{opt.count} </span>
        </Option>
      ))}
    </OptGroup>
  )).concat([
    <Option disabled key="all" className="show-all">
      <a
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
       search more
      </a>
    </Option>,
  ]);

export default class Searchtab extends Component {
  render() {
    return (
      <div>
        <div className="certain-category-search-wrapper" style={{ width: 400 }}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: '100%' }}
        dataSource={options}
        placeholder="Search books"
        optionLabelProp="value"
      >
        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    </div>
      </div>
    )
  }
}
