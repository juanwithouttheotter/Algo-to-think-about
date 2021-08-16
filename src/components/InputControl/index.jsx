import React from 'react';

const InputControl = ({ name, inputId, value, onChange }) => (
        <div className="control">
                <label htmlFor={inputId} className="label">
                        {name}
                        <input
                                type="text"
                                className="input is-primary"
                                id={inputId}
                                name={name}
                                placeholder={name}
                                value={value}
                                onChange={onChange}
                        />
                </label>
        </div>
);

export default InputControl;
