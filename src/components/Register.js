import { useState } from "react";
import useUsersContext from "../hooks/use-users-context";

function Register() {
    const { createUser } = useUsersContext;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [matchPassword, setMatchPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChangeInUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleChangeInEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangeInFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleChangeInLastName = (event) => {
        setLastName(event.target.value);
    }
    const handleChangeInPhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }
    const handleChangeInPassword = (event) => {
        setPassword(event.target.value);
    }
    const handleChangeInMatchPassword = (event) => {
        setMatchPassword(event.target.value);
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
            <input value={username} onChange={handleChangeInUsername} />
            <label>Email:</label>
            <input value={email} onChange={handleChangeInEmail} />
            <label>First Name:</label>
            <input value={firstName} onChange={handleChangeInFirstName} />
            <label>Last Name:</label>
            <input value={lastName} onChange={handleChangeInLastName} />
            <label>Phone Number:</label>
            <input value={phoneNumber} onChange={handleChangeInPhoneNumber} />
            <label>Password:</label>
            <input value={password} onChange={handleChangeInPassword} />
            <label>Confirm Password:</label>
            <input value={matchPassword} onChange={handleChangeInMatchPassword} />
            <button >Create Account</button>
        </form>
    </div>
  );
}

export default Register;
