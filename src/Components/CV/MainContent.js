import React from 'react';

import Profile from './Profile';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';
import Education from './Education';
import Social from './Social';

class MainContent extends React.Component {
    render() {
        return (
            <main className="mainStyle">
                <div id="cv" className="row">
                    <Profile url="https://su2ipcm900.execute-api.us-east-1.amazonaws.com/prod/quote/random"/>
                      {/* url="http://localhost:3030/api/quotes/random"/> */}
                    <Experience/>
                    <Project/>
                    <Skill/>
                    <Education/>
                    <Social/>
                </div>
            </main>
        );
    }
}

export default MainContent;
