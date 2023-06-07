import styles from 'styles/Navbar.module.css';
import { SubMenu } from 'components/subMenu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
    const [isHover, setIsHover] = useState(false);

    const handleIsHover = () => {
        setIsHover(true);
    };

    const handleIsNotHover = () => {
        setIsHover(false);
    };

    return (
        <nav className={styles.nav}>
            <ul className={styles.menu_bar}>
                <li>
                    <Link to='/admin' className={styles.menu_item}>
                        관리자 페이지
                    </Link>
                </li>
                <li
                    className={styles.sub_menu}
                    onMouseEnter={handleIsHover}
                    onMouseLeave={handleIsNotHover}
                >
                    <Link to='#' className={styles.menu_item}>
                        MENU
                    </Link>
                    {isHover && <SubMenu />}
                </li>
                <li>
                    <Link to='./hos/hos.html' className={styles.menu_item}>
                        HOS
                    </Link>
                </li>
                <li>
                    <Link to='./tel' className={styles.menu_item}>
                        TEL
                    </Link>
                </li>
                <li>
                    <Link to='/login' className={styles.menu_item}>
                        LOGIN
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
