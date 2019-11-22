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
                    <h1>Nikk<span>i</span></h1>
                    <h1><span>W</span>ho</h1>
                    <h1><span>U</span></h1>
                    <div>
                        <p>
                            I push for creativity, reliable tech, and clean UX/UI and hope my work reflects that. I love
                            problem-solving and designs that push the boundaries. The best designs are the ones that
                            really make you think, especially the weird ones.
                        </p>
                        <p>
                            As for the technology side of things, I am into React and everything front end related.
                            Seeings the changes you can make with Front End tech motivates me to continue to learn and
                            see what's new. Realizing UX/UI is super crucial to web development (obviously), I decided
                            to study UX/UI because of my love for simplistic and aesthetically pleasing designs.
                        </p>
                        <p>
                            Outside of looking at my console the whole day, I enjoy a lot of different activities.
                            Graduating from Culinary School and working in a Restaurant, my love for cooking still lives
                            on forever! (Ask me for food tips!) Being born and raised in Vancouver BC made me a very
                            active person. Hikes <span role='img' aria-label='img'>🧗‍♂</span>️, Ultimate <span
                            role='img' aria-label='img'>🥏</span>,
                            workout <span role='img' aria-label='img'>💪</span> and, most importantly,
                            basketball <span role='img' aria-label='img'>🏀</span>!
                            One random thing I love to do is research basketball analytics <span role='img'
                                                                                                 aria-label='img'>📊</span>.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Nav;
