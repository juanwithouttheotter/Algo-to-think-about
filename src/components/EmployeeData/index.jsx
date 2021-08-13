import React from 'react';
import Btn from '../Button';

function TableData({ employees, deleteEmployee }) {
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
                                        <Btn btn="delete" btnAction={() => deleteEmployee(_id)} />
                                </td>
                        </tr>
                );
        });
}

export default TableData;
