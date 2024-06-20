

//clase para ingreso de usuario
export class connectionLogin{
    
    async handleLogin(correo,pass){
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                correo,
                pass,
                }),
            });
            const json = await response.json();
            if (response.status === 200) {
                console.log('Login successful:', json);
                // Navigate to another screen or store the token
                return true
            } else {
                console.log('Login failed:', json.message || 'Unknown error');
                return false
            }
        } catch (error) {
            console.error('Error logging in:', error);
            return false
        }
    }
}

//Clase para registro de usuario
export class connectionSignin{
    async handleRegister(
        nombre,
        apellido,
        telefono,
        correo,
        password,
    ){
        try {
            const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre,
                apellido,
                telefono,
                correo,
                password,
            }),
        });
        const json = await response.json();
        if (response.status === 201) {
            console.log('Registration successful:', json);
            // Navigate to another screen or handle the response
            return true
        } else {
            console.log('Registration failed:', json.message);
            return false
        }
        } catch (error) {
            console.error('Error registering:', error);
            return false
        }
    }
}