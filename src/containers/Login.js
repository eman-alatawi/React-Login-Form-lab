import React, {useState} from 'react'
import { Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import "./Login.css"

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const validateForm = () =>{
        return email.length > 0 && password.length > 0
    }
    return (
        <div>
            <div className="Login">
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl autoFocus type="email" value={email} 
                        onChange={e => setEmail(e.target.value)}>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl autoFocus type="password" value={password} 
                        onChange={e => setPassword(e.target.value)}>
                        </FormControl>
                    </FormGroup>
                    <Button type="submit" block bsSize="large" disabled={!validateForm()}>Login</Button>
                </form>
            </div>
            
        </div>
    )
}
