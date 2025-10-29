import React from "react";

class UserClass extends React.Component {

    constructor() {
        super()

        this.state = {
            userInfo : {
                name: "Name",
                location: "location",
                bio: "bio",
                avatar_url : "url"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch(
            'https://api.github.com/users/ishu-agrawal'
        )

        const json = await data.json();

        this.setState({
            userInfo: json
        })

    }

    render() {
        const {
            name,
            location,
            bio,
            avatar_url
        } = this.state.userInfo;

        return (
            <div className="user-card">
                <h3>Class Component</h3>
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Bio: {bio}</h2>
            </div>
        )
    }
}

export default UserClass;