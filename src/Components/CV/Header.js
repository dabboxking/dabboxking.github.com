import React from 'react';

class Header extends React.Component {
    render() {
        return (
          <div>
            <header>
                <nav>
                    <div className="nav-wrapper">
                        <ul id="slide-out" className="side-nav fixed ">
                            <div className="nav-section">
                                <div className="nav-name right-align">Emmanuel J <strong>Reyme</strong></div>
                                <div className="nav-title right-align black-text">Software Engineer</div>
                            </div>
                            <div className="divider"></div>
                            <li><a href="#profile"><i className="small material-icons left">face</i>Profile</a></li>
                            <div className="divider"></div>
                            <li><a href="#experience"><i className="small material-icons left">business</i>Work Experience</a></li>
                            <div className="divider"></div>
                            <li><a href="#projects"><i className="small material-icons left">folder</i>Projects</a></li>
                            <div className="divider"></div>
                            <li><a href="#skills"><i className="small material-icons left">assignment</i>Skills</a></li>
                            <div className="divider"></div>
                            <li><a href="#education"><i className="small material-icons left">school</i>Education</a></li>
                            <div className="divider"></div>
                        </ul>
                        <a href="#" id="show-me" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
                    </div>
                </nav>
            </header>
          </div>

        );
    }
}

export default Header;
