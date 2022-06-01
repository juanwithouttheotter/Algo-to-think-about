import React, { useState } from 'react';
import EmployeeData from '../EmployeeData';

const EmployeeSort = ({ filtEmplys, deleteEmployee, toggleModal }) => {
        const [sortConfig, setSortConfig] = useState({ key: null, direction: null, subKey: null });

        if (filtEmplys !== null) {
                filtEmplys.sort((a, b) => {
                        if (typeof a[sortConfig.key] === 'object') {
                                if (a[sortConfig.key][sortConfig.subKey] > b[sortConfig.key][sortConfig.subKey]) {
                                        return sortConfig.direction === 'ascending' ? -1 : 1;
                                }
                                if (b[sortConfig.key][sortConfig.subKey] > a[sortConfig.key][sortConfig.subKey]) {
                                        return sortConfig.direction === 'ascending' ? 1 : -1;
                                }
                        }
                        if (a[sortConfig.key] > b[sortConfig.key]) {
                                return sortConfig.direction === 'ascending' ? -1 : 1;
                        }
                        if (b[sortConfig.key] > a[sortConfig.key]) {
                                return sortConfig.direction === 'ascending' ? 1 : -1;
                        }
                        return 0;
                });
        }

        const reqSort = (key, subKey) => {
                let direction = 'ascending';
                if (sortConfig.key === key && sortConfig.direction === 'ascending') {
                        direction = 'descending';
                }
                setSortConfig({ key, direction, subKey });
        };

        return (
                <table className="table is-striped is-hoverable ">
                        <thead>
                                <tr>
                                        <th className="is-clickable" key="id" onClick={() => reqSort('_id')}>
                                                Id
                                        </th>
                                        <th
                                                className="is-clickable"
                                                key="firstname"
                                                onClick={() => reqSort('name', 'first')}
                                        >
                                                First Name
                                        </th>
                                        <th
                                                className="is-clickable"
                                                key="lastname"
                                                onClick={() => reqSort('name', 'last')}
                                        >
                                                Last Name
                                        </th>
                                        <th className="is-clickable" key="sex" onClick={() => reqSort('sex')}>
                                                Sex
                                        </th>
                                        <th className="is-clickable" key="birthday" onClick={() => reqSort('birthday')}>
                                                Birthday
                                        </th>
                                        <th key="updateBtn">{` `}</th>
                                        <th key="deleteBtn">{` `}</th>
                                </tr>
                        </thead>
                        <tbody>
                                <EmployeeData
                                        employees={filtEmplys}
                                        deleteEmployee={deleteEmployee}
                                        toggleModal={toggleModal}
                                />
                        </tbody>
                </table>
        );
};

export default EmployeeSort;
