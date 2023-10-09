const ftp = require("basic-ftp");

// const config = {
// 	host: 'ftpupload.net',
// 	port: 21,
// 	user: 'if0_35170989',
// 	password: 'ZBycc8VxVgK',
// };
const config = {
  host: "ftp.hungdn.fun",
  port: 21,
  user: "dashboard@hungdn.fun",
  password: "dashboard@hungdn.fun",
};

(async function example() {
  console.time("\u001b[1;32m 🚀 Success in\u001b[0m");

  const client = new ftp.Client();
  try {
    await client.access(config);
    await client.clearWorkingDir();
    await client.uploadFromDir("build").then(() => {
      console.timeEnd("\u001b[1;32m 🚀 Success in\u001b[0m");
    });
  } catch (err) {
    console.log(err);
  }
  client.close();
})();
