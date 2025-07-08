const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand" href="#">🍕 Mamma Mía</a>
      <div className="ml-auto d-flex gap-2">
        <button className="btn btn-outline-primary">Home</button>
        {token ? (
          <>
            <button className="btn btn-outline-secondary">🔓 Profile</button>
            <button className="btn btn-outline-danger">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-success">🔐 Login</button>
            <button className="btn btn-outline-warning">🔐 Register</button>
          </>
        )}
        <button className="btn btn-outline-dark">
          🛒 Total: ${total.toLocaleString('es-CL')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
