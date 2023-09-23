import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            H12 Egzersizleri
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/hakkimizda">
                  Hakkimizda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/iletisim">
                  İletişim
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="ara">
              <input
                className="form-control me-2"
                type="ara"
                placeholder="Ara"
                aria-label="Ara"
              />
              <button className="btn btn-outline-success" type="submit">
                Ara
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}