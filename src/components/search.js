import {Col, Form, Input, Row, Select, TreeSelect, Radio} from "antd";
import React, {useState} from "react";

import styles from './contacts.less';

const {Option} = Select;
const {TreeNode} = TreeSelect;

const makeTreeNode = (rankClassificationData, rankClassificationValueKey, rankClassificationNameKey, rankClassification) => {
  if (rankClassificationData && rankClassificationData.length > 0) {
    return rankClassificationData.map(v => {
      return <TreeNode icon={<Radio checked={v.id === rankClassification}/>} value={v[rankClassificationValueKey]}
                       title={v[rankClassificationNameKey]} key={v[rankClassificationValueKey]}>
        {v.children && v.children.length > 0 && makeTreeNode(v.children, rankClassificationValueKey, rankClassificationNameKey, rankClassification)}
      </TreeNode>
    })
  }
}

const formItemLayout = {
  labelCol: {
    xs: {span: 3},
    sm: {span: 3},
  },
  wrapperCol: {
    xs: {span: 21},
    sm: {span: 21},
  },
};

const Search = ({
                  jobsText, rankText, nameText, jobsData, jobsValueKey, jobsNameKey, namePlaceholder,
                  jobsPlaceholder, rankPlaceholder, rankData, rankValueKey, rankNameKey, rankTipPlaceholder,
                  rankClassificationData, rankClassificationValueKey, rankClassificationNameKey, handleSearch
                }) => {

  const [jobs, setJobs] = useState(null);
  const [rank, setRank] = useState(null);
  const [name, setName] = useState(null);
  const [rankClassification, setRankClassification] = useState(null);


  const jobsOnSelect = (val,option) => {
    const obj = option.props['obj-data'];
    setJobs(obj);
    handleSearch(obj, name, rank, rankClassification);
  }

  const rankOnSelect = (val,option) => {
    const obj = option.props['obj-data'];
    setRank(obj);
    handleSearch(jobs, name, obj, rankClassification);
  }

  const nameSearch = (val) => {
    setName(val);
    handleSearch(jobs, val, rank, rankClassification);
  }

  const rankClassificationOnChange = (val,label) => {
    const obj = {};
    obj[rankClassificationValueKey]=val;
    obj[rankClassificationNameKey]=label.length>0?label[0]:null;
    setRankClassification(obj);
    handleSearch(jobs, name, rank, obj);
  }

  return <Form {...formItemLayout} className={styles.search}>
    <Row>
      <Col span={12} style={{height: 50}}>
        <Form.Item label={jobsText}>
          <Select style={{width: 279}} placeholder={jobsPlaceholder} onSelect={jobsOnSelect}>
            {jobsData && jobsData.map(v => <Option value={v[jobsValueKey]} obj-data={v}
                                                   key={v[jobsValueKey]}>{v[jobsNameKey]}</Option>)}
          </Select>
        </Form.Item>
      </Col>
      <Col span={12} style={{paddingLeft: '12px', height: 50}}>
        <Form.Item label={nameText}>
          <Input.Search placeholder={namePlaceholder} style={{width: 279}} onSearch={nameSearch}/>
        </Form.Item>
      </Col>
      <Col span={12} style={{height: 50}}>
        <Form.Item label={rankText}>
          <Select style={{width: 279}} placeholder={rankPlaceholder} onSelect={rankOnSelect}>
            {rankData && rankData.map(v => <Option value={v[rankValueKey]}
                                                   key={v[rankValueKey]}>{v[rankNameKey]}</Option>)}
          </Select>
        </Form.Item>
      </Col>
      <Col span={12} style={{paddingLeft: '12px', height: 50}}>
        <span>-</span>
        <TreeSelect
          style={{width: 279, marginLeft: 34}}
          dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
          placeholder={rankTipPlaceholder}
          treeIcon={true}
          allowClear
          onChange={rankClassificationOnChange}
        >
          {makeTreeNode(rankClassificationData, rankClassificationValueKey, rankClassificationNameKey, rankClassification)}
        </TreeSelect>
      </Col>
    </Row>
  </Form>
}

export default Form.create()(Search);
