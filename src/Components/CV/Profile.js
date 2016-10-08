import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    render() {
        return (
            <div id="profile" className="give-me-height section scrollspy profile">
                <div id="profile-title" className="col s12 m12">
                    <h1>Emmanuel J<strong> Reyme</strong>
                    </h1>
                    <blockquote>
                        <p id="content" className="flow-text ">"{this.state.data.content}"</p>
                        <p id="author" className="flow-text right-align">- {this.state.data.author}</p>
                    </blockquote>
                </div>
            </div>
        );
    }
}
export default Profile;
