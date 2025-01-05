import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterWraper } from './Filter.styled';

export const ContactFilter = ({ value, onChange }) => {
  const filterInputId = nanoid();

  return (
    <FilterWraper>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input type="text" value={value} onChange={onChange} id={filterInputId} />
    </FilterWraper>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
