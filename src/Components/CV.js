import React from 'react';
import Header from './CV/Header';
import MainContent from './CV/MainContent';

class CV extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <MainContent/>
            </div>
        );
    }
}

export default CV;
