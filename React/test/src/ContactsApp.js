import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

class ContactsApp extends Component{
    render(){
        return(
            <div>
                <SearchBar/>
                <ContactList contacts = {this.props.contacts}/>
            </div>
        )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class SearchBar extends Component{
    render(){
        return <input type= "search" placeholder = "search"/>
    }
}

class ContactList extends Component{
    render(){
        return(
            <ul>
            {this.props.contacts.map(
            (contact) => <ContactItem key = {contact.email}
                                        name = {contact.name}
                                        email = {contact.email}/>
            )}

            </ul>
        )
    }
}
contactList.propTypes = {
    contacts : PropTypes.arrayOf(PropTypes.object)
}

class ContactItem extends Component{
    render(){
        return <li>{this.props.name} - {this.props.email}</li>
    }
}

ContactItem.propTypes = {
    name : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
}

let contacts = [
    {name : "Cassio Zen", email : "cassiozen@gmail.com"},
    {name : "jieun", email : "kyn07077@naver.com"},
    {name : "asdf", email : "asdf324@naver.com"},
    {name : "2lkjfd02", email : "222@naver.com"}
]

render(<ContactApp contacts = {contacts}/>, document.getElementById('root'));