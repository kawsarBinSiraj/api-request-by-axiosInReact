

import React, { Component } from 'react';
import axios from 'axios';

export default class ListGroup extends Component {

    // define state
    state = {
        data: []
    };

    // api request by axios
    loadData = () => {
        return axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(result => {
                this.setState({
                    data: result.data
                });
            })
            .catch(error => {
                console.error("error: ", error);
            });
    };

    // componentWillMount
    // loadData() call
    componentWillMount(){
        this.loadData();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <ul className="list-group mt-5">
                        <li className="list-group-item bg-success text-light text-center">
                            <h4>This information taken from <span style={{ color: 'yellow' }}>jasonplaceholder.com</span> for testing by <span style={{ color: 'yellow' }}>Api</span> request</h4>
                        </li>
                        {this.state.data.map(item =>
                            <li key={item.id} className="list-group-item">
                                <p><strong>ID : {item.id}</strong></p>
                                <p>User Name : {item.username}</p>
                                <p>Name : {item.name}</p>
                                <p>Email : {item.email}</p>
                            </li>
                        )}
                        
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
