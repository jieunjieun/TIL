// import React, {Component} from 'react';
// import CheckList from './CheckList';
// import {render} from 'react-dom';

// class Card extends Component{
//     render(){
//         return(
//             <div class="card">
//   <div className= "card__title">{this.props.title}
    
//   </div>
//   <div className="card__details">
//     {this.props.description}
//     <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
    
//   </div>
  
// </div>
//         );
//     }
// }

// export default Card;
import React, {Component} from 'react';
import CheckList from './CheckList';

class Card extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            showDetails: false
        };
    }
    render(){
        let cardDetails;
        if(this.state.showDetails){
            cardDetails = (
                <div className = "card__details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks = {this.props.tasks} />
                </div>
            );
        };
        return(
            <div className="card">
                <div className = "card__title" onClick = {
                    () => this.setState({showDetails: !this.state.showDetails})
                }>
                    {this.props.title}</div>
                    {cardDetails}

                </div>
         );
    }
}
export default Card;