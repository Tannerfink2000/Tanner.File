import React, { useState, useEffect } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function validateEmail(email) {
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return regex.test(email);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Your email is invalid.');
            return;
        }
        if (!name || !message) {
            setErrorMessage('Name and message are required.');
            return;
        }
        setErrorMessage('');
        // Submit form data here, or reset form data
        setFormState({ name: '', email: '', message: '' })
    }

    useEffect(() => {
        document.title = 'Contact Me | Your Name';
    }, []);

    return (
        <section>
            <h1>Contact me</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
