
const handleShowHideBtn = (theme) => {
  const dark = document.getElementById('dark')
  const light = document.getElementById('light')
  if(theme === 'dark'){
    dark.classList.replace('show', 'hide');
    light.classList.replace('hide', 'show');
  } else{
    dark.classList.replace('hide', 'show');
    light.classList.replace('show', 'hide');
  }
}

const toggleTheme = theme => {
  document.documentElement.className = theme
  localStorage.setItem('theme', theme)
  handleShowHideBtn(theme)
}

const greet = () => {
  const greetings = document.getElementById('greetings')
  greetings.textContent = 'Hi my name is Diane :)';
}


document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme')
  handleShowHideBtn(theme)
  document.documentElement.className = theme
})


// initialize feather icons
feather.replace()
