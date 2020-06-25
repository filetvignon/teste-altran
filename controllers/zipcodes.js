const { get } = require("./request");
const { validateZipcode } = require("./validator");
const { InputError } = require("../components/error");

async function getAddress(code) {
  try {
    if (!code) return;
    const zipcode = validateZipcode(code);
    if (!zipcode) throw new InputError(code);
    const url = `https://viacep.com.br/ws/${zipcode}/json/`;
    const address = await get(url);
    return address;
  } catch (err) {
    console.log(err.toString());
  }
}

module.exports = { getAddress };
