import React from 'react';
import Headers from '../../components/headers/headers';

function ContactsPage(props) {
  return (
    <div>
      contacts Page
      <Headers/>
      my contact is {props.contacts}
    </div>
  );
}
export default ContactsPage;

