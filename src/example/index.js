import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from '../components/contacts';
import { deptTree, userList } from '../mockData';

const updateSelectUsers = userList => {
  console.log(userList)
};

const updateSelectDept = deptList => {
  console.log(deptList)
};

const users = [
  { id: 1,name:'admin1' }
];

const jobsData = [
  {id:1,name:'abc'},
  {id:2,name:'abc1'},
  {id:3,name:'abc1'},
  {id:41,name:'abc1'},
]

const rankData = [
  {id:12,name:'abc'},
  {id:22,name:'abc1'},
  {id:32,name:'abc1'},
  {id:412,name:'abc1'},
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
    <Contacts users={userList} loading={false}
              defaultUserSelected={users}
              searchResult={userList}
              updateSelectUsers={updateSelectUsers} handleSearchUser={() => userList} updateSelectDept={updateSelectDept}
              rankData={jobsData} jobsData={jobsData} rankClassificationData={deptTree}
    />
  </div>
</div>, document.getElementById('root'));
