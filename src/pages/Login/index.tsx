import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password);
            if(isLogged) {
                navigate('/')
            } else {
                alert("Fail to Login.");
            }
        }
    }

    return (
        <>
            <h2>Closed Page</h2>
            <input 
                type="text" 
                value={email} 
                onChange={e => setEmail (e.target.value)}
                placeholder="Write your e-mail" 
            />
            <input 
                type="password" 
                value={password} 
                onChange={e => setPassword (e.target.value)}
                placeholder="Write your password" 
            />
            <button onClick={handleLogin} >Login</button>
        </>
    );
}