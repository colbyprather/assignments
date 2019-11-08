import React from 'react';
import {withTodos} from './TodoProvider'
import Form from './Form'

class Todo extends React.Component {
    constructor(){
        super()

        this.state = {
            toggled: true
        }
    }

    toggle = () => {
        this.setState(prev => {
            return {
                toggled: !prev.toggled
            }
        })
    }

    render () {
        const {title, description, _id} = this.props.info
        return (
            <div>
                {this.state.toggled ?
                    <div className='todo'>
                        <h1>{title}</h1>
                        <h3>{description}</h3>
                        <button onClick={() => this.props.deleteTodo(_id)}>Delete</button>
                        <button onClick={this.toggle}>Edit</button>
                    </div>
                    :
                    <Form button="Save Changes" type='update' todo={this.props.info} toggle={this.toggle} />
                }
            </div>
        );
    }
};

export default withTodos(Todo);