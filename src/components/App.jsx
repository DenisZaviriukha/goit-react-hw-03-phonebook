import {Forma} from "./Form/Form";

import { Cont } from "./Layout/Layout";
import { GlobalStyle } from "./GlobalStyles";
import { Component } from "react";
import { Contacts } from "./Contacts/Contacts";
import { ContactList } from "./ContactList/ContactList";


export class App extends Component {
  
  state = {
    contacts: [],
    filter: ''
  };

// --------3 hw

  componentDidMount() {
    const localItems = localStorage.getItem('contacts')
    if (localItems !== null) {
      this.setState({
        contacts: JSON.parse(localItems)
      })
    }
    else {
      this.setState({
        contacts: []
      })
    }
  }

  componentDidUpdate(prevProps, currentProps) { 
    console.log(prevProps === currentProps)
    if (prevProps.contacts !== this.state.contacts) {
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
    }
  }

// --------2 hw

  deleteNumber = (deleteElId) => {
    this.setState(elements => ({
      contacts: [...elements.contacts.filter(contact => contact.id !== deleteElId)]
      // console.log(elements.contacts.filter(contact => contact.id !== deleteElId))
    }))
  }

  addNewNumber = (newNumber) => {
    this.setState(prevNumbers => ({
      contacts: [...prevNumbers.contacts, newNumber],
    }))
  };

  addFiltredNumbers = (newFiltredNumbers) => {
    this.setState({ filter: newFiltredNumbers })
  };
    
  SignUpForm = e => {
    e.preventDefault();
    this.setState({ name: e.target.name.value })
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.name.value })
  };

  render() {
    return (
      <Cont>
        <h1>Phonebook</h1>
        <Forma onAdd={this.addNewNumber} contactList={this.state.contacts} />
        <h2>Contacts</h2>
        <Contacts contactList={this.state.contacts} onFilt={this.addFiltredNumbers} />
        <ContactList contactList={this.state.contacts} filterList={this.state.filter} onDelete={this.deleteNumber}/>
        <GlobalStyle />
      </Cont>
    )
  }
}

