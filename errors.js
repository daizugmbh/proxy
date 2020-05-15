exports.wrongEndpoint = (req, res) => {
  return res.status(404).json({
    error: {
      message:
        "The endpoint you selected does not exist. Please refer the the manual.",
    },
  })
}

exports.serverInRequest = (req, res, next) => {
  if ("server" in req.query) {
    next()
  } else {
    res.status(400).json({
      error: { message: "You have to provide a server in your request." },
    })
  }
}

exports.wrongArgType = (req, res, next) => {
  const { query } = req
  const { server } = query
  if (typeof server === "string") {
    next()
  } else {
    res
      .status(400)
      .json({ error: { message: "The server has to be a string" } })
  }
}
