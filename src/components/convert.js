import { useState } from "react";
import { PDFDocument } from "pdf-lib";

const Convert = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const message = document.getElementById('status');
    message.innerText = "";
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Create a FormData object to store the file data
      const reader = new FileReader();
      reader.onload = async (event) => {
        const fileData = new Uint8Array(event.target.result);

        try {
          const pdfDoc = await PDFDocument.create();
          const image = await pdfDoc.embedPng(fileData);

          const page = pdfDoc.addPage();
          const { width, height } = image.scaleToFit(
            page.getWidth() - 50,
            page.getHeight() - 50
          );
          const x = (page.getWidth() - width) / 2;
          const y = (page.getHeight() - height) / 2;
          page.drawImage(image, {
            x,
            y,
            width,
            height,
          });

          const pdfBytes = await pdfDoc.save();
          // Do something with the converted PDF, such as download it
          // For example, you can create a download link:
          const blob = new Blob([pdfBytes], { type: "application/pdf" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          const replaceFileExtension = (filename, newExtension) => {
            const lastDotIndex = filename.lastIndexOf('.');
            if (lastDotIndex !== -1) {
              const baseName = filename.substring(0, lastDotIndex);
              return baseName + newExtension;
            }
            return filename;
          };
          link.download = replaceFileExtension(selectedFile.name, ".pdf");
          link.click();
        } catch (error) {
          const message = document.getElementById('status');
          message.innerText = error;
        }
      };
      reader.readAsArrayBuffer(selectedFile);
    }
  };
  return (
    <div>
      <div>
        <h2>JPG TO PDF</h2>
        <p>Aplikasi web terbaik untuk mengonversi file JPG ke PDF</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="formFileLg" className="form-label">
              Large file input example
            </label>
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
              accept="*"
              onChange={handleFileChange}
            />
          </div>
          <small id="status" className="text-danger"></small>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Convert;
