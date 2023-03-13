import PropTypes from 'prop-types';
import { DeleteButton, FullName, Item, Number } from './ContactItem.styled';

export const ContactItem = ({
  contactData: { name, number, id },
  deleteContact,
}) => {
  let fullName = name.split(' ');
  let newStr = fullName
    .map(str => {
      return str[0].toUpperCase() + str.toLowerCase().slice(1);
    })
    .join(' ');
  return (
    <Item id={id}>
      <FullName>{newStr}:</FullName>
      <Number>{number}</Number>
      <DeleteButton type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  contactData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};
