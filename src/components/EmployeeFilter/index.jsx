import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import EmployeeSort from '../EmployeeSort';
import SelectInput from '../SelectInput';
import Btn from '../Button';

const EmployeeFilter = ({ employees, deleteEmployee, toggleModal }) => {
        const [filtEmplys, setfiltEmplys] = useState(employees);
        const [searchInput, setSearchInput] = useState({ category: '', search: '' });

        useEffect(() => {
                setfiltEmplys(employees);
        }, [employees]);

        const handleInputChange = (e) => {
                setSearchInput({ search: e.target.value, category: searchInput.category });
        };
        const handleSelectChange = (e) => {
                console.log(e.target.name);
                setSearchInput({ category: e.target.value, search: searchInput.search });
                console.log(searchInput);
        };

        const handleFormFilter = (e) => {
                e.preventDefault();
                if (searchInput.search === '') {
                        setfiltEmplys(employees);
                } else if (searchInput.category === 'birthday') {
                        const searchDate = new Date(searchInput.search);
                        setfiltEmplys(
                                employees.filter(
                                        (employee) =>
                                                employee[searchInput.category].split('T')[0] ===
                                                searchDate.toISOString().split('T')[0]
                                )
                        );
                } else if (searchInput.category === 'first' || searchInput.category === 'last') {
                        setfiltEmplys(
                                employees.filter(
                                        (employee) => employee.name[searchInput.category] === searchInput.search
                                )
                        );
                } else {
                        setfiltEmplys(
                                employees.filter((employee) => employee[searchInput.category] === searchInput.search)
                        );
                }
        };

        return (
                <div>
                        <div className="columns">
                                <div className="column is-half">
                                        <SearchBar
                                                inputValue={searchInput.search}
                                                placeholder="Search in directory..."
                                                searchOnChange={handleInputChange}
                                        />
                                </div>
                                <div className="column is-narrow is-primary select">
                                        <SelectInput
                                                options="category"
                                                selectOnChange={handleSelectChange}
                                                selectValue={searchInput.category}
                                        />
                                </div>
                                <div className="column">
                                        <Btn btn="button is-primary" btnAction={handleFormFilter} name="Filter" />
                                </div>
                        </div>
                        <div className="columns">
                                <div className="column" />
                                <EmployeeSort
                                        filtEmplys={filtEmplys}
                                        deleteEmployee={deleteEmployee}
                                        toggleModal={toggleModal}
                                />
                                <div className="column" />
                        </div>
                </div>
        );
};

export default EmployeeFilter;
