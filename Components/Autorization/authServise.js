const API_URL = 'http://localhost:3001'

  export const authServise = {
    async register(email, password) {
        try{
     const checkResponse = await fetch(`${API_URL}/user?email=${email}`)
     const existingUsers = await checkResponse.json();

     if(existingUsers.length > 0) {
      throw new Error('Пользователь с таким именем существует')
     }

     const response = await fetch(`${API_URL}/users`, {
      method: 'POST', 
      headers: {'COntent-Type': 'applycation/json'},
      body: JSON.stringify({email, password, transactions: [] }),
     });

     if(!response.ok) {
      throw new Error('Ошибка при регистрации')
     }

     return await response.json()
    } catch (error) {
        console.error('Registration error:', error)
        throw error
    }
    },

    async login(email, password) {
      try {
        const response = await fetch(`${API_URL}/users?email=${email}` );

        if(!response.ok) {
          throw new Error('Ошибка при запросе пользователя')
        }

        const users = await response.json()

        if(users.length === 0) {
          throw new Error('Пользователь не найден')
        }

        const user = users[0];

        if(password !== user.password) {
          throw new Error('Неверный пароль')
        }
        return user;
      } catch (error) {
        console.error('Login error', error)
        throw error
      } 
    }
    
  };

