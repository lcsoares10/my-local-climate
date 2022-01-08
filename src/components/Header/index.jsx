import React from 'react';



function Header() {
    const date = new Date(); 

  return (
    <header>
        <p>developer by Lucas Soares</p>
        <p>{date.toLocaleDateString()}</p>
    </header>

  );
}

export default Header;