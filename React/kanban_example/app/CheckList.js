import React, {Component} from 'react';
import {render} from 'react-dom';

class CheckList extends Component{
    render(){
        let tasks = this.props.tasks.map((task)=> (
            <li className= "checklist__task">
                <input type="checkbox" defaultChecked={task.done}/>
                {task.name}
                <a href="#" className = "checkList__task--remove"/>
            </li>
        ));

        return(
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}
export default CheckList;