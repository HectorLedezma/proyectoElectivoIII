

export class connection{
    datos = [];

    esperar(t){
        return new Promise(
            resolve =>{
                setTimeout(resolve,t);
            }
        )
    }
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