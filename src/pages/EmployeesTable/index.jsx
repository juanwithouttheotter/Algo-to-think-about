import React, { Component } from 'react';
import axios from 'axios';
import EmployeeFilter from '../../components/EmployeeFilter';

class EmployeesTable extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        employees: [],
                };
        }

        componentDidMount() {
                axios.get(`http://localhost:3001/employees`)
                        .then(({ data }) => {
                                this.setState({ employees: data.data });
                        })
                        .catch((err) => {
                                alert(err);
                        });
        }

        deleteEmployee = (id) => {
                axios.delete(`http://localhost:3001/employee/${id}`).then((res) => {
                        const { employees } = this.state;

                        const empPos = employees.map((employee) => employee._id).indexOf(id);
                        employees.splice(empPos, 1);
                        console.log(employees);

                        this.setState({ employees });
                });
        };

        render() {
                const { employees } = this.state;
                return (
                        <div>
                                <h4 id="title">Employee Directory</h4>
                                <EmployeeFilter employees={employees} deleteEmployee={this.deleteEmployee} />
                        </div>
                );
        }
}

export default EmployeesTable;
