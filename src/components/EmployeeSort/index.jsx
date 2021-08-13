import React, { useState } from 'react';
import EmployeeData from '../EmployeeData';

const EmployeeSort = ({ filtEmplys, deleteEmployee }) => {
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
                <table className="table">
                        <thead>
                                <tr>
                                        <th key="ID" onClick={() => reqSort('id')}>
                                                Id
                                        </th>
                                        <th key="FIRSTNAME" onClick={() => reqSort('name', 'first')}>
                                                First Name
                                        </th>
                                        <th key="LASTNAME" onClick={() => reqSort('name', 'last')}>
                                                Last Name
                                        </th>
                                        <th key="SEX" onClick={() => reqSort('sex')}>
                                                Sex
                                        </th>
                                        <th key="BIRTHDAY" onClick={() => reqSort('birthday')}>
                                                Birthday
                                        </th>
                                </tr>
                        </thead>
                        <tbody>
                                <EmployeeData employees={filtEmplys} deleteEmployee={deleteEmployee} />
                        </tbody>
                </table>
        );
};

export default EmployeeSort;
