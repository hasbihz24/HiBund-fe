function NavBar() {
    return (<nav className="navbar navbar-expand-lg navbar-light mt-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="logo.png" alt="" width="110" height="32" className="d-inline-block align-text-top"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center font-navbar font-black" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item m-2">
              <a className="nav-link active" aria-current="page" href="/">
                Beranda
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="/fitur">
                Fitur
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#">
                Konsultasi
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#" aria-disabled="true">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <button className="btn btn-pink font-masuk px-4 py-2" type="submit">Masuk</button>
        </form>
      </div>
    </nav>);
}
export default NavBar;
