import {Table} from "antd";
import React, {useEffect, useState} from "react";

import styles from './contacts.less';
import emptyImg from "./meeting_attendee_default.png";


export default ({
                  jobsText, nameText, rankText, workNumberNumber, functionText, userData, selectUser, setSelectUser,
                  updateSelectUsers, tableColumnsKey, emptyTip, tableRowKey, tableCheckboxDisabled
                }) => {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    const users = [];
    userData.records.forEach((v, index) => {
      const tmp = selectUser.find(user => user[tableRowKey] === v[tableRowKey]);
      if (tmp) {
        users.push(tmp[tableRowKey]);
      }
    });
    setSelectedRowKeys(users);
  }, [selectUser, tableRowKey, userData.records]);

  const columns = [
    {
      title: nameText,
      dataIndex: tableColumnsKey[0],
    },
    {
      title: workNumberNumber,
      dataIndex: tableColumnsKey[1],
    },
    {
      title: functionText,
      dataIndex: tableColumnsKey[2],
    },
    {
      title: rankText,
      dataIndex: tableColumnsKey[3],
    }, {
      title: jobsText,
      dataIndex: tableColumnsKey[4],
    }
  ];

  const onSelectAll = (selected, selectedRows, changeRows) => {
    if (selected) {
      const tmp = [];
      changeRows.forEach(record => {
        tmp.push(record);
      })
      const newList = selectUser.concat(tmp);
      setSelectUser(newList);
      updateSelectUsers(newList);
    } else {
      let result = selectUser;
      changeRows.forEach(record => {
        result = result.filter(value => value[tableRowKey] !== record[tableRowKey]);
      })
      setSelectUser(result);
      updateSelectUsers(result)
    }
  }

  const onSelect = (record, selected) => {
    if (selected) {
      const tmp = [];
      tmp.push(record);
      const newList = selectUser.concat(tmp);
      setSelectUser(newList);
      updateSelectUsers(newList);
    } else {
      const result = selectUser.filter(value => value[tableRowKey] !== record[tableRowKey]);
      setSelectUser(result);
      updateSelectUsers(result)
    }
  }

  const rowSelection = {
    selectedRowKeys,
    onSelect: onSelect,
    onSelectAll: onSelectAll,
    columnWidth: 20,
    getCheckboxProps: record => {
      if (tableCheckboxDisabled.length === 0) {
        return {disabled: false}
      }
      return {disabled: tableCheckboxDisabled.indexOf(record[tableRowKey]) !== -1}
    }
  };

  return (
    <div className={styles.userList}>
      <Table size={'small'} rowSelection={rowSelection} columns={columns} style={{height:320,overflowY:'auto'}}
             dataSource={userData.records} pagination={false} rowKey={record => record[tableRowKey]}
             locale={{
               emptyText: <div style={{marginTop: 24}}><img alt={'f'} style={{width: 80, height: 80}}
                                                            src={emptyImg}/><br/>
                 <div style={{height: 10}}/>
                 <span style={{marginTop: 10}}>{emptyTip}</span></div>
             }}
      />
    </div>)
}
