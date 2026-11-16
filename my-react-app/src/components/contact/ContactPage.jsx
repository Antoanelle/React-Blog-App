import React, {useState} from 'react';
import styles from './ContactPage.module.css';

function ContactPage(){
    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    const submitForm = (e) => {
        e.preventDefault();
        if (formInput.name.length < 3){
            console.error('Name should be min length of 3 characters')
            return
        }
        console.log(formInput)
    };

    return <div className={styles.contact} onSubmit={submitForm}>
        <h3>Contact Form</h3>
        <form >
            <input 
                minLength={3}
                placeholder='Name' 
                value={formInput.name} 
                onChange={(e) => setFormInput({...formInput, name: e.target.value})}/>
            <input 
                placeholder='Email' 
                type='email'
                value={formInput.email} 
                onChange={(e) => setFormInput({...formInput, email: e.target.value})}/>
            <textarea 
                placeholder='Message'
                value={formInput.message} 
                onChange={(e) => setFormInput({...formInput, message: e.target.value})}/>    
            <button type='submit'>Submit</button>
        </form>
    </div>;

}

export default ContactPage;