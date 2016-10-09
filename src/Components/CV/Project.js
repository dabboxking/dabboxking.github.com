import React from 'react';

class Project extends React.Component {
    render() {
        return (

          <div id="projects" className="real-section section scrollspy">
              <div className="col s12 m12 section-title">
                  <h1 className="white-text">Projects</h1>
              </div>
              <div className="row">
                  <div className="left col s6 m6">
                      <h5 className="left-align">
                          <a target="_blank" href="https://github.com/dabboxking/cyclock-project">Cyclock Project</a>
                      </h5>
                  </div>
                  <div className="right col s6 m6">
                      <p className="section-date right-align">May 2014 - Present</p>
                      <p className="section-subtitle right-align">Independent</p>
                  </div>
                  <div className="col s12 m12">
                      <ul className="ul-content">
                          <li>
                              A community based anti bike theft application.
                          </li>
                      </ul>
                      <div className="chip">Java</div>
                      <div className="chip">Spring</div>
                      <div className="chip">Thymeleaf</div>
                      <div className="chip">HTML</div>
                      <div className="chip">CSS</div>
                      <div className="chip">Postgres</div>
                      <div className="chip">Heroku</div>
                      <div className="chip">AWS</div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Project;
