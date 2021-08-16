import React from 'react';

function SelectInput({ className, options, selectOnChange, selectValue }) {
        let opts = [];
        if (options === 'sex') {
                opts = [
                        { optValue: '', optName: 'Select Sex', key: 'sexOptTitle' },
                        { optValue: 'male', optName: 'Male', key: 'maleOpt' },
                        { optValue: 'female', optName: 'Female', key: 'femaleOpt' },
                        { optValue: 'no answer', optName: 'No Answer', key: 'noAnsOpt' },
                ];
        }
        if (options === 'category') {
                opts = [
                        { optValue: '', optName: 'Choose Category', key: 'catOptKey' },
                        { optValue: 'first', optName: 'First name', key: 'firstOptKey' },
                        { optValue: 'last', optName: 'Last name', key: 'lastOptKey' },
                        { optValue: 'sex', optName: 'Sex', key: 'sexCatOptKey' },
                        { optValue: 'birthday', optName: 'Birthday', key: 'birthdayOptKey' },
                ];
        }

        return (
                <select className={className} onChange={selectOnChange} value={selectValue}>
                        {opts.map((opt) => {
                                const { optValue, optName, key } = opt;
                                if (opt.optvalue === '') {
                                        return (
                                                <option defaultValue key={key}>
                                                        {optName}
                                                </option>
                                        );
                                }
                                return (
                                        <option value={optValue} key={key}>
                                                {optName}
                                        </option>
                                );
                        })}
                </select>
        );
}

export default SelectInput;
