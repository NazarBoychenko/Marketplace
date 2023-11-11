import { NavLink } from 'react-router-dom';
import Logo from '../../icon/logo.svg';
import Basket from '../../icon/basket.svg';
import Account from '../../icon/account.svg';

import Search from '../../icon/search.svg';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__wraper}>
        <div className={styles.logo}>
          <NavLink exact to="/" className={styles.logo__link}>
            <img src={Logo} />
            <span className={styles.logo__text}>TechHaven</span>
          </NavLink>
        </div>

        <div className={styles.header__nav}>
          <div className={styles.header__inputLabel}>
            <input
              className={styles.header__input}
              type="text"
              autoComplete="off"
              placeholder="Пошук товару..."
            />

            <button className={styles.header__inputBtn} type="submit">
              <img width="27" height="23" src={Search} className={styles.header__inputIcon} />
            </button>
          </div>

          <div className={styles.header__languageMenu}>
            <select className={styles.header__languageSelect}>
              <option className={styles.header__option} value="ukr">
                UA
              </option>
              <option value="eng">US</option>
            </select>
          </div>

          <NavLink className={styles.header__basket}>
            <img src={Basket} />
          </NavLink>
          <NavLink className={styles.header__account}>
            <img src={Account} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
