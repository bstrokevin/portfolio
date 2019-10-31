import React from 'react';
import '../styles/Style.scss';

const Nav = () => {
    return (
        <React.Fragment>
            <h1 className='navTitle'>About Nikki Wu</h1>
            <input id="burger" type="checkbox"/>
            <label htmlFor="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className='about-container'>
                <div className='about-1'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet asperiores assumenda, at
                        atque beatae, corporis deserunt earum eius eum ex facere facilis fuga fugiat iste itaque
                        laudantium molestias natus nisi, non odio odit placeat quibusdam reprehenderit sed totam veniam
                        vero. Aperiam at, dolorem doloribus neque nobis reiciendis reprehenderit sit!
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Nav;
