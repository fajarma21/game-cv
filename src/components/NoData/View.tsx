import css from './View.module.scss';

const NoData = () => {
  return (
    <p className={css.text}>
      <b>No Data.</b>
      <br />
      You can try again later.
    </p>
  );
};

export default NoData;
