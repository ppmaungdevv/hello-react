import React from 'react'

// function ForwardRefsComponent() {
//   return (
//     <div>
//         <input type='text' />
//     </div>
//   )
// }

const ForwardRefsComponent = React.forwardRef((props, ref) => {
  return (
    <div>
        <input type='text' ref={ref} />
    </div>
  )
})

export default ForwardRefsComponent
// ref forwarding cna be achieved by using forwardRef({function_component}) in child component
// by using forwarRef parent component can directly access input element in child by using this.ref_variable.current
// rarely used