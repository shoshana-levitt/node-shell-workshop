module.exports = (done) => {
  let currentDate = new Date()
  let currentDateFormatted = new Intl.DateTimeFormat('en-US').format(currentDate)
  done(currentDateFormatted)
}
