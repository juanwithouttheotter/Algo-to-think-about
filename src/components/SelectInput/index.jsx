import React from 'react';

function SelectInput({ className, options, selectOnChange, selectValue }) {
        return (
                <select className={className} onChange={selectOnChange} value={selectValue}>
                        {options.map((opt) => {
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
