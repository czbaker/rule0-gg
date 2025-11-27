'use client'

import { Icon } from '@iconify/react'
import TopLogo from './TopLogo'

export default function AppBar() {
  return (
    <div className="navbar sticky top-0 z-100 bg-base-300 shadow-md">
      <div className="flex-1 pl-2">
        <TopLogo />
      </div>
      <div className="mr-4 flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div className="tooltip tooltip-bottom" data-tip="Add New Deck!">
              <a href="">
                <Icon icon="mdi:add-box" style={{ fontSize: '20px' }} className="tooltip" aria-label="Add Deck!" />
              </a>
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-end">
              <div role="button" tabIndex={0}>
                Test
              </div>
              <ul tabIndex={-1} className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
