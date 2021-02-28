exports.getPlayer = (req, res, next) => {
    res.status(200).json({ success: true, msg: `show credentials for user with ${req.params.id}` })
}

exports.createNewPlayer = (req, res, next) => {
    res.status(200).json({ success: true, msg: `successfully created new player` })
}