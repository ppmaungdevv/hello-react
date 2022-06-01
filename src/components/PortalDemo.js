import React from 'react'
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <div>PortalDemo</div>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo
// react portal is used to render component not under React-root element in index.html
// ReactDOM.createPortal accept two params (JSX, DOM node to mount element onto)
// first params can be any element taht react can render number, jsx, component
// 
// mostly use and useful for Modal box
// useful resource links
// https://codesandbox.io/s/00254q4n6p
// https://codepen.io/gaearon/pen/jGBWpE