import React from 'react'

function Button(props) {
 const { children, theme , clt , onClick} = props;

    return (
        <button onClick={onClick} className={`${clt} px-4 py-2 rounded-[10px] text-lg  font-semibold ${theme === 'dark' ? 'bg-(--color-primary) text-(--color-bg)' : 'bg-(--color-bg) text-(--color-primary) '}`}>
            {children}
        </button>
    );
}

export default Button
