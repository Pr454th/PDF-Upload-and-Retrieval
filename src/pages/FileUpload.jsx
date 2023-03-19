import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      await axios.post("http://localhost:3000/pdf/upload", formData);
      console.log("File uploaded successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPdf = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/pdf/${fileName}`,
        {
          responseType: "arraybuffer",
        }
      );
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-2">Upload and File Retrieval</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mt-3 mb-3">
          <div className="col-8">
            <input
              type="file"
              onChange={handleFileChange}
              className="form-control"
            />
          </div>
          <div className="col-4">
            <button className="btn btn-primary w-50" type="submit">
              Upload
            </button>
          </div>
        </div>
      </form>
      <div className="row mt-3 mb-3">
        <div className="col-8">
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-4">
          <button className="btn btn-outline-success w-50" onClick={fetchPdf}>
            Get File
          </button>
        </div>
      </div>
      <iframe title="PDF Viewer" src={pdfUrl} width="100%" height="600px" />
    </div>
  );
};

export default FileUpload;
