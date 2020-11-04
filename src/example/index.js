import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from '../components/contacts';
import {  userList,us,defaultSelect,tree } from '../mockData';

const updateSelectUsers = userList => {
  console.log(userList)
};

const updateSelectDept = deptList => {
  console.log(deptList)
};

const jobsData = [
  {id:1,name:'abc'},
  {id:2,name:'abc1'},
  {id:3,name:'abc1'},
  {id:41,name:'abc1'},
]

ReactDOM.render(<div className="App"
                     style={{ 'padding': '10px', 'margin': '10px', height: '100%' }}>
  <header className="App-header">
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
  <div style={{ height: '100%', width:690 }}>
    <Contacts loading={false}
              defaultUserSelected={defaultSelect}
              searchResult={us}
              updateSelectUsers={updateSelectUsers} handleSearchUser={() => userList} updateSelectDept={updateSelectDept}
              rankData={jobsData} jobsData={jobsData} rankClassificationData={tree}
              tableColumnsKey={['chsName', 'accountName', 'orgName', 'gradeType', 'positionName']}
              tableRowKey={'accountName'}
    />
  </div>
</div>, document.getElementById('root'));
