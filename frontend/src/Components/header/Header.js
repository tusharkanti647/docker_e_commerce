import React from "react";
import styles from "./Header.module.css";
import { useLocation, useNavigate } from "react-router";
import { importImg } from "../../utils/importImg";

const Header = ({ isShowUpperDiv = false, }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    console.log('CCCCCCCCC', pathname)
    const onLogout = async () => {
        let url = 'http://localhost:8000/userApi/signOut';
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                navigate('/SignIn')
            }

        } catch (e) {
            console.log('ERROR', e)

        }
    }

    return (
        <header className={styles.header}>
            {isShowUpperDiv && <div className={styles.upperDiv}>
                <img src={importImg("ticketPercent")} alt='ticketPercent' />
                <p>30% off storewide - Limited time! <span style={{ color: "#377DFF", fontWeight: 'bold' }}>Shop Now</span> {" "}</p>

                <img src={importImg("rightArrowHeader")} alt="rightArrowHeader" />
            </div>}
            <div className={styles.lowerDiv}>
                <div className={styles.innerDiv}>
                    <div className={styles.headerLeft}>
                        <img src={importImg("Logo")} alt="logo" />
                    </div>

                    <div className={styles.headerMiddle}>
                        <p className={pathname == '/' ? styles.activeMiddleMenue : ''}>
                            Home
                        </p>
                        <p className={pathname == '/shop' ? styles.activeMiddleMenue : ''}>
                            Shop
                        </p>
                        <p className={pathname == '/product' ? styles.activeMiddleMenue : ''}>
                            Product
                        </p>
                    </div>

                    <div className={styles.headerRight}>
                        <img src={importImg("search02")} alt="search02" />
                        <img src={importImg("CartButton")} alt="CartButton" />
                        <img src={importImg("youtube")} alt="youtube" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

