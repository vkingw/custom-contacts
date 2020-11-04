import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Form,
  Row,
  Spin,
  Tag,
  Icon,
  message, Pagination,
} from 'antd';

import Search from './search';
import UserList from './userList';
import styles from './contacts.less';

const Contacts = (props) => {

  const {
    loading = false,
    numberColor, totalShowText, handleSearchUser, updateSelectUsers, defaultUserSelected,

    jobsText, nameText, rankText, workNumberNumber, functionText, jobsData,
    jobsValueKey, jobsNameKey, namePlaceholder, jobsPlaceholder, rankPlaceholder, rankData,
    rankValueKey, rankNameKey, rankTipPlaceholder, rankClassificationData, rankClassificationValueKey,
    rankClassificationNameKey, tableColumnsKey, tableRowKey, emptyTip,  showTagKey, showTagName
  } = props;

  /**
   * 处理查询结果为空
   */
  let {searchResult} = props;
  if (!searchResult || !searchResult.hasOwnProperty('size')) {
    searchResult = {
      records: [],
      total: 0,
      size: 9,
      current: 0,
      pages: 1,
    }
  }

  const [selectUser, setSelectUser] = useState([]);
  const [searchKey, setSearchKey] = useState(null);

  useEffect(() => {
    const defaultUser = defaultUserSelected.map(v=>{
      v[tableRowKey]=v[showTagKey];
      v[tableColumnsKey[0]]=v[showTagName];
      return v;
    })
    updateSelectUsers(defaultUser);
    setSelectUser(defaultUser);
  }, [defaultUserSelected, showTagKey, showTagName, tableColumnsKey, tableRowKey, updateSelectUsers]);

  /**
   * 按照查询form中的参数查询
   * @param jobs
   * @param name
   * @param rank
   * @param rankClassification
   */
  const handleSearch = (jobs, name, rank, rankClassification) => {
    if (handleSearchUser) {
      setSearchKey({
        jobs, name, rank, rankClassification
      });
      handleSearchUser(0, jobs, name, rank, rankClassification);
    } else {
      message.error('search function not found.');
    }
  };

  /**
   * 翻页查询
   * @param page
   */
  const handlePaginationSearch = (page) => {
    if (handleSearchUser) {
      if (searchKey) {
        const {jobs, name, rank, rankClassification} = searchKey;
        handleSearchUser(page, jobs, name, rank, rankClassification);
      } else {
        handleSearchUser(page, null, null, null, null);
      }
    } else {
      message.error('search function not found.');
    }
  }

  /**
   * 生成显示的用户Tag
   * @param v
   * @return {*}
   */
  const makeUserTag = v => {
    return (
      <Tag
        key={v[tableRowKey]}
        className={styles.userTag}
        onClick={e => {
          e.preventDefault();
          unCheckUser(v);
        }}
      >
        {v[tableColumnsKey[0]]} <Icon type="close-circle" theme="filled"
                                      style={{width: 14, height: 14, color: '#E65653'}}/>
      </Tag>
    );
  };

  /**
   * 点击用户Tag时取消选择
   * @param data
   */
  const unCheckUser = data => {
    const tmp = [];
    const result = selectUser.filter(value => value[tableRowKey] !== data[tableRowKey]);
    const userList = result.concat(tmp);
    updateSelectUsers(userList);
    setSelectUser(userList);
  };

  const makeShowMsg = () => {
    const tmp = totalShowText.split('$');
    let font = '';
    let end = '';
    if (tmp.length === 2) {
      font = tmp[0];
      end = tmp[1];
    } else {
      font = totalShowText;
    }
    return (
      <div>{font} <span
        style={{color: numberColor}}>{selectUser.length}</span> {end}
      </div>
    );
  };


  return (
    // <div style={{ height: '100%',width:'690px', padding:'22px 12px 10px 12px' }}>
    <div style={{height: '100%', width: '690px'}}>
      <Spin spinning={loading}>
        <div className={styles.upside}>
          <Search jobsText={jobsText} nameText={nameText} rankText={rankText} jobsData={jobsData}
                  jobsValueKey={jobsValueKey} jobsNameKey={jobsNameKey} namePlaceholder={namePlaceholder}
                  jobsPlaceholder={jobsPlaceholder} rankPlaceholder={rankPlaceholder} rankData={rankData}
                  rankValueKey={rankValueKey} rankNameKey={rankNameKey} rankTipPlaceholder={rankTipPlaceholder}
                  rankClassificationData={rankClassificationData}
                  rankClassificationValueKey={rankClassificationValueKey}
                  rankClassificationNameKey={rankClassificationNameKey}
                  handleSearch={handleSearch}/>


          <UserList jobsText={jobsText} nameText={nameText} rankText={rankText} userData={searchResult}
                    functionText={functionText} workNumberNumber={workNumberNumber} selectUser={selectUser}
                    setSelectUser={setSelectUser} updateSelectUsers={updateSelectUsers}
                    tableColumnsKey={tableColumnsKey}
                    emptyTip={emptyTip} tableRowKey={tableRowKey}/>
        </div>
        <div className={styles.pagination}>
          <Pagination
            className={styles.pageNoe}
            simple
            current={searchResult.current || 1}
            pageSize={searchResult.size}
            total={searchResult.total}
            onChange={handlePaginationSearch}
          />
        </div>
        <Row style={{height: 150}}>
          <Col span={24} style={{paddingTop: 8, paddingBottom: 0}}>
            <Form colon={false}>
              <Form.Item className={styles.label} label={makeShowMsg()}>
                <div className={styles.resultDiv}>
                  {selectUser && selectUser.map(v => makeUserTag(v))}
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Spin>
    </div>
  )

};

