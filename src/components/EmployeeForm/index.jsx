import React, { useReducer } from 'react';
import axios from 'axios';
import InputControl from '../InputControl';
import SelectInput from '../SelectInput';
import DoBSelector from '../DoBSelector';
import Btn from '../Button';
import formReducer from '../../reducers/formReducer';

const EmployeeForm = ({ operation, empData, modalState, toggleModal }) => {
        const initialFormState = {
                name: { first: '', last: '' },
                sex: '',
                birthday: '',
        };

        const [state, dispatch] = useReducer(formReducer, initialFormState);

        const handleInputChange = (key, newValue) => {
                dispatch({ key, newValue });
        };

        if (modalState && state !== empData) {
                handleInputChange(operation, empData);
        }

        const btnPostAction = async (e) => {
                e.preventDefault();
                const newEmployee = state;
                axios.post('http://localhost:3001/employee', newEmployee)
                        .then(({ data }) => {
                                alert(data.message);
                        })
                        .catch((err) => {
                                alert(err);
                        });
                handleInputChange('reset', initialFormState);
        };
        const btnUpdateAction = async (e) => {
                e.preventDefault();
                axios.patch(`http://localhost:3001/employee/${state._id}`, state)
                        .then(({ data }) => {
                                alert(data.message);
                        })
                        .catch((err) => {
                                alert(err);
                        });
                handleInputChange('reset', initialFormState);
                toggleModal();
        };

        return (
                <div className="">
                        <div className="columns">
                                <div className="field is-offset-1 column is-5">
                                        <InputControl
                                                name="first"
                                                inputId="firstname"
                                                value={state.name.first}
                                                onChange={(e) => handleInputChange('first', e.target.value)}
                                        />
                                </div>
                                <div className="field column is-5">
                                        <InputControl
                                                name="last"
                                                inputId="lastname"
                                                value={state.name.last}
                                                onChange={(e) => handleInputChange('last', e.target.value)}
                                        />
                                </div>
                        </div>
                        <div className="columns">
                                <div className="column is-offset-1 is-one-quarter">
                                        <div className="select is-primary">
                                                <SelectInput
                                                        className=""
                                                        options="sex"
                                                        selectOnChange={(e) => handleInputChange('sex', e.target.value)}
                                                        selectValue={state.sex}
                                                />
                                        </div>
                                </div>
                                <div className="column is-one-quarter is-offset-2">
                                        <DoBSelector classname="" dobOnChange={handleInputChange} />
                                </div>
                                <div className="column">
                                        <Btn
                                                name={operation === 'post' ? 'Create' : 'Update'}
                                                btn="button is-primary"
                                                btnAction={operation === 'post' ? btnPostAction : btnUpdateAction}
                                        />
                                </div>
                        </div>
                </div>
        );
};

export default EmployeeForm;
