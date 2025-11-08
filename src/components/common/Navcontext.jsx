import React, { createContext, useState } from 'react'

export const Navbarcontext = createContext();


const Navcontext = ({ children }) => {


  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <Navbarcontext.Provider value={[navOpen, setNavOpen]}>
        {children}
      </Navbarcontext.Provider>
    </div>
  )
}

export default Navcontext
