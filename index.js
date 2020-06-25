const List = require("./components/list");
const Terminal = require("./components/terminal");
const { getAddress } = require("./controllers/zipcodes");

const prompt = new Terminal();
const addressList = new List();

const run = async () => {
  try {
    let exit = false;

    while (!exit) {
      addressList.clear();
      const input = await prompt.getInput();
      /*
      const input =
      "01531-001;01001000;1111l;05089030;06454040;06454020;06454020";
      exit = true;
      */
      if (input) {
        if (input.trim().toLowerCase() === "exit") {
          exit = true;
        } else {
          const data = input.split(";");

          const addresses = await Promise.all(data.map(getAddress));

          for (const address of addresses) {
            if (address) addressList.add(address, "cep");
          }

          if (addressList.size > 0)
            console.log(addressList.show("logradouro", "DESC"));
        }
      }
    }
  } catch (err) {
    console.error(err);
  } finally {
    prompt.close();
  }
};

run();
