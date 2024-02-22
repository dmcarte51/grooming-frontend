import { useState } from "react";

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [matchPassword, setMatchPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChangeInUsername = (event) => {
        setPages(event.target.value);
    }
    const handleChangeInEmail = (event) => {
        setPages(event.target.value);
    }
    const handleChangeInFirstName = (event) => {
        setPages(event.target.value);
    }
    const handleChangeInLastName = (event) => {
        setPages(event.target.value);
    }
    const handleChangeInPhoneNumber = (event) => {
        setPages(event.target.value);
    }
    const handleChangeInPassword = (event) => {
        setPages(event.target.value);
    }
    const handleChangeInMatchPassword = (event) => {
        setPages(event.target.value);
    }


    const handleSubmit = (event) => { // create a new book
        event.preventDefault(); // the default is to refresh the page, this prevents that. 
        const createdUser = {username, email, firstName, lastName, password, matchPassword, phoneNumber};
        createUser(createdUser);
        setEmail('')
        setFirstName('')
        setLastName('')
        setPhoneNumber('')
        setPassword('')
        setMatchPassword('')
        setUsername('')
    }

    
  return (
    <div>
        <div>Register</div>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input value={title} onChange={handleChangeInUsername} />
            <label>Email:</label>
            <input value={author} onChange={handleChangeInEmail} />
            <label>First Name:</label>
            <input value={pages} onChange={handleChangeInFirstName} />
            <label>Last Name:</label>
            <input value={pages} onChange={handleChangeInLastName} />
            <label>Phone Number:</label>
            <input value={pages} onChange={handleChangeInPhoneNumber} />
            <label>Password:</label>
            <input value={pages} onChange={handleChangeInPassword} />
            <label>Confirm Password:</label>
            <input value={pages} onChange={handleChangeInMatchPassword} />
            <button >Create Account</button>
        </form>
    </div>
  );
}

export default Register;
