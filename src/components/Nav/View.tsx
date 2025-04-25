import * as css from "./View.styles";

const Nav = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <a className={css.title} href="/">
          <h1>
            fajarma<span>ulana</span>
          </h1>
        </a>

        <a className={css.menu} href={`#`}>
          See in my Web
        </a>
      </div>
    </div>
  );
};

export default Nav;
