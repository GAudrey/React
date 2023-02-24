import { useState } from 'react';
import Order from './Order';

const OrderList = () => {
  const [productArray, setProductArray] = useState([]);
  const [product, setProduct] = useState('');
  const [isHidden, setIsHidden] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.length > 2) {
      setProductArray([...productArray, product]);
      setProduct('');
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  console.table(productArray);

  return (
    <div className="bg-gray-100 rounded-md p-5">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="form-control input">
            <label htmlFor="product">Produit à ajouter à la liste de courses :</label>
            <input
              type="text"
              id="product"
              name="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
          <button type="submit" className="btn bg-purple-900 text-purple-50">
            Ajouter
          </button>
        </div>
        <div>
          <p className="text-sm text-red-500">
            {isHidden && 'Le produit doit compter au moins 3 caractères'}
          </p>
        </div>
      </form>
      <div>
        <Order allProducts={productArray} />
      </div>
    </div>
  );
};

export default OrderList;
