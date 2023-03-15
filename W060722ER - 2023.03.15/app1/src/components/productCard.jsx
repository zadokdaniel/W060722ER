function ProductCard(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.src} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.category}</li>
        <li className="list-group-item">{props.price?.toLocaleString()}$</li>
      </ul>
      <div className="card-body">
        <a href={props.link} className="card-link">
          Buy Now!
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
