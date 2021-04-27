module.exports = {
  register: (req, res) => {
    const email = req.body.email
    const pass = req.body.password
    res.send({
      message: `User Created! Email: ${email}, Password: ${pass}`
    })
  }
}
