const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface) => {
    var usersData = [];

    const password = await bcrypt.hash("admin123", 10);

    usersData = [
      {
        email: "fahad@gmail.com",
        mobile: "111216110",
        role: "teacher",
        password,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: "usman@gmail.com",
        mobile: "131116110",
        role: "student",
        password,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: "saqib@gmail.com",
        mobile: "113316110",
        role: "student",
        password,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return queryInterface.bulkInsert("users", usersData, {});
  },

  down: (queryInterface) => queryInterface.bulkDelete("users", null, {}),
};
