import React from 'react';

function Btn({ btn, btnAction, name, id }) {
        return (
                <button className={btn} id={id} onClick={btnAction} type="button">
                        {name}
                </button>
        );
}

export default Btn;
