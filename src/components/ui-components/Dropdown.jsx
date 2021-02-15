import { useState } from 'react';
import './Dropdown.scss';
import { ReactComponent as ArrowImg } from '../../assets/arrow.svg';


const Dropdown = ({ label, options = [], onChange }) => {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleState = () => {
        setIsOpen(!isOpen);
    };

    const onOptionSelect = (selectedOption) => {
        setValue(selectedOption);
        onChange(selectedOption);
    };

    return (
        <div className="custom-select-wrapper" onClick={toggleState}>
            <div className={`custom-select ${isOpen ? 'open' : ''} ${(value || isOpen) ? 'animate' : ''}`}>
                <div className="custom-select__trigger">
                    <span className="label">{label}</span>
                    {
                        value ? (<span>{value}</span>) : null
                    }
                    <ArrowImg className="icon" />
                </div>
                <div className="custom-options">
                    {
                        options.map(option => {
                            return (
                                <span
                                    key={option}
                                    onClick={() => onOptionSelect(option)}
                                    className={`custom-option ${value === option ? 'selected' : ''}`}
                                    data-value="tesla">{option}</span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
