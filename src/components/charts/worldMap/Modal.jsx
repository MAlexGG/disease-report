import React from 'react'

function Modal({ open, setOpen, selectedCountry}) {
  return (
    <>
        <div onClick={() => setOpen(false)}>
            <div onClick={(e) => e.stopPropagation()}>
                <p>{selectedCountry.country}</p>
                <p>{selectedCountry.cases}</p>
                <button onClick={() => setOpen(false)}>Close</button>
            </div>
        </div>
    </>
  )
}

export default Modal