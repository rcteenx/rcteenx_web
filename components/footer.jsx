export default function Footer() {
  return (
    <div>
      <footer>
        <ul>
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href={`/hakkimda${process.env.file_ext}`}>Hakkimizda</a>
          </li>
          <li>
            <a href={`/egzersiz${process.env.file_ext}`}>Egzersizler</a>
          </li>
          <li>
            <a href={`/sss${process.env.file_ext}`}>SSS</a>
          </li>
          <li>
            <a href={`/iletisim${process.env.file_ext}`}>İletişim</a>
          </li>
        </ul>
        <p>
          © 2021 |{" "}
          <a href="https://rhancetin.com/" target="_blank">
            R Han
          </a>
        </p>
      </footer>
    </div>
  );
}
