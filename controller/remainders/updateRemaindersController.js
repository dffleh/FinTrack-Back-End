const { Remainder } = require('../../models/remainderModel');

async function updateRemaindersController(req, res, next) {
  const { id } = req.params;
  const response = await Remainder.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (response) {
    return res.json(response);
  }
  return res.status(404).json({ message: 'Not found' });
}
module.exports = { updateRemaindersController };
