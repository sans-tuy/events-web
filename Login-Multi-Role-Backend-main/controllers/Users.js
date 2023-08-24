import argon2 from "argon2";
import path from "path";
import fs from "fs";
import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["uuid", "name", "email", "role", "profil_image", "url"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: ["uuid", "name", "email", "role", "profil_image"],
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUser = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0)
    return res.status(400).json({ msg: "No File Uploaded" });
  const file = req.files.profil_image;
  if (!req.files.profil_image || Object.keys(req.files).length === 0)
    return res.status(400).json({ msg: "Foto Profil wajib diisi" });
  const { name, email, password, confPassword, role } = req.body;
  const fileSize = file.size;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password tidak cocok" });
  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });
  const hashPassword = await argon2.hash(password);

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await User.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role,
        profil_image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
};

export const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  const { name, email, password, confPassword, role } = req.body;
  let hashPassword;
  let fileName = "";
  if (req.files === null) {
    fileName = user.image;
  } else {
    if (password === "" || password === null) {
      hashPassword = user.password;
    } else {
      hashPassword = await argon2.hash(password);
    }
    if (password !== confPassword)
      return res
        .status(400)
        .json({ msg: "Password dan Confirm Password tidak cocok" });

    const file = req.files.profil_image;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${user.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await User.update(
      {
        name: name,
        email: email,
        password: hashPassword,
        role: role,
        profil_image: fileName,
        url: url,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  console.log("masuk");
  const user = await User.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  try {
    const filepath = `./public/images/${user.profil_image}`;
    fs.unlinkSync(filepath);
    await User.destroy({
      where: {
        uuid: user.uuid,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
