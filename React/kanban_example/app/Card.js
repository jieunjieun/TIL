import React, {Component} from 'react';
import CheckList from './CheckList';
import {render} from 'react-dom';

class Card extends Component{
    render(){
        return(
            <div class="card">
  <div className= "card__title">{this.props.title}
    
  </div>
  <div className="card__details">
    {this.props.description}
    <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
    
  </div>
  
</div>
        );
    }
}

export default Card;