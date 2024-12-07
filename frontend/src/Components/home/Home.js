import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Home.module.css";
import ProductScroll from "./ProductScroll";

function Home() {
    return (<div style={{ overflow: "auto" }}>
        <Header isShowUpperDiv={true} />

        <div className={styles.homeBody}>
            {/* <div className={styles.homeScrollProductOuter}> */}
            <div className={styles.homeScrollProduct}>
                <div className={styles.homeScrollProductUpper}>
                    <div className={styles.newArriveText}>
                        <p>NEW</p>
                        <p>Arrivals</p>
                    </div>

                    <div>
                        <p style={{ padding: '5px', borderBottom: '1px solid black' }}>More Products</p>
                    </div>
                </div>

                <div>
                    <ProductScroll />

                </div>
            </div>
            {/* </div> */}

        </div>

        <Footer />
    </div>)
}

export default Home;