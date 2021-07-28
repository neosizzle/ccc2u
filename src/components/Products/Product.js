import '../../styles/product.scss'

const Product = ({currLang, data}) => {
    return ( 
        <div>
            <div className = "product-container">
                <div className = "d-flex justify-content-center">
                    <img className = "product-img" src = {`${process.env.REACT_APP_ADMIN_URL}${data.cover_img.formats.large.url}`} alt = "product-img"/>
                </div>
                <div className = "product-content-container">
                    <div className = "product-title">
                        <h1>{currLang === "EN"? data.title : data.title_cn}</h1>
                    </div>
                    <p>{currLang === "EN"? data.description : data.description_cn}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Product;