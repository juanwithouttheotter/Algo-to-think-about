import React, { Component } from 'react';
import EmployeeForm from '../../components/EmployeeForm';

class NewEmployees extends Component {
        render() {
                return (
                        <div className="columns is-flex">
                                <EmployeeForm operation="post" />
                        </div>
                );
        }
}

export default NewEmployees;
