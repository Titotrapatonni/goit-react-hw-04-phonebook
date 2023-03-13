import { ContactItem } from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => {
        contact.id = nanoid();
        return (
          <ContactItem
            contactData={contact}
            key={contact.id}
            deleteContact={deleteContact}
          ></ContactItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
