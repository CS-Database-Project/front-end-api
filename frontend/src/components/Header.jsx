import React from 'react';
import NavbarComponent from './NavbarComponent';

function Header(props) {

    return (
        <div>
            <NavbarComponent
                value = '' 
                placeholder = 'Search'
                type = 'text'
                onSearch = {{}}
            ></NavbarComponent>
        </div>
    );
}

export default Header;