Contacts.propTypes = {
  loading: PropTypes.bool,
  searchResult: PropTypes.object,
  handleSearchUser: PropTypes.func.isRequired,
  updateSelectUsers: PropTypes.func.isRequired,
  defaultUserSelected: PropTypes.array,
  debug: PropTypes.bool,
  numberColor: PropTypes.string,
  totalShowText: PropTypes.string,

  jobsText: PropTypes.string,
  nameText: PropTypes.string,
  rankText: PropTypes.string,
  workNumberNumber: PropTypes.string,
  functionText: PropTypes.string,
  namePlaceholder: PropTypes.string,
  jobsPlaceholder: PropTypes.string,
  rankPlaceholder: PropTypes.string,
  rankTipPlaceholder: PropTypes.string,
  jobsData: PropTypes.array,
  jobsValueKey: PropTypes.string,
  jobsNameKey: PropTypes.string,
  rankData: PropTypes.array,
  rankValueKey: PropTypes.string,
  rankNameKey: PropTypes.string,
  rankClassificationData: PropTypes.array,
  rankClassificationValueKey: PropTypes.string,
  rankClassificationNameKey: PropTypes.string, tableColumnsKey: PropTypes.array,
  tableRowKey: PropTypes.string,
  emptyTip: PropTypes.string,
  showTagKey:PropTypes.string,
  showTagName:PropTypes.string,
};

Contacts.defaultProps = {
  loading: false,
  searchResult: {
    records: [],
    total: 0,
    size: 9,
    current: 0,
    pages: 1,
  },
  defaultUserSelected: [],
  numberColor: '#E65653',
  debug: false,
  totalShowText: '共选择了$个',

  jobsText: '岗位',
  nameText: '姓名',
  rankText: '职级',
  workNumberNumber: '工号',
  functionText: '职能',
  namePlaceholder: '请输入搜索姓名',
  jobsPlaceholder: '请选择岗位',
  rankPlaceholder: '请选择职级',
  rankTipPlaceholder: '请选择职级分类或级别',
  jobsData: [],
  jobsValueKey: 'id',
  jobsNameKey: 'name',
  rankData: [],
  rankValueKey: 'id',
  rankNameKey: 'name',
  rankClassificationData: [],
  rankClassificationValueKey: 'id',
  rankClassificationNameKey: 'name',
  tableColumnsKey: ['name', 'workNumberNumber', 'fun', 'rank', 'jobs'],
  tableRowKey: 'id',
  emptyTip: '什么都没有哦~',
  showTagKey:'workNumber',
  showTagName:'realName'
};

export default Contacts;
