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

export default Button;