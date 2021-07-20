const config = {
  managerTokenSecret: "t2438jht1289trgshgvy5fy8", // 中台
  // ThirdPartTokenSecret: 'yhljzgtwdlbgwxwjcxymysfzdylx', // 客户端
  version: "v1.0.0",
  tokenExp: 365 * 24 * 60 * 60 * 1000,
  serverTokenExp: 3650 * 24 * 60 * 60 * 1000,
  mongoLocalServer: {
    host: "127.0.0.1",
    port: "27017",
    username: "team",
    password: "test123",
    dbname: "team_mp",
  },

  DuplicateUsername: 422,
  DuplicatePhoneNumber: 423,
  phoneNumberNotFound: 424,

  DbFindError: 501,
  DbUpdateError: 502,
  FileUploadError: 503,
  ContractRpcError: 504,
  RequestRpcError: 505,
  DbInsertError: 506,
  jwtExpiredError: 507,
  jwtFlourish: 508,
  jwtInvalidError: 509,
  redisStopWorkingError: 510,
  transactionError: 511,
  rollbackError: 513,
  paramterError: 514,
  DbDeleteError: 515,
  DataIllegal: 516,

  DbkeyErr: 517,
  InvalidUser: 518,

  LoginInfoIllegal: 601,
  collectionNotExist: 602,
  blockchainError: 603,
  InvalidPermission: 604,
  ChainAddressError: 605,

  timeOut: 4000,

  mongoLocalServer: {
    host: "127.0.0.1",
    port: "27017",
    username: "team",
    password: "1223456",
    dbname: "team_mp",
  },
  redisLocalServer: {
    redisPort: 6379,
    redisHost: "127.0.0.1",
  },
  redis_login_session: 'user:loginsession',
};

module.exports = config;
