import React, { Component } from 'react'
import firebase from '../config/fbConfig'


class Home extends Component {
    componentDidMount() {
        const db = firebase.firestore();
        console.log(db); //How to grab data from firestore database
    }
    render() {
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto perspiciatis ipsum itaque placeat, saepe, eius sequi beatae exercitationem ad facere earum unde cupiditate quas. Maxime, est rerum. Veritatis, nesciunt!</p>
            </div>
        )
    }
}

export default Home