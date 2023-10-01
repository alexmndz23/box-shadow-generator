window.addEventListener('load', () => {
  let changeTheme = () => {
    let body = document.querySelector('body')
    body.classList.toggle('dark')
  }
  let changeThemeButton = document.querySelector('#changeTheme')
  changeThemeButton.addEventListener('click', () => changeTheme())
})