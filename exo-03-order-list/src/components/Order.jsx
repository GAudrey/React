import { ShoppingIcon, DeleteIcon } from './Icons';

const Order = ({ allProducts }) =>
  allProducts.map((product) => (
    <div className="flex bg-purple-200 p-3 place-content-between">
      <p className="flex">
        <span className="pr-3">
          <ShoppingIcon />
        </span>
        <span>{product}</span>
      </p>
      <p>
        <button type="button">
          <DeleteIcon />
        </button>
      </p>
    </div>
  ));

export default Order;
