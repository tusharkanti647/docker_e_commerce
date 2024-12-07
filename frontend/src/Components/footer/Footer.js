
import { importImg } from "../../utils/importImg";
import styles from "./Footer.module.css";
function Footer() {
    return (<div className={styles.footer}>
        <div className={styles.innerDiv}>
            <div className={styles.footerUpper}>
                <div className={styles.footerUpperLeft}>
                    <img src={importImg('LogoWhite')} alt='logo' />

                    <p>Gift & Decoration Store</p>
                </div>
                <div className={styles.footerUpperright}>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Product</p>
                    <p>Blog</p>
                </div>
            </div>
            <div className={styles.footerDown}>
                <div className={styles.footerDownLeft}>
                    <p style={{ fontSize: '10px', fontWeight: "100" }}>Copyright &copy; 2023 3legant. All right reserved</p>
                    <p style={{ fontWeight: "400" }}>Privacy Policy</p>
                    <p style={{ fontWeight: "400" }}>Terms of Use</p>
                </div>
                <div className={styles.footerDownRight}>
                    <img src={importImg("facbook")} alt="facbook" />
                    <img src={importImg("instagram")} alt="instagram" />
                    <img src={importImg("youtube")} alt="youtube" />
                </div>
            </div>
        </div>
    </div>)
}

export default Footer;