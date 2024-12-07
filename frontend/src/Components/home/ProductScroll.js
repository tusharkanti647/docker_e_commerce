import ProductCard from "./ProductCard";

const Products = [
    {
        productName: 'LLLLLLL hhh',
        productPrice: 200,
        productDiscount: 30,
        productPhoto: 'PasteImage2',
    },
    {
        productName: 'kkjkjk hhh',
        productPrice: 100,
        productDiscount: 30,
        productPhoto: 'PasteImage2',
    },
    {
        productName: 'MMMMM hhh',
        productPrice: 260,
        productDiscount: 30,
        productPhoto: 'PasteImage2',
    }, {
        productName: 'kkkjs hhh',
        productPrice: 200,
        productDiscount: 30,
        productPhoto: 'PasteImage2',
    }

]
function ProductScroll() {
    return (<div style={{ display: "flex", width: '100%', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {Products.map((product) => {
            return (<div key={product.name}>
                <ProductCard product={product} />
            </div>)
        })}

    </div>)
}

export default ProductScroll;