import './styles/btn.css';

const IncrementBtn = ({ product, handleIncrement }) => {
  return (
    <button
      className="btn"
      value={product}
      onClick={(e) => handleIncrement(e.target.value)}
    >
      +
    </button>
  );
};

export default IncrementBtn;
