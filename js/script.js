// script.js
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'carlos' && password === '123456') {
      alert('登录成功！');
      // 在这里可以添加重定向到首页的代码，例如：window.location.href = '/home';
    } else {
      alert('El nombre de usuario o la contraseña son incorrectos, ¡inténtalo de nuevo!        (div) Wrong username or password, please try again!');
    }
  }
  