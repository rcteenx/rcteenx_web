export default function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Anasayfa
            </a>
          </li>
          <li className="nav-item">
            <a href="/hakkimizda" className="nav-link px-2 text-muted">
              Hakkimizda
            </a>
          </li>
          <li className="nav-item">
            <a href="/egzersiz" className="nav-link px-2 text-muted">
              Egzersizler
            </a>
          </li>
          <li className="nav-item">
            <a href="/sss" className="nav-link px-2 text-muted">
              SSS
            </a>
          </li>
          <li className="nav-item">
            <a href="/iletisim" className="nav-link px-2 text-muted">
              İletişim
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">
          © 2021 |{" "}
          <a href="https://rhancetin.com/" target="_blank">
            R Han
          </a>
        </p>
      </footer>
    </div>
  );
}
