import React, {Component, PropTypes} from 'react';
import Card from './Card';
import {render} from 'react-dom';
import marked from 'marked';


class List extends Component{
    render(){
        let cards = this.props.cards.map((card, i)=>{
            return <Card key = {i} id = {card.id}
            id = {card.id}
            title = {card.title}
            description = {card.description}
            color = {card.color}
            tasks = {card.tasks}/>
        });
        return(
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
                </div>
        );
    }
};
List.PropTypes = {
    title : PropTypes.string,
    cards : PropTypes.arrayOf(PropTypes.object)
};

export default List;