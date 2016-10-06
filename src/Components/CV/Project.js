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
                          <a target="_blank" href="https://github.com/dabboxking/league">Project League</a>
                      </h5>
                  </div>
                  <div className="right col s6 m6">
                      <p className="section-date right-align">June 2016 - Present</p>
                      <p className="section-subtitle right-align">Independent</p>
                  </div>
                  <div className="col s12 m12">
                      <ul className="ul-content">
                          <li>
                              Team management at its finest!
                          </li>
                      </ul>
                      <div className="chip">Java</div>
                      <div className="chip">Spring</div>
                      <div className="chip">Angular JS</div>
                      <div className="chip">HTML</div>
                      <div className="chip">CSS</div>
                      <div className="chip">Postgres</div>
                      <div className="chip">Heroku</div>
                      <div className="chip">AWS</div>
                  </div>
              </div>
              <div className="divider"></div>
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
              <div className="divider"></div>
              <div className="row">
                  <div className="left col s6 m6">
                      <h5 className="left-align">Data Visualization with NoSQL</h5>
                  </div>
                  <div className="right col s6 m6">
                      <p className="section-date right-align">February 2014 - May 2014</p>
                      <p className="section-subtitle right-align">@Marshall</p>
                  </div>
                  <div className="col s12 m12">
                      <ul className="ul-content">
                          <li>
                              Data Visualization framework built using NoSQL solutions to analyze datasets from the Healthcare Cost and Utilization Project. Python, MongoDB, D3
                          </li>
                      </ul>
                      <div className="chip">Python</div>
                      <div className="chip">MongoDB</div>
                      <div className="chip">D3</div>
                  </div>
              </div>
              <div className="divider"></div>
              <div className="row">
                  <div className="left col s6 m6">
                      <h5 className="left-align">Event Registration Application</h5>
                  </div>
                  <div className="right  col s6 m6">
                      <p className="section-date right-align">September 2013 - May 2014</p>
                      <p className="section-subtitle right-align">@Marshall</p>
                  </div>
                  <div className="col s12 m12">
                      <ul className="ul-content">
                          <li>
                              Worked in an agile development process to build a web-based event registration for upcoming Marshall University students.
                          </li>
                      </ul>
                      <div className="chip">C#</div>
                      <div className="chip">ASP.NET</div>
                      <div className="chip">MS SQL</div>
                      <div className="chip">HTML</div>
                      <div className="chip">CSS</div>
                  </div>
              </div>
              <div className="divider"></div>
              <div className="row">
                  <div className="left  col s6 m6">
                      <h5 className="left-align">Exam Parser</h5>
                  </div>
                  <div className="right  col s6 m6">
                      <p className="section-date right-align">January 2011 - May 2011</p>
                      <p className="section-subtitle right-align">@Marshall</p>
                  </div>
                  <div className="col s12 m12">
                      <ul className="ul-content">
                          <li>
                              Preprocessing tool used to format text documents into Respondus, Assessment Tool for Learning Systems. Python, Java
                          </li>
                      </ul>
                      <div className="chip">Java</div>
                      <div className="chip">Python</div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Project;
