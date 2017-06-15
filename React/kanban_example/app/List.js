import React, {Component} from 'react';
import Card from './Card';
import {render} from 'react-dom';
import marked from 'marked';


class List extends Component{
    render(){
        var cards = this.props.cards.map((card)=>{
            return <Card id={card.id}
            title = {card.title}
            description={card.description}
            color = {card.color}
            tasks={card.tasks}/>

        });
        return(
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
                </div>
        );
        
    }
}
export default List;