const NEXHeaderMobile = () => {
  return (
    <div>
      <div className="mobile-bottom-navigation">
        <button className="action-btn">
          <i className="bx bx-grid-alt"></i>
        </button>
        <button className="action-btn">
          <i className="bx bx-bell bx-sm"></i>
          <span className="count">0</span>
        </button>
        <button className="action-btn" data-mobile-menu-open-btn>
          <i className="bx bx-cart bx-sm"></i>
          <span className="count">0</span>
        </button>
        <button className="action-btn" data-mobile-menu-open-btn>
          <i className="bx bx-user bx-sm"></i>
        </button>
      </div>
    </div>
  )
}

export default NEXHeaderMobile
