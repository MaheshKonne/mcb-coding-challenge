import { useState } from 'react';
import './InputField.scss';

const InputField = ({ label }) => {
    const [value, setValue] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleTextChange = text => {
        setValue(text);
        
        if (text) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    return (
        <div id="float-label">
            <input
                type="text"
                value={value}
                onChange={(e) => handleTextChange(e.target.value)} />
            <label htmlFor="email" className={isActive ? 'active' : ''}>{label}</label>
        </div>
    );
};

export default InputField;
