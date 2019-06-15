import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Sara LaPray",
        email: "sara@gmail.com",
        phone: "801-834-4355",
        type: "personal"
      },
      {
        id: 2,
        name: "Bill Wagner",
        email: "bill@gmail.com",
        phone: "801-832-8345",
        type: "personal"
      },
      {
        id: 3,
        name: "Mike Breen",
        email: "mike@gmail.com",
        phone: "801-812-4225",
        type: "professional"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  };

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    });
  };
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  // Update Contact
  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  };

  // Filter Contacts

  // Clear Filter of Contacts

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
