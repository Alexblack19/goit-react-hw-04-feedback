import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, handleClick }) {
  return (
    <List>
      {options.map(item => (
        <li key={item}>
          <Button type="button" onClick={handleClick}>
            {item}
          </Button>
        </li>
      ))}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};
