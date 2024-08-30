"use client";

import React, { useState } from "react";
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
    <div className={$.doc}>
      <Document file={path} onLoadSuccess={onDocumentLoadSuccess} loading={null}>
        {Array.from(new Array(numPages), (_, index) => {
          return (
            <Page
              className={$.page}
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={700}
              renderAnnotationLayer={true}
              renderTextLayer={true}
              loading={null}
            />
          );
        })}
      </Document>
    </div>
  );
}

export default PdfViewer;
