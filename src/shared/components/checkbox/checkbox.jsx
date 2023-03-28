import React from 'react';

export const Checkbox = ({ id, label, value, isSelected, name, onChange }) => (
    <label
        htmlFor={`${id}-checkbox`}
        className={`onlineForm__list_option ${isSelected === value && 'onlineForm__list_option_active'}`}
    >
        <input
            name={name}
            id={`${id}-checkbox`}
            type="radio"
            value={value}
            checked={isSelected === value}
            onChange={onChange}
        />
        <span>
            {label}
        </span>
    </label>
);
