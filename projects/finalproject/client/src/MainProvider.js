import React, { Component } from 'react'
import axios from 'axios'
const { Provider, Consumer } = React.createContext()

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
        }
    }

    getAdultMale = () => {
        axios.get('/profileItems').then((res) => {
            const adultMaleFilter = res.data.filter((category) => {
                return category.gender === "Male" && getAge(category.birthday) >= 18
            })
            this.setState({adultMale: adultMaleFilter})
        })
        
    }

    getAdultFemale = () => {
        axios.get('/profileItems').then((res) => {
            const adultFemaleFilter = res.data.filter((category) => {
                return category.gender === "Female" && getAge(category.birthday) >= 18
            })
            this.setState({adultFemale: adultFemaleFilter})
        })
    }

    getTeenMale = () => {
        axios.get('/profileItems').then((res) => {
            const teenMaleFilter = res.data.filter((category) => {
                const age = getAge(category.birthday)
                return category.gender === "Male" && age >= 14 && age < 18
            })
            this.setState({teenMale: teenMaleFilter})
        })
    }
    getTeenFemale = () => {
        axios.get('/profileItems').then((res) => {
            const teenFemaleFilter = res.data.filter((category) => {
                const age = getAge(category.birthday)
                return category.gender === "Female" && age >= 14 && age < 18
            })
            this.setState({teenFemale: teenFemaleFilter})
        })
    }

    getKidMale = () => {
        axios.get('/profileItems').then((res) => {
            const kidMaleFilter = res.data.filter((category) => {
                return category.gender === "Male" && getAge(category.birthday) < 14
            })
            this.setState({kidMale: kidMaleFilter})
        })
    }

    getKidFemale = () => {
        axios.get('/profileItems').then((res => {
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
                    ...this.state,
                    getAdultMale: this.getAdultMale,
                    getAdultFemale: this.getAdultFemale,
                    getTeenMale: this.getTeenMale,
                    getTeenFemale: this.getTeenFemale,
                    getKidMale: this.getKidMale,
                    getKidFemale: this.getKidFemale,
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