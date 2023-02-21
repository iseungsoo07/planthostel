import styles from "styles/navbar.module.css";
import { SubMenu } from "components/subMenu";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
    const [isHover, setIsHover] = useState(false);

    const handleIsHover = () => {
        setIsHover(true);
    };

    const handleIsNotHover = () => {
        setIsHover(false);
    };

    return (
        <nav>
            <div className={styles.container}>
                <ul className={styles.menu_bar}>
                    <li className={styles.sub_menu} onMouseEnter={handleIsHover} onMouseLeave={handleIsNotHover}>
                        <Link to="#" className={styles.menu_item}>
                            MENU
                        </Link>
                        {isHover && <SubMenu />}
                    </li>
                    <li>
                        <Link to="./hos/hos.html" className={styles.menu_item}>
                            HOS
                        </Link>
                    </li>
                    <li>
                        <Link to="./tel/tel.html" className={styles.menu_item}>
                            TEL
                        </Link>
                    </li>
                    <li>
                        <Link to="./login/login.html" className={styles.menu_item}>
                            LOGIN
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
