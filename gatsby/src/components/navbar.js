import React from "react"

import NavbarItem from "./navbarItem"

const Navbar = ({ title, items }) => {
  return (
    <div className="col-md-3 manual-guide-toc" role="navigation">
      <button
        type="button"
        className="navbar-toggle"
        style={{ marginTop: "-15px", paddingRight: "20px" }}
        data-toggle="collapse"
        data-target="#guide-collapse"
        data-original-title=""
        title=""
      >
        <span className="sr-only">Toggle navigation</span>
        <i className="fa fa-bars" />
      </button>
      <h3>{title}</h3>
      <div className="collapse navbar-collapse" id="guide-collapse">
        <ul id="manual-guide-toc" className="manual-guide-toc">
          {items.map(item => {
            return <NavbarItem key={`${item.id}-item-key`} item={item} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
