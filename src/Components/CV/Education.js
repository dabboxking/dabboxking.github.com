import React from 'react';

class Education extends React.Component {
    render() {
        return (

          <div id="education" className="give-me-height real-section section scrollspy">
              <div className="col s12 m12 section-title">
                  <h1 className="white-text">Education</h1>
              </div>
              <div className="row">
                  <div className="left col s6 m6">
                      <h5 className="left-align">Marshall University</h5>
                  </div>
                  <div className="right col s6 m6">
                      <p className="section-date right-align">August 2010 - May 2014</p>
                      <p className="section-subtitle right-align">Bachelor of Science</p>
                  </div>
                  <div className="col s12 m12">
                      <ul className="ul-content">
                          <li>
                              <a target="_blank" href="http://www.marshall.edu/">Marshall.edu</a>
                          </li>
                          <li>
                              Huntington, West Virginia
                          </li>
                          <li>
                              Computer Science
                          </li>
                          <li>
                              Courses: Software Engineering, Computer Architecture, Database Engineering, Algorithm Analysis and Design, Internetworking, Operating Systems, Statistics, Calculus II
                          </li>
                      </ul>
                  </div>
              </div>
          </div>



        );
    }
}

export default Education;
