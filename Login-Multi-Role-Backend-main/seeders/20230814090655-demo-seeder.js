"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const dataFromMySQL = [
      {
        type: "header",
        version: "5.1.1",
        comment: "Export to JSON plugin for PHPMyAdmin",
      },
      { type: "database", name: "multi_level_login" },
      {
        type: "table",
        name: "users",
        database: "multi_level_login",
        data: [
          {
            id: "1",
            uuid: "eae7ecd0-800d-4050-a925-fd769dd310fa",
            name: "admin",
            email: "admin@gmail.com",
            password:
              "$argon2id$v=19$m=4096,t=3,p=1$ZxGZqdjW0dvji79sK773aQ$zGD3edPeMVqOsTtLt3WkrFr/Q2MqoNsWOarz++Ire5o",
            role: "admin",
            createdAt: "2023-08-06 13:22:33",
            updatedAt: "2023-08-06 13:22:33",
            profil_image: null,
            url: null,
          },
          {
            id: "3",
            uuid: "3ec245b6-17d8-4aba-aff1-56b46ef11cb0",
            name: "anwar",
            email: "anwar_san@gmail.com",
            password:
              "$argon2id$v=19$m=4096,t=3,p=1$YgCSOZaRN4V0NJCM9iOG0A$CutOUYX5a8bSUTUX4cF5dZQqUTAOYk6ClbBHGn+JxJg",
            role: "visit",
            createdAt: "2023-08-06 13:27:49",
            updatedAt: "2023-08-06 13:27:49",
            profil_image: null,
            url: null,
          },
          {
            id: "4",
            uuid: "177a6bcf-ba8f-4da0-b642-00a058fe6cbc",
            name: "icha",
            email: "cholisah@gmail.com",
            password:
              "$argon2id$v=19$m=4096,t=3,p=1$lUotsp7CSc4SeepV6aYizQ$76w16y5qWVLXTyAPHpbsNb2lrTRqgDXBE3hHuGeTFcU",
            role: "visit",
            createdAt: "2023-08-06 13:28:07",
            updatedAt: "2023-08-06 13:28:07",
            profil_image: null,
            url: null,
          },
          {
            id: "5",
            uuid: "850e5f2d-f8a1-4648-bd52-5940359726e1",
            name: "budi",
            email: "budi@gmail.com",
            password:
              "$argon2id$v=19$m=4096,t=3,p=1$ieIMWb+3IGClw3UoHLX/Ow$py9bN7/CevZywFMWq5buveJGVhqdSZDZDmEDNHx4Jug",
            role: "visit",
            createdAt: "2023-08-06 13:28:21",
            updatedAt: "2023-08-06 13:28:21",
            profil_image: null,
            url: null,
          },
          {
            id: "6",
            uuid: "64ff606a-9cac-44b1-98d2-4f558842430f",
            name: "Pacar",
            email: "love@gmail.com",
            password:
              "$argon2id$v=19$m=4096,t=3,p=1$YzyHru9aYtoibpseDWThSQ$yxxm4a956CIW3qvc24kNw/AWcM/iivhdAUwlBApZBtc",
            role: "visitor",
            createdAt: "2023-08-10 09:23:55",
            updatedAt: "2023-08-10 09:23:55",
            profil_image: null,
            url: "http://localhost:3000/images/ebd3ce3d935baa56ae74f282f5be203e.jpg",
          },
          {
            id: "7",
            uuid: "22626075-cfaa-4af6-ae09-4af84401c056",
            name: "Pacar",
            email: "love@gmail.com",
            password:
              "$argon2id$v=19$m=4096,t=3,p=1$J+9ToRKrd7PScefrak2+/Q$kxHcZFSSzggAiYpSXhhDWK0LLPygnSYMJP0kqJcgk9Q",
            role: "visitor",
            createdAt: "2023-08-10 09:24:18",
            updatedAt: "2023-08-10 09:24:18",
            profil_image: null,
            url: "http://localhost:3000/images/ebd3ce3d935baa56ae74f282f5be203e.jpg",
          },
          {
            id: "8",
            uuid: "7e620acf-4577-4851-82ae-5484f423b377",
            name: "Pacar",
            email: "love@gmail.com",
            password:
              "$argon2id$v=19$m=4096,t=3,p=1$micFo4NhHOP6KmDDfNKIHw$w1ByXu4vtNARgu3W5q4ZVuXUvPTxxaze/mpDZdGkOqM",
            role: "visitor",
            createdAt: "2023-08-10 09:25:49",
            updatedAt: "2023-08-10 09:25:49",
            profil_image: null,
            url: "http://localhost:3000/images/ebd3ce3d935baa56ae74f282f5be203e.jpg",
          },
          {
            id: "9",
            uuid: "d1e30d5d-3aeb-4b45-a34b-08dee76bcdf8",
            name: "Pacar",
            email: "love@gmail.com",
            password:
              "$argon2id$v=19$m=4096,t=3,p=1$7WAKDD951R/DoX++o45EQw$LAdkHvP4lj0FFEhOFM6G11vGOgc/ENDxMi2k4jtYbOc",
            role: "visitor",
            createdAt: "2023-08-10 09:31:13",
            updatedAt: "2023-08-10 09:31:13",
            profil_image: null,
            url: "http://localhost:3000/images/ebd3ce3d935baa56ae74f282f5be203e.jpg",
          },
          {
            id: "10",
            uuid: "85606b14-c5fc-4198-9f46-abbbdaff3101",
            name: "Pacar",
            email: "love@gmail.com",
            password:
              "$argon2id$v=19$m=4096,t=3,p=1$WZOV4pnExrCqd/RAiiHXJQ$VRNRCE3E/bmm4HL0tvK3G7d1TXIK7gkets64kb92euA",
            role: "visitor",
            createdAt: "2023-08-10 09:31:34",
            updatedAt: "2023-08-10 09:31:34",
            profil_image: null,
            url: "http://localhost:3000/images/ad5ac75a55a955e1d2698b68d9e59a4e.JPG",
          },
          {
            id: "11",
            uuid: "20265872-7d1f-4198-8be2-4aef7a91400f",
            name: "Pacar",
            email: "love@gmail.com",
            password:
              "$argon2id$v=19$m=4096,t=3,p=1$Xet4VRagdk+MBJjTmn71mw$yGPVXLWN7Zkb1nAi8fWt3T2jMQZOmXvSECldoCjng/g",
            role: "visitor",
            createdAt: "2023-08-10 09:32:44",
            updatedAt: "2023-08-10 09:32:44",
            profil_image: "ad5ac75a55a955e1d2698b68d9e59a4e.JPG",
            url: "http://localhost:3000/images/ad5ac75a55a955e1d2698b68d9e59a4e.JPG",
          },
        ],
      },
    ];

    return queryInterface.bulkInsert("users", dataFromMySQL, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
