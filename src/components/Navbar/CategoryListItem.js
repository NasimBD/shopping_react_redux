import React from 'react'

export const CategoryListItem = (props) => {
  return (
    <li onClick={() => props.onClickEv(props.category)}><a href={`#${props.category}`} className="dropdown-item text-capitalize" >{props.category}</a></li>
  )
}
