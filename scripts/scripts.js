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

  let copyCode = () => {
    let codePreview = document.querySelector('#codePreview')
    codePreview.select()
    document.execCommand("copy");
  }
  let copyCodeBtn = document.querySelector('#copyCode')
  copyCodeBtn.addEventListener('click', copyCode)

  let inputChangeBgColor = document.querySelector('#backgroundColorShadowPreview')
  let shadowPreview = document.querySelector('#shadowPreview')
  inputChangeBgColor.addEventListener('input', (e) => changeBackgroundColor(shadowPreview, e.target.value))

  shadowPreview.addEventListener('click', (event) => {
    const { clientX, clientY } = event
    const { top, left } = shadowPreview.getBoundingClientRect()
    inputChangeBgColor.style.top = `${clientY - top}px`
    inputChangeBgColor.style.left = `${clientX - left}px`
    
    inputChangeBgColor.click()
  })
})