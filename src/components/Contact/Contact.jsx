import Button from '../ui-components/Button';
import Checkbox from '../ui-components/Checkbox';
import InputField from '../ui-components/InputField';
import Title from '../ui-components/Title';
import './Contact.scss';
import contactImg from '../../assets/Illustration.png';

const Contact = () => {
    return (
        <div className="contact">
            <div className="imageContainer">
                <img src="" />
            </div>
            <div>
                <Title size="l" color="black">Join the DSGN Community.</Title>
                <InputField label="Name" />
                <InputField label="Email address" />
                <InputField label="Date of birth" />
                <InputField label="Designation" />
                <Checkbox>
                    <span>
                        Accept the <a href="#">Terms & Conditions</a>
                    </span>
                </Checkbox>
                <Button variant="contained">Submit</Button>
            </div>
        </div>        
    );
};

export default Contact;
