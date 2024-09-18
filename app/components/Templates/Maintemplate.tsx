import React from 'react'
import NavBar from '../organisms/NavBar'

interface Template{
    // header?: React.ReactElement;
    // footer?: React.ReactElement;
    children: React.ReactNode;
  };

const Maintemplate = ({children}: Template) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default Maintemplate