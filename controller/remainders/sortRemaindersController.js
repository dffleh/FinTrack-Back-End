const { Remainder } = require('../../models/remainderModel');

async function sortRemindersController(req, res, next) {
  const { startDate, endDate } = req.body;

  const { _id } = req.user;
  console.log('startDate:', startDate);
  console.log('endDate:', endDate);
  try {
    const reminders = await Remainder.find({
      owner: _id,
      dateOfPayment: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    if (reminders.length === 0) {
      return res.status(404).json({ message: 'Reminders not found' });
    }
    console.log('Reminders found:', reminders);
    res.status(200).json(reminders);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { sortRemindersController };
