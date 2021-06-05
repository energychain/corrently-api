/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Prepare Transaction
* Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain. 
*
* inlineObject2 InlineObject2 
* no response value expected for this operation
* */
const prepareTransaction = ({ inlineObject2 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject2,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Balances
* Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain). 
*
* account String Ethereum style address referencing a valid account (AKA Stromkonto). (optional)
* returns List
* */
const stromkontoBalances = ({ account }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        account,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Selectable Choices for customer
* Signable choices (contract changes) for customer. 
*
* account String Ethereum style address referencing a valid account alias (never use Stromkonto directly!). (optional)
* returns List
* */
const stromkontoChoices = ({ account }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        account,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Login (via Mail)
* Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status. 
*
* inlineObject1 InlineObject1 
* returns inline_response_200
* */
const stromkontoLogin = ({ inlineObject1 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject1,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Register (new Stromkonto)
* Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account. 
*
* inlineObject InlineObject 
* no response value expected for this operation
* */
const stromkontoRegister = ({ inlineObject }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  prepareTransaction,
  stromkontoBalances,
  stromkontoChoices,
  stromkontoLogin,
  stromkontoRegister,
};
