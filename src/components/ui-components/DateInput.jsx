import './DateInput.scss';
import InputField from './InputField';

const DateInput = ({value, onChange, label}) => {
    const onDateChange = (date) => {
        debugger;
    };

    return (
        <div className="dateInput">
            <InputField type="date" label={label} value={value} onChange={onDateChange} />
        </div>
    );
};

export default DateInput;
