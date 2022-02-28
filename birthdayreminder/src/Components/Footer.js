import React from 'react'

export default function Footer({setPepole}) {
  return (
    <div>
        <button className="clear__button"  onClick={() => setPepole([])}>Clear All</button>
    </div>
  )
}
