import {Table} from "antd";
import React, {useEffect, useState} from "react";

export default ({jobsText, nameText, rankText, workNumberNumber, functionText, userData, selectUser, setSelectUser,
                  updateSelectUsers}) => {

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
  }, [selectUser]);

  const columns = [
    {
      title: nameText,
      dataIndex: 'name',
    },
    {
      title: workNumberNumber,
      dataIndex: 'workNumberNumber',
    },
    {
      title: functionText,
      dataIndex: 'fun',
    },
    {
      title: rankText,
      dataIndex: 'rank',
    }, {
      title: jobsText,
      dataIndex: 'jobs',
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
             dataSource={userData.records} pagination={false} rowKey={record => record.id}/>

    </div>)
}
