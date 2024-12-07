import { importImg } from "../../utils/importImg";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
    return (<div className={styles.productCard}>
        <div className={styles.productCardHeader}>
            <div className={styles.productCardHeaderLeft}>
                <p style={{ backgroundColor: 'white', padding: '4px ', borderRadius: '8px', width: '60px' }}>NEW</p>
                <p style={{ backgroundColor: '#38CB89', color: 'white', padding: '4px', borderRadius: '8px', width: '60px', marginTop: '10px' }}>-{product.productDiscount}%</p>
            </div>
            <div className={styles.productCardHeaderRight}>
                <img src={importImg('hart')} alt="wishList" />
            </div>
        </div>
        <div className={styles.productCardBody}>
            <div style={{ overflow: 'hidden' }}>
                <img style={{ width: '250px', height: '250px' }} src={importImg(product.productPhoto)} alt="product.productName" />
            </div>
            <div className={styles.productCardAddButton}>
                <p>Add to cart</p>
            </div>
        </div>
        <div className={styles.productCardFooter}>
            <div className={styles.productCardStarDiv}>
                <img src={importImg('StarFill')} alt="StarFill" />
                <img src={importImg('StarFill')} alt="StarFill" />
                <img src={importImg('StarFill')} alt="StarFill" />
                <img src={importImg('StarFill')} alt="StarFill" />
                <img src={importImg('StarFill')} alt="StarFill" />
            </div>
            <p style={{ fontWeight: '700', marginTop: '10px' }}>{product.productName}</p>
            <div style={{ marginTop: '10px' }} className={styles.price}>{product.productPrice}</div>
        </div>
    </div>)
}

export default ProductCard;