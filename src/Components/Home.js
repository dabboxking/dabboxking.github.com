import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <Link to="/blog"  className="waves-effect waves-light btn-large">Blog</Link>
                </div>
                <div>
                    <Link to="/cv"  className="waves-effect waves-light btn-large">CV</Link>
                </div>
            </div>
        );
    }
}

export default Home;
