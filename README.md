# custom-contacts
custom-contacts

[中文文档](https://github.com/wafersystems/react-contacts/blob/master/README_zh.md)

威发微服务选人组件/Wafer microservice selection component

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/vkingw/custom-contacts)
[![npm](https://img.shields.io/npm/v/react-contacts.svg)](https://www.npmjs.com/package/custom-contacts)
[![NPM downloads](https://img.shields.io/npm/dm/react-contacts.svg)](https://www.npmjs.com/package/custom-contacts)

## Example

![Example](./example.png)

## How to use

### install

`yarn add custom-contacts`

### React 

```js
import Contacts from 'react-contacts'

<Contacts {...props}/>

```

Properties  | Description | Type | Default Values
------------- | ------------- | --------------| ------------- 
loading | Loading status | bool | false
searchResult | Query user data return results （[User & Search Result Data](###User & Search Result Data)） | object | { records: []}
handleSearchUser | Handle search user function | func | function(page,nameKey,depId)
updateSelectUsers | Update user list when select user | func | function(userSelected)
defaultUserSelected   | default user selected | array | [{userId:'abc',username:'CCC'}] 
numberColor   | total number color | sring | #1B9AFF 
totalShowText   | totalShowText | string | 共选择了$个
radioShowText   | when user selected on radio, show tip text. | string | '已经选择' 

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


### User & Search Result Data

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

```

 {
      records: [
        {
          id: 1,
          name:'abc',
          workNumberNumber:12,
          fun:'aaa',
          rank:'bbb',
          jobs:'ttt' 
        },
	   ......
      ],
      total: 11,
      size: 10,
      current: 1,
      searchCount: true,
      pages: 1,
    },

```

### Development

````
$ git clone https://github.com/wafersystems/react-contacts.git
$ yarn
$ yarn start

````
