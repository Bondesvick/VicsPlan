import React, { Component } from 'react'

export default class CreateProject extends Component {
   
    state = {
        title: "",
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create new project</h5>

                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input onChange={this.handleChange} type="text" id="title"/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea onChange={this.handleChange} type="text" id="content"
                        className="materialize-textarea">

                        </textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
