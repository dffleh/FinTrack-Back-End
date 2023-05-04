const { deleteDebtController } = require('./deleteDebtController');
const { addDebtConroller } = require('./addDebtController');
const { getDebtsController } = require('./getDebtsController');
const { changeDebtController } = require('./changeDebtController');

module.exports = {
  deleteDebtController,
  addDebtConroller,
  changeDebtController,
  getDebtsController,
};
