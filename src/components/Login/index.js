import React from 'react';
import { LoginButton, LoginSection } from './styles';


const Login = () => {
    return(
        <LoginSection>
            <h1>Login</h1>
            <form>
                <div>
                    <label>Usuario</label>
                    <input type='text' placeholder='Ingresa tu usuario :)'/>
                </div>

                <div>
                    <label>Contraseña</label>
                    <input type='password' placeholder='Ingresa tu contraseña'/>
                </div>
                <LoginButton>Iniciar sesión</LoginButton>
                
            </form>
        </LoginSection>
    )
}

export default Login;