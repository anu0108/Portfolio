import "../Styles/resume.css";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import ResumePDF from "../AnuragWadhwa_2020-24.pdf";
import { BsDownload } from "react-icons/bs";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setwid] = useState(window.innerWidth);
  const handleResize = () => {
    setwid(window.innerWidth);
  };

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);
  return (
    <div className="resume-container">
      <Document file={ResumePDF} className="my-resume">
        <Page pageNumber={1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
      </Document>
      <a className="downloadButton" href={ResumePDF} download="Anurag's Resume">
        <BsDownload />
        &nbsp; Download
      </a>
    </div>
  );
};

export default Resume;
