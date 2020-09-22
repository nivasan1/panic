function InvalidConfigType() {
  this.message = 'The config type is invalid. It must either be \'channel\','
    + ' \'chain\' or \'other\'';
  this.code = 430;
}

function InvalidBaseChain() {
  this.message = 'The base chain is invalid. It must either be \'cosmos\' or '
    + '\'substrate\'';
  this.code = 431;
}

function MissingArguments(...args) {
  this.message = `Missing argument(s) '${args}'`;
  this.code = 432;
}

function ConfigUnrecognized(file) {
  this.message = `'${file}' does not belong to the inferred path.`;
  this.code = 433;
}

function ConfigNotFound(file) {
  this.message = `Cannot find '${file}' in the inferred path.`;
  this.code = 434;
}

function InvalidEndpoint(endpoint) {
  this.message = `'${endpoint}' is an invalid endpoint.`;
  this.code = 435;
}

function TwilioError(err) {
  this.message = `Twilio Error: ${err}`;
  this.code = 436;
}

function EmailError(err) {
  this.message = `Email Error: ${err}`;
  this.code = 437;
}

function PagerDutyError(err) {
  this.message = `PagerDuty Error: ${err}`;
  this.code = 438;
}

function OpsGenieError(err) {
  this.message = `OpsGenie Error: ${err}`;
  this.code = 439;
}

function MissingFile(filepath) {
  this.message = `Cannot find ${filepath}.`;
  this.code = 440;
}

function AuthenticationError(err) {
  this.message = `Authentication Error: ${err}.`;
  this.code = 441;
}

function MongoError(err) {
  this.message = `Mongo Error: ${err}`;
  this.code = 442;
}

function MissingInstallerCredentials(...args) {
  this.message = `Missing installer credential(s) '${args}' in .env. Server`
    + ' will stop.';
  this.code = 443;
}

function Unauthorized() {
  this.message = 'Not authorized to perform this operation.';
  this.code = 444;
}

function CouldNotFindRefreshTokenInDB() {
  this.message = 'Could not find refresh token in database.';
  this.code = 445;
}

function RecordAlreadyExists(keyValue) {
  this.message = `The record with key ${JSON.stringify(keyValue)} already `
    + ' exists in the database.';
  this.code = 446;
}

function UsernameAlreadyExists(username) {
  this.message = `Username '${username}' already exists.`;
  this.code = 447;
}

module.exports = {
  InvalidConfigType,
  InvalidBaseChain,
  MissingArguments,
  ConfigUnrecognized,
  ConfigNotFound,
  InvalidEndpoint,
  TwilioError,
  EmailError,
  PagerDutyError,
  OpsGenieError,
  MissingFile,
  AuthenticationError,
  MongoError,
  MissingInstallerCredentials,
  Unauthorized,
  CouldNotFindRefreshTokenInDB,
  RecordAlreadyExists,
  UsernameAlreadyExists,
};
