const https = require("https");
const { NotFoundError } = require("../components/error");

function get(url) {
  const options = new URL(url);
  return new Promise((resolve, reject) => {
    let data = "";
    let statusCode;
    const req = https.get(options, (res) => {
      statusCode = res.statusCode;

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          if (statusCode === 400) throw new NotFoundError();
          const json = JSON.parse(data);
          resolve(json);
        } catch (err) {
          reject(err);
        }
      });
    });

    // req.on("end", () => {
    //   try {
    //     const json = JSON.parse(data);
    //     json.statusCode = statusCode;
    //     resolve(json);
    //   } catch (err) {
    //     reject(err);
    //   }
    // });

    req.on("error", (e) => reject(e));
  });
}

module.exports = { get };
