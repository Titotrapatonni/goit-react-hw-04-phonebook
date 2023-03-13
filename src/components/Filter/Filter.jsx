import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ filterContact, value }) => {
  return (
    <label>
      Filter
      <Input type="text" onChange={filterContact} value={value} />
    </label>
  );
};

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
