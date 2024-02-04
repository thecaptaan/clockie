const cogIcon = document.getElementById('setting-icon')

cogIcon.addEventListener('click', e => {
    e.preventDefault()
    cogIcon.classList.toggle('rotate-cog')
    // const setting = document.getElementById('setting')
    // setting.classList.toggle('show')
})