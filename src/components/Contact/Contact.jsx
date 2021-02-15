import Button from '../ui-components/Button';
import Checkbox from '../ui-components/Checkbox';
import InputField from '../ui-components/InputField';
import Title from '../ui-components/Title';
import './Contact.scss';
import contactImg from '../../assets/Illustration.png';
import { useState, useCallback } from 'react';
import DateInput from '../ui-components/DateInput';
import Dropdown from '../ui-components/Dropdown';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [designation, setDesignation] = useState('');

    const isValidEmail = useCallback(() => {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    }, [email]);

    const shouldEnableCheckbox = name.length >= 3 && isValidEmail(email) && dob && designation;

    return (
        <div className="contact">
            <div className="imageContainer">
                <img src={contactImg} alt="contact image" />
            </div>
            <div className="formContainer">
                <Title size="l" color="black">Join the DSGN Community.</Title>
                <InputField label="Name" value={name} onChange={setName} />
                <InputField label="Email address" value={email} onChange={setEmail} />
                <DateInput label="Date of birth" value={dob} onChange={setDob} />
                <Dropdown label="Designation" options={['Tesla', 'Volvo', 'Mercedes']} onChange={setDesignation} />
                <Checkbox disabled={!shouldEnableCheckbox}>
                    <span>
                        Accept the <a className="underlined" href="#">Terms & Conditions</a>
                    </span>
                </Checkbox>
                <Button variant="contained" onClick={() => {}}>Submit</Button>
            </div>
        </div>        
    );
};

export default Contact;
