import React, { Component } from 'react';

class Home extends Component {
        render() {
                return (
                        <div className="content">
                                <h4 className="title column is-three-fifths is-large is-offset-one-quarter">
                                        Welcome to the Employee Directory!
                                </h4>
                                <div className="columns">
                                        <p className="column is-offset-1 is-10">
                                                With this application you will be able to add new employees to your
                                                database, edit pre-existing employees, sort and search for employee
                                                groups based on birthday, name, and sex.{' '}
                                        </p>
                                </div>
                        </div>
                );
        }
}

export default Home;
