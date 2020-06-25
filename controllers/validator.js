function validateZipcode(code) {
  if (!code) return false;
  if (typeof code !== "string") return false;
  code = code.trim().replace(/[^0-9]/g, "");
  if (code.length !== 8) return false;
  return code;
}

module.exports = { validateZipcode };
