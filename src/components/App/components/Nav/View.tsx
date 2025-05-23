import * as css from "./View.styles";

const Nav = () => {
  return (
    <header className={css.container}>
      <a className={css.title} href="/">
        <h1>
          <span>fajarmaulana</span>
          <span>
            fajar<span>maulana</span>
          </span>
        </h1>
      </a>

      <a className={css.menu} href={`#`}>
        Github
      </a>
      <a className={css.menu} href={`#`}>
        Linkedin
      </a>
      <a className={css.menu} href={`#`}>
        Mail
      </a>
    </header>
  );
};

export default Nav;
