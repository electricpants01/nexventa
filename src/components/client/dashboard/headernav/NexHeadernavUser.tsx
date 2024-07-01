const NexHeadernavUser = () => {
  return (
    <div className="relative">
      <div className="flex items-center space-x-4">
        <button
          id="CartButton"
          data-dropdown-delay="500"
          data-dropdown-trigger="hover"
          className="relative rounded-full bg-gray-200 p-2 hover:bg-orange-600"
          type="button"
        >
          <i className="bx bx-bell bx-sm"></i>
          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white"></span>
        </button>
        <li className="action-btn-head dropdown">
          <button
            id="dropdownMenuButton"
            data-dropdown-delay="500"
            data-dropdown-trigger="hover"
            className="relative rounded-full bg-gray-200 p-2 hover:bg-orange-600"
            type="button"
          >
            <i className="bx bx-user bx-sm"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li className="dropdown-item">
              <a href="/">
                <i className="bx bxs-cog"></i> Setting
              </a>
            </li>
            <li className="dropdown-item">
              <a href="/login">
                <i className="bx bx-log-out"></i> Sign
              </a>
            </li>
          </ul>
        </li>
      </div>
    </div>
  )
}

export default NexHeadernavUser