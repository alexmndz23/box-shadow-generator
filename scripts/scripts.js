window.addEventListener('load', () => {

  let changeTheme = () => {
    let body = document.querySelector('body')
    body.classList.toggle('dark')
  }

  let changeCollapse = (shadow) => {
    shadow.classList.toggle('show')
  }
  
  let changeBackgroundColor = (element, color) => {
    element.style.backgroundColor = color
  }
                                                                                                 
  let setRangeValueFromInput = (input) => {
    let shadowProperty = input.closest('#shadowProperty')
    let range = shadowProperty.querySelector('range')
    range.value = input.value
  }

  let changeThemeButton = document.querySelector('#changeTheme')
  changeThemeButton.addEventListener('click', () => changeTheme())

  let shadows = document.querySelectorAll('.shadow')
  shadows.forEach(shadow => {
    let shadowTitle = shadow.querySelector('.shadowTitle')
    shadowTitle.addEventListener('click', () => changeCollapse(shadow))
  })

  let inputChangeBgColor = document.querySelector('#backgroundColorShadowPreview')
  let shadowPreview = document.querySelector('#shadowPreview')
  inputChangeBgColor.addEventListener('input', (e) => changeBackgroundColor(shadowPreview, e.target.value))
})