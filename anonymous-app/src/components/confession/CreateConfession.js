import React, { Component } from 'react';

class CreateConfession extends Component {

    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

        return (
            <div className="signin-container">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="sign-title">New Confession</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="title" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn-dark">Create</button>
                    </div>
                </form>

            </div >
        )
    }
}

export default CreateConfession;