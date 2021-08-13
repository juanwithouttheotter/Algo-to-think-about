import React, { Component } from 'react';
import axios from 'axios';
import DoBSelector from '../../components/DoBSelector';
import SelectInput from '../../components/SelectInput';
import Btn from '../../components/Button';

class NewEmployees extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        name: { first: '', last: '' },
                        sex: '',
                        birthday: '',
                };
        }

        handleFirstNameChange = (e) => {
                const { name, sex, birthday } = this.state;
                this.setState({
                        name: { first: e.target.value, last: name.last },
                        sex,
                        birthday,
                });
        };

        handleLastNameChange = (e) => {
                const { name, sex, birthday } = this.state;
                this.setState({
                        name: { first: name.first, last: e.target.value },
                        sex,
                        birthday,
                });
        };

        handleSexChange = (e) => {
                const { name, birthday } = this.state;
                this.setState({
                        name,
                        sex: e.target.value,
                        birthday,
                });
        };

        handleBirthdayChange = (date) => {
                const { name, sex } = this.state;
                this.setState({
                        name,
                        sex,
                        birthday: date,
                });
        };

        handleCreateEmployee = async (e) => {
                e.preventDefault();
                const newEmployee = this.state;
                axios.post('http://localhost:3001/employee', newEmployee)
                        .then(({ data }) => {
                                alert(data.message);
                        })
                        .catch((err) => {
                                alert(err);
                        });

                this.setState({
                        name: { first: '', last: '' },
                        sex: '',
                        birthday: '',
                });
        };

        render() {
                const sexOpts = [
                        { optValue: '', optName: 'Select Sex', key: 'sexOptTitle' },
                        { optValue: 'male', optName: 'Male', key: 'maleOpt' },
                        { optValue: 'female', optName: 'Female', key: 'femaleOpt' },
                        { optValue: 'no answer', optName: 'No Answer', key: 'noAnsOpt' },
                ];
                const { name, sex } = this.state;

                return (
                        <div className="">
                                <div className="columns">
                                        <div className="field is-offset-1 column is-5">
                                                <div className="control">
                                                        <input
                                                                className="input is-primary"
                                                                type="text"
                                                                placeholder="First name"
                                                                value={name.first}
                                                                onChange={this.handleFirstNameChange}
                                                        />
                                                </div>
                                        </div>
                                        <div className="field column is-5">
                                                <div className="control">
                                                        <input
                                                                className="input is-primary"
                                                                type="text"
                                                                placeholder="Last name"
                                                                value={name.last}
                                                                onChange={this.handleLastNameChange}
                                                        />
                                                </div>
                                        </div>
                                </div>
                                <div className="columns">
                                        <div className="column is-offset-1 is-one-quarter">
                                                <div className="select is-primary">
                                                        <SelectInput
                                                                className=""
                                                                options={sexOpts}
                                                                selectOnChange={this.handleSexChange}
                                                                selectValue={sex}
                                                        />
                                                </div>
                                        </div>
                                        <div className="column is-one-quarter is-offset-2">
                                                <DoBSelector classname="" dobOnChange={this.handleBirthdayChange} />
                                        </div>
                                        <div className="column">
                                                <Btn
                                                        name="Create"
                                                        btn="button is-primary"
                                                        btnAction={this.handleCreateEmployee}
                                                />
                                        </div>
                                </div>
                        </div>
                );
        }
}

export default NewEmployees;
