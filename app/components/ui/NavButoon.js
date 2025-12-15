import React from 'react';

function NavButoon(props) {
    const { children, theme } = props;

    return (
        <button className={`px-4 py-2 rounded-[10px] text-lg  font-semibold ${theme === 'dark' ? 'bg-(--color-primary) text-(--color-bg)' : 'bg-(--color-bg) text-(--color-primary) '}`}>
            {children}
        </button>
    );
}

export default NavButoon;
