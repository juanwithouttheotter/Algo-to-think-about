import React, { Component } from 'react';

class Home extends Component {
        render() {
                return (
                        <div className="content columns is-flex is-justify-content-center">
                                <div className="column is-three-quarters">
                                        <h4 className="title is-large is-flex is-justify-content-cneter">
                                                Welcome to the Employee Directory!
                                        </h4>
                                        <div className="">
                                                <p className=" is-offset-1 is-10">
                                                        With this application you will be able to add new employees to
                                                        your database, edit pre-existing employees, sort and search for
                                                        employee groups based on birthday, name, and sex.{' '}
                                                </p>
                                        </div>
                                </div>
                        </div>
                );
        }
}

export default Home;
