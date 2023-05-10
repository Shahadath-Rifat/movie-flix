
import React from 'react';

function Header(props) {
  return (
    <header>
        <div className='container-flex'>
            <div className='flex'>
                <h1>{props.title}</h1>
            </div>    
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV Shows</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;
