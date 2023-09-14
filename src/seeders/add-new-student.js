const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface) => {
    var usersData = [];

    const password = await bcrypt.hash("admin123", 10);

    usersData = [

      {
        email: "maha@gmail.com",
        mobile: "111116110",
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
