import React from 'react';
import Btn from '../Button';

function TableData({ employees, deleteEmployee, toggleModal }) {
        return employees.map((employee) => {
                const { _id, name, sex, birthday } = employee;

                return (
                        <tr key={_id}>
                                <td>{}</td>
                                <td>{name.first}</td>
                                <td>{name.last}</td>
                                <td>{sex}</td>
                                <td>{birthday.substr(0, 10)}</td>
                                <td>
                                        <Btn
                                                btn="button is-primary is-small"
                                                btnAction={() => toggleModal(_id)}
                                                name="update"
                                        />
                                </td>
                                <td>
                                        <Btn btn="delete" id={_id} btnAction={() => deleteEmployee(_id)} />
                                </td>
                        </tr>
                );
        });
}

export default TableData;
