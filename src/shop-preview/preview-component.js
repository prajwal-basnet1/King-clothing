import '../shop-preview/preview-component.css'

export const Preview=({title,items})=>{

return(
    <div className="Preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items
            .filter((item,index)=>index<4)
            .map((product)=>(
                    <div className="product-container">
                <img src={product.imageUrl} alt={product.name}  className="product-image"></img>
                    <div className='product-list'>
                    <span id={product.id}>{product.name}</span>
                    <span id={product.id} className="product-price">${product.price}</span>
                    </div>
                </div>
                )
            )}

        </div>

    </div>

)


}





