import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css'

const Loader = () => {
  return (
    <div className={css.Loader}>
      <Audio
      height={300}
      width={300}
      radius={9}
      color="green"
      ariaLabel="loading"
      wrapperStyle={{}}
      wrapperClassName=""
      />
    </div>
  );
};

export default Loader;