import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Cart.module.css";

function Cart() {
    return (<div className={styles.cart}>
        <Header isShowUpperDiv={false} />
        <div className={styles.cartBody}>
            <div className={styles.cartBody_main}>
                <div className={styles.cartBody_mainLeft}>
                    <div className={styles.mainBody_header}>
                        <p>Product</p>
                        <div>
                            <p>Quantity</p>
                            <p>Price</p>
                            <p>Subtotal</p>
                        </div>
                    </div>
                    <div className={styles.mainBody_body}>

                    </div>
                </div>
                <div className={styles.cartBody_mainRight}>
                    <p className={styles.cartSummery}>Cart summary</p>
                    <div className={styles.cartShippingDiv}>
                        <div style={{ display: 'flex', width: '70%' }}>
                            <input style={{ width: '15px' }} type="radio" name="freeshipping" />
                            <p style={{ marginLeft: '10px', fontSize: '12px' }}>Free shipping</p>
                        </div>
                        <p>$0.00</p>
                    </div>
                    <div className={styles.cartShippingDiv}>
                        <div style={{ display: 'flex', width: '70%' }}>
                            <input style={{ width: '15px' }} type="radio" name="freeshipping" />
                            <p style={{ marginLeft: '10px', fontSize: '12px' }}>Express shipping</p>
                        </div>
                        <p>$15.00</p>
                    </div>
                    <div className={styles.cartShippingDiv}>
                        <div style={{ display: 'flex', width: '70%' }}>
                            <input style={{ width: '15px' }} type="radio" name="freeshipping" />
                            <p style={{ marginLeft: '10px', fontSize: '12px' }}>Pick up</p>
                        </div>
                        <p>$21.00</p>
                    </div>

                    <div className={styles.subTotalDiv}>
                        <div style={{ display: 'flex', width: '70%' }}>
                            <input style={{ width: '15px' }} type="radio" name="freeshipping" />
                            <p style={{ marginLeft: '10px', fontSize: '12px' }}>Subtotal</p>
                        </div>
                        <p>$21.00</p>
                    </div>
                    <div className={styles.TotalDiv}>
                        <div style={{ display: 'flex', width: '70%' }}>
                            <input style={{ width: '15px' }} type="radio" name="freeshipping" />
                            <p style={{ marginLeft: '10px', fontSize: '12px' }}>Total</p>
                        </div>
                        <p>$21.00</p>
                    </div>

                    <div className={styles.checkOutDiv}>

                        Checkout
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>)
}

export default Cart;