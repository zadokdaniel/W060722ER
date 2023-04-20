const User = ({
  user: {
    name,
    email,
    phone,
    website,
    company: { name: companyName },
    address: { street, city, suite, zipcode },
  },
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{email}</p>
        <p className="card-text">
          {suite}, {street}, {city} ({zipcode})
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{phone}</li>
        <li className="list-group-item">{website}</li>
        <li className="list-group-item">{companyName}</li>
      </ul>
    </div>
  );
};

export default User;
