import React, { Component } from 'react';
import EmployeeForm from '../../components/EmployeeForm';

class NewEmployees extends Component {
        render() {
                return (
                        <div className="">
                                <EmployeeForm operation="post" />
                        </div>
                );
        }
}

export default NewEmployees;
