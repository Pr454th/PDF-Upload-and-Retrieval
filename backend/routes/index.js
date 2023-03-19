const express = require("express");
const multer = require("multer");
const Pdf = require("../db/fileModel");

const router = express.Router();

const upload = multer();

router.post("/pdf/upload", upload.single("pdf"), async (req, res) => {
  const { originalname, mimetype, buffer } = req.file;

  const newPdf = new Pdf({
    fileName: originalname,
    fileType: mimetype,
    fileContent: buffer,
  });

  try {
    await newPdf.save();
    res.status(201).send("File uploaded successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.get("/pdf/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const pdf = await Pdf.findById(id);

    if (!pdf) {
      return res.status(404).send("PDF not found");
    }

    res.set("Content-Type", pdf.fileType);
    res.send(pdf.fileContent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
