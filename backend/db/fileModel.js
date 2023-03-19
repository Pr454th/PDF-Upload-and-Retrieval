const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://webtech:admin@cluster0.azdluye.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected");
  });

const pdfSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  fileContent: {
    type: Buffer,
    required: true,
  },
});

const Pdf = mongoose.model("Pdf", pdfSchema);

module.exports = Pdf;
