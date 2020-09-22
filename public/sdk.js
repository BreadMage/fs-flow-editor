(function () {
  window.onerror = function (msg, url, row, col, error) {
    console.log({
      msg, url, row, col, error
    })
    return true
  }
  window.addEventListener(
    'error',
    (msg, url, row, col, error) => {
      console.log(msg, url, row, col, error)
      return true
    },
    true
  )
  window.addEventListener('unhandledrejection', function (e) {
    console.log(111111)
    e.preventDefault()
    console.log(e.reason)
    return true
  })
  window.addEventListener('click', handleClick, true)
  function handleClick (e) {
    console.log(e)
  }
})()
