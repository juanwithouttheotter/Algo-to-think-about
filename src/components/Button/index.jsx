import React from 'react';

import './Button.css';

function Btn({ btn, btnAction, name }) {
        return (
                <button className={btn} onClick={btnAction} type="button">
                        {name}
                </button>
        );
}

export default Btn;
