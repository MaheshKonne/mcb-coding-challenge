import './Checkbox.scss';

const Checkbox = ({ children }) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id="checkbox" name="" value="" />
            <label htmlFor="checkbox">
            {children}
            </label>
        </div>
    );
};

export default Checkbox;
