import React from 'react';

class Social extends React.Component {
    render() {
        return (
          <div className="fixed-action-btn social-section">
              <a className="btn-floating btn-large red">
                  <i className="large material-icons">contacts</i>
              </a>
              <ul>
                  <li className="social-icons">
                      <a target="_blank" href="https://www.linkedin.com/in/emmanueljreyme" className="btn-floating blue">
                          <i className="fa fa-linkedin"></i>
                      </a>
                  </li>
                  <li className="social-icons">
                      <a target="_blank" href="https://twitter.com/dabboxking" className="btn-floating blue">
                          <i className="fa fa-twitter"></i>
                      </a>
                  </li>
                  <li className="social-icons">
                      <a target="_blank" href="https://github.com/dabboxking" className="btn-floating blue">
                          <i className="fa fa-github"></i>
                      </a>
                  </li>
              </ul>
          </div>
        );
    }
}
export default Social;
