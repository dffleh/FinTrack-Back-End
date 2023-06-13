const { Remainder } = require('../../models/remainderModel');
const { BadRequest } = require('http-errors');

async function sortRemindersController(req, res, next) {
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate) return next(BadRequest('Bad calendar period!'));

  try {
    const reminders = await Remainder.find({
      // owner: req.user._id,
      dateOfPayment: {
        $gte: new Date(startDate),
        $lte: endDate,
      },
    }).sort({ dateOfPayment: 1 });

    if (reminders.length === 0) {
      return res.status(404).json({ message: 'Reminders not found' });
    }
    res.status(200).json(reminders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { sortRemindersController };
