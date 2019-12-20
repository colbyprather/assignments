import React from 'react';
import Profile from "./Profile";
// import AddProfileForm from "./AddProfileForm"
import { withProvider } from '../MainProvider';

class ProfileList extends React.Component {
    componentDidMount(){
        this.props.getProfiles()
    }
    // call getProfiles using the useEffect hook or ComponentDidMount
    render(){
        const profiles = this.props.profiles.map(profile => {
            return (
                <Profile
                    key={profile._id}
                    profile={profile}
                    editProfile={this.props.editProfile}
                    deleteProfile={this.props.deleteProfile}
                />
            )
        })

        return (
            <main>
                {/* <AddProfileForm editProfile={this.props.editProfile} /> */}
                {profiles}
            </main>
        )
    }
}

export default withProvider(ProfileList);