import React, { Component } from 'react';
import axios from 'axios';
const { Provider, Consumer } = React.createContext();
const profileAxios = axios.create();

profileAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const getAge = (Bdate) => {
    const Bday = +new Date(Bdate);
    const age =  ((Date.now() - Bday) / (31557600000));
    return age 
}

class MainProvider extends Component {
    constructor() {
        super();
        this.state= {
            adultMale: [],
            adultFemale: [],
            teenMale: [],
            teenFemale: [],
            kidMale: [],
            kidFemale: [],
            profiles: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    getProfiles = () => {
        return profileAxios.get("/api/profile")
            .then(response => {
                this.setState({ profiles: response.data });
                return response;
            })
    }

    addProfile = (newProfile) => {
        return profileAxios.post('/api/profile/', newProfile)
        .then(response => {
            this.setState(prevState => {
                return { profiles: [...prevState.profiles, response.data] }
            });
            return response;
        })
    }

    editProfile = (profileId, profile) => {
        return profileAxios.put(`/api/profile/${profileId}`, profile)
            .then(response => {
                this.setState(prevState => {
                    const updatedProfile = prevState.profiles.map(profile => {
                        return profile._id === response.data._id ? response.data : profile
                    })
                    return { profiles: updatedProfile }
                })
                return response;
            })
    }

    deleteProfile = (profileId) => {
        return profileAxios.delete(`/api/profile/${profileId}`)
        .then(response => {
            this.setState(prevState => {
                const updatedProfile = prevState.profiles.filter(profile => {
                    return profile._id !== profileId
                })
                return { profiles: updatedProfile }
            })
            return response;
        })
    }
    
    signup = (userInfo) => {
        const { username, password, name, height, weight, hair, eye, pants, shirt, neck, sleeve, suit, waist, inseam, shoe, birthday, gender, phone, email, ethnicity, carYear, carMake, carModel, skills } = userInfo;

        //Create a user object from userInfo without the profile info
        const newUserInfo = {
            username,
            password
        }
        return axios.post("/auth/signup", newUserInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                //Create profile object containing everything but the user info
                const newUserProfile = {
                    name, height, weight, hair, eye, pants, shirt, neck, sleeve, suit, waist, inseam, shoe, birthday, gender, phone, email, ethnicity, carYear, carMake, carModel, skills
                }
                //call the create profile function
                this.addProfile(newUserProfile)
                return 'hello';
            })
    }

    login = (credentials) => {
        return profileAxios.post('/auth/login', credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem('user', JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                // this.getProfiles();
                return response;
            })
    }

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.setState({
            profiles: [],
            user: {},
            token: ""
        })
    }

    getAdultMale = () => {
        axios.get('/profile').then((res) => {
            const adultMaleFilter = res.data.filter((category) => {
                return category.gender === "Male" && getAge(category.birthday) >= 18
            })
            this.setState({adultMale: adultMaleFilter})
        })
        
    }

    getAdultFemale = () => {
        axios.get('/profile').then((res) => {
            const adultFemaleFilter = res.data.filter((category) => {
                return category.gender === "Female" && getAge(category.birthday) >= 18
            })
            this.setState({adultFemale: adultFemaleFilter})
        })
    }

    getTeenMale = () => {
        axios.get('/profile').then((res) => {
            const teenMaleFilter = res.data.filter((category) => {
                const age = getAge(category.birthday)
                return category.gender === "Male" && age >= 14 && age < 18
            })
            this.setState({teenMale: teenMaleFilter})
        })
    }
    getTeenFemale = () => {
        axios.get('/profile').then((res) => {
            const teenFemaleFilter = res.data.filter((category) => {
                const age = getAge(category.birthday)
                return category.gender === "Female" && age >= 14 && age < 18
            })
            this.setState({teenFemale: teenFemaleFilter})
        })
    }

    getKidMale = () => {
        axios.get('/profile').then((res) => {
            const kidMaleFilter = res.data.filter((category) => {
                return category.gender === "Male" && getAge(category.birthday) < 14
            })
            this.setState({kidMale: kidMaleFilter})
        })
    }

    getKidFemale = () => {
        axios.get('/profile').then((res => {
            const kidFemaleFilter = res.data.filter((category) => {
                return category.gender === "Female" && getAge(category.birthday) < 14
            })
            this.setState({kidFemale: kidFemaleFilter})
        }))
    } 


    render() {
        return (
            <div>
                <Provider value={{
                    getProfiles: this.getProfiles,
                    addProfile: this.addProfile,
                    editProfile: this.editProfile,
                    deleteProfile: this.deleteProfile,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    getAdultMale: this.getAdultMale,
                    getAdultFemale: this.getAdultFemale,
                    getTeenMale: this.getTeenMale,
                    getTeenFemale: this.getTeenFemale,
                    getKidMale: this.getKidMale,
                    getKidFemale: this.getKidFemale,
                    ...this.state,
                }}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

export default MainProvider
export function withProvider (Comp) {
    return props => <Consumer>
                        {value => <Comp {...value} {...props} />}
                    </Consumer>
}