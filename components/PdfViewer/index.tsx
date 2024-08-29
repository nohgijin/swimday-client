"use client";

import React, { useRef, useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import $ from "./style.module.scss";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Props = {
  path: string;
};

function PdfViewer({ path }: Props) {
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: pdfjs.PDFDocumentProxy) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={path} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (_, index) => {
          return (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={700}
              renderAnnotationLayer={true}
              renderTextLayer={true}
            />
          );
        })}
      </Document>
    </div>
  );
}

export default PdfViewer;
