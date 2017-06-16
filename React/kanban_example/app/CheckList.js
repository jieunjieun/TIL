// import React, {Component} from 'react';
// import {render} from 'react-dom';

// class CheckList extends Component{
//     render(){
//         let tasks = this.props.tasks.map((task)=> (
//             <li className= "checklist__task">
//                 <input type="checkbox" defaultChecked={task.done}/>
//                 {task.name}
//                 <a href="#" className = "checkList__task--remove"/>
//             </li>
//         ));

//         return(
//             <div className="checklist">
//                 <ul>{tasks}</ul>
//             </div>
//         );
//     }
// }
// export default CheckList;
import React, { Component } from 'react';
import marked from 'marked';

class CheckList extends Component{
    render(){
        let tasks = this.props.tasks.map((task) => (
            <li key = {task.id} className = "checklist__task">
            <input type = "checkbox" defaultChecked={task.done} />
            {task.name}
            <a href="#" className="checklist__task--remove" />
            </li>
         ));
         return(
             <div className = "checklist">
                 <ul>{tasks}</ul>
                 <input type="text"
                 className = "checklist--add-task"
                 placeholder="Type then hit Enter to add a task"/>
            </div>
          );
    }
}
export default CheckList;