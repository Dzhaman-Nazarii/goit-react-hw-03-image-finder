import PropTypes from 'prop-types';
import css from './Button.module.css'

const Button = ({handleButtonMore}) => {
  return (
        <button
            type='button'
            className={css.Button}
            onClick={handleButtonMore}>
            Load more
      </button>
  );
};

Button.propTypes = {
    handleButtonMore: PropTypes.func.isRequired,
};

export default Button;