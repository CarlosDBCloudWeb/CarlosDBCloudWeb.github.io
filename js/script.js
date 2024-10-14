function validateLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 这里可以添加你的登录验证逻辑
  if (username === 'carlos' && password === '123456') {
    // 验证成功后跳转到第二个页面
    window.location.href = '/OpenUi/home.html'; // 将此替换为你想要跳转的页面地址
    return false; // 阻止表单提交
  } else {
    alert('Usuario o contraseña incorrectos');
    return false; // 阻止表单提交
  }
}
