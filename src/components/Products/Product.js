import '../../styles/product.scss'

const Product = ({currLang, data}) => {
    return ( 
        <div>
            <div className = "product-container">
                <div className = "d-flex justify-content-center">
                    <img className = "product-img" src = {data.img} alt = "product-img"/>
                </div>
                <div className = "product-content-container">
                    <div className = "product-title">
                        <h1>{currLang === "EN"? data.key : data.key_cn}</h1>
                    </div>
                    <p>{currLang === "EN"? data.key_content : data.key_content_cn}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Product;