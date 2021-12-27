import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null
    };
    this.loadUserData = this.loadUserData.bind(this);

  }
  loadUserData() {
    this.setState({userData:null});
    this.fetchID = fetchUserData(this.props.username, (userData) => {
  this.setState({ userData });
});
  }
  componentDidMount() {
    this.loadUserData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.username !== prevProps.username) {
      cancelFetch(this.fetchId);
      this.loadUserData();
    }
  }

  componentWillUnmount() {
    cancelFetch(this.fetchId);
  }
  render() {
    const isLoading = this.state.userData === null ? true : false;

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }
    var name = isLoading ? 'Loading...Please Wait.' : this.state.userData.name;

    var bio = isLoading ? 'Loading...Please Wait.' : this.state.userData.bio;

    var friends = isLoading ? [] : this.state.userData.friends;

    var img = !isLoading && <img src={this.state.userData.profilePictureUrl} alt="" />;

    return (
      <div className={className}>
        <div className="profile-picture">{img}</div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );

  }
}