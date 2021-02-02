
module.exports = {
  getIndex: (req, res, next) => {
    const userAgent = req.get('User-Agent');
    return res.send('GET INDEX WORKING: ' + userAgent);
  }
}