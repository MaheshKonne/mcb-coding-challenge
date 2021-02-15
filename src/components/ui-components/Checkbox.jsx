import './Checkbox.scss';

const Checkbox = ({ children, disabled }) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id="checkbox" name="" value="" disabled={disabled} />
            <label htmlFor="checkbox">
            {children}
            </label>
        </div>
    );
};

export default Checkbox;
