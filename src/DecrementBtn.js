import './styles/btn.css';

const DecrementBtn = ({ product, handleDecrement }) => {
  return (
    <button
      className="btn"
      value={product}
      onClick={(e) => handleDecrement(e.target.value)}
    >
      -
    </button>
  );
};

export default DecrementBtn;
