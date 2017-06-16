// import React, { Component } from 'react';
// import {render} from 'react-dom';

// //parent component
// class GroceryList extends Component {
//   render(){
//     return(
//       <ul>
//         <ListItem quantity="1">Bread</ListItem>
//         <ListItem quantity="6">Eggs</ListItem>
//         <ListItem quantity="2">Milk</ListItem>
//       </ul>
//     );
//   }
// }
// //child component

// class ListItem extends Component{
//   render(){
//     return(
//       <li>
//         {this.props.quantity} x {this.props.children}
//       </li>
//     );
//   }
// }
// render(<GroceryList/>, document.getElementById('root'));

import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';


let cardsList = [
  {
    id : 1,
    title : '독서하기',
    description : "책 전체 다 읽기",
    color : '#BD8D31',
    status : "in-progress",
    tasks : []
  },
  {
    id : 2,
    title : "코딩하기",
    description : "책에있는 예제 코드들 다 해보기.내가 짠 코드들은 [github](https://github.com/Ground-Silver0903) 에 있습니당",
    status : "todo",
    color : '#3A7E28',
    tasks: [
      {
        id : 1,
        name : "ContactList Example",
        done : true
      },
      {
        id : 2,
        name : "Kanban Example",
        done : false
      },
      {
        id : 3,
        name : "My own experiments",
        done : false
      }
    ]
  }
];

render(<KanbanBoard cards={cardsList}/>, document.getElementById('root'));

