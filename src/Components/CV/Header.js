import React from 'react';

class Header extends React.Component {
    render() {
        return (
          <div>
            <header>
                <nav>
                    <ul id="slide-out" className="side-nav fixed">
                        <li><div className="nav-section">
                          <div className="nav-name right-align">Emmanuel J <strong>Reyme</strong></div>
                          <div className="nav-title right-align black-text">The Programmer</div>
                        </div></li>
                        <li><a href="#profile"><i className="small material-icons">face</i>Profile</a></li>
                        <li><div className="divider"></div></li>
                        <li><a href="#experience"><i className="small material-icons">business</i>Work Experience</a></li>
                        <li><div className="divider"></div></li>
                        <li><a href="#projects"><i className="small material-icons left">folder</i>Projects</a></li>
                        <li><div className="divider"></div></li>
                        <li><a href="#skills"><i className="small material-icons left">assignment</i>Skills</a></li>
                        <li><div className="divider"></div></li>
                        <li><a href="#education"><i className="small material-icons left">school</i>Education</a></li>
                        <li><div className="divider"></div></li>
                    </ul>
                    <a href="#" id="show-me" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
                </nav>
            </header>
          </div>
        );
    }
}

export default Header;
