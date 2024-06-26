const NEXCategory = () => {
  return (
    <div>
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <i className="bx bx-map bx-xs"></i>
              <a href="/" className="menu-title">
                Cerca
              </a>
            </li>
            <li className="menu-category">
              <i className="bx bx-gift"></i>
              <a href="/" className="menu-title">
                Promoción
              </a>
            </li>
            <li className="menu-category">
              <i className="bx bx-chevrons-up"></i>
              <a href="/" className="menu-title">
                Recién llegados
              </a>
            </li>
            <li className="menu-category">
              <i className="bx bx-chevrons-up"></i>
              <a href="/" className="menu-title">
                Mejor vendedora
              </a>
            </li>
            <li className="menu-category">
              <i className="bx bx-star"></i>
              <a href="/" className="menu-title">
                Top ranking
              </a>
            </li>
            <li className="menu-category">
              <i className="bx bx-grid-alt"></i>
              <a href="/" className="menu-title">
                Todo
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="/">Inicio 1</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Inicio 2</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Inicio 2</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">Inicio 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default NEXCategory
