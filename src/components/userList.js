import {Table} from "antd";
import React, {useEffect, useState} from "react";

import emptyImg from "./meeting_attendee_default.png";


export default ({
                  jobsText, nameText, rankText, workNumberNumber, functionText, userData, selectUser, setSelectUser,
                  updateSelectUsers, tableColumnsKey,emptyTip
                }) => {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    const users = [];
    userData.records.forEach((v, index) => {
      const tmp = selectUser.find(user => user.id === v.id);
      if (tmp) {
        users.push(index);
      }
    });
    setSelectedRowKeys(users);
  }, [selectUser, userData.records]);

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

  const onSelectChange = (selectedRowKeysParam, selectedRows) => {
    // if(selectedRowKeys.length > selectedRowKeysParam.length ){
    //   const delList = [];
    //     selectedRowKeys.forEach(v=>{
    //       const tmp = selectedRowKeysParam.find(user=>v.id === user.id);
    //       if(!tmp){
    //         delList.push(v);
    //       }
    //     });
    //     delList.forEach()
    // }else {
    //
    // }
    // setSelectedRowKeys(selectedRowKeysParam);
  }

  const onSelect = (record, selected) => {
    if (selected) {
      const tmp = [];
      tmp.push(record);
      const newList = selectUser.concat(tmp);
      setSelectUser(newList);
      updateSelectUsers(newList);
    } else {
      const result = selectUser.filter(value => value.id !== record.id);
      setSelectUser(result);
      updateSelectUsers(result)
    }
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    onSelect: onSelect,
    columnWidth: 20
  };

  return (
    <div>
      <Table size={'small'} rowSelection={rowSelection} columns={columns}
             dataSource={userData.records} pagination={false} rowKey={record => record.id}
             locale={{emptyText: <div style={{marginTop:24}}><img alt={'f'} style={{width: 80, height: 80}} src={emptyImg}/><br />
             <div style={{height:10}}/>
             <span style={{marginTop:10}}>{emptyTip}</span></div>}}
      />
    </div>)
}
