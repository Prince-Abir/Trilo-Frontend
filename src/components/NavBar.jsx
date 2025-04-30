function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm flex h-27 justify-center items-center text-center">
      {/* Left Side: Dropdown */}
      <div className="navbar-start flex items-center w-30 ml-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Categories</a></li>
            <li><a>Account</a></li>
          </ul>
        </div>
      </div>

      {/* Center: Title */}
      <div className="navbar-center flex items-center justify-center w-40 ml-10">
        <a className="text-4xl font-bold text-white no-underline">Trilo</a>
      </div>

      {/* Right Side: Buttons */}
      {/* Right Side: Buttons */}
      <div className="navbar-end flex items-center justify-center gap-2 w-auto h-full mr-5 p-3">

        <button className="btn btn-neutral btn-md text-white w-auto text-md" >
          Create new account
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <a href="/Cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1 12H4L3 3zM1 1h4l1 10h10l1-10h4M5 19h14a1 1 0 001-1h-16a1 1 0 001 1z" />
              </svg>
            </a>
          </div>
        </button>

        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        <button className="btn btn-ghost btn-circle flex items-center justify-center mb-2">
          <div className="avatar">
            <div className="w-8 h-8 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
        </button>

      </div>

    </div>

  );
}

export default NavBar;
