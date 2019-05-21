import React from "react"
import { Link } from "gatsby"

const NavbarItem = ({ item }) => {
  if (item.items) {
    return item.items.map(item => {
      return (
        <li key={`${item.id}-li-child`} id={`${item.id}-li-child`}>
          <ul id="manual-guide-toc" className="manual-guide-toc child">
            <li key={`${item.id}-li-key`} id={`${item.id}-li`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          </ul>
        </li>
      )
    })
  }

  return (
    <li key={`${item.id}-li-key`} id={`${item.id}-li`}>
      <Link to={item.link}>{item.title}</Link>
    </li>
  )
}

export default NavbarItem
