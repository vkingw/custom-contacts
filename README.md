# infinitus-custom-contacts
infinitus-custom-contacts

[中文文档](https://github.com/vkingw/custom-contacts/blob/master/README_zh.md)

威发微服务选人组件/Wafer microservice selection component

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/vkingw/custom-contacts)
[![npm](https://img.shields.io/npm/v/react-contacts.svg)](https://www.npmjs.com/package/infinitus-custom-contacts)
[![NPM downloads](https://img.shields.io/npm/dm/react-contacts.svg)](https://www.npmjs.com/package/infinitus-custom-contacts)

## Example

![Example](./example.png)

## How to use

### install

`yarn add infinitus-custom-contacts`

### React 

```js
import Contacts from 'infinitus-custom-contacts';

<Contacts {...props}/>

```

Properties  | Description | Type | Default Values
------------- | ------------- | --------------| ------------- 
loading | Loading status | bool | false
searchResult | Query user data return results （[User & Search Result Data](###User & Search Result Data)） | object | { records: []}
handleSearchUser | Handle search user function | func | function(page, jobs, name, rank, rankClassification), page:Number  jobs:obj  name:String rank:obj rankClassification:obj
updateSelectUsers | Update user list when select user | func | function(userSelected)
defaultUserSelected   | default user selected | array | [{id:'abc',name:'CCC'}] 
numberColor   | total number color | sring | #E65653
totalShowText   | totalShowText | string | 共选择了$个
radioShowText   | when user selected on radio, show tip text. | string | '已经选择' 
jobsText   | jobs text | string | '岗位' 
nameText   | name text | string | '姓名' 
rankText   | rank text | string | '职级' 
workNumberNumber   | workNumberNumber text | string | '工号' 
functionText   | function text | string | '岗位' 
namePlaceholder   | name placeholder | string | '请输入搜索姓名' 
jobsPlaceholder   | jobs placeholder | string | '请选择岗位' 
rankPlaceholder   | rank placeholder | string | '请选择职级' 
rankTipPlaceholder   | rankTip placeholder | string | '请选择职级分类或级别' 
jobsData   | jobs select data | string | [] 
jobsValueKey   | jobs select key  | string | 'id' 
jobsNameKey   | jobs select name | string | 'name' 
rankData   | rank select  data | string | [] 
rankValueKey   | rank select key  | string | 'id' 
rankNameKey   | rank select name | string | 'name' 
rankClassificationData   | rankClassification select data | string | [] 
rankClassificationValueKey   | rankClassification select key | string | 'id' 
rankClassificationNameKey   | rankClassification select name | string | 'name'  
tableColumnsKey   | The query result table columns corresponds to dataIndex, please note that the first name and data echo also correspond | array |  ['name', 'workNumberNumber', 'fun', 'rank', 'jobs'],
tableRowKey   | table row key，This value corresponds to the data echo| string | 'id' 
emptyTip   | table empty tip | string | '什么都没有哦~'
tableCheckboxDisabled   | The set of keys that need to be forbidden to be selected in the table | array | []

### 职级分类或级别数据结构

````
[
      {
        id: 1,
        parentId: 0,
        children: [
          {
            id: 3,
            parentId: 1,
            children: [
              {
                id: 4,
                parentId: 3,
                children: [
                  {
                    id: 5,
                    parentId: 4,
                    children: [],
                    name: '院校农信',
                  },
                ],
                name: '高新农信',
              },
            ],
            name: '潍坊农信',
          },
        ],
        name: '山东农信',
      },
  ]
````

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
