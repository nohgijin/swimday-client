//TODO: 대회일정 상세 페이지 해야함
"use client";

import { useRouter } from "next/navigation";
import { ActionIcon } from "@mantine/core";
import Back from "@/assets/back.svg";
import Download from "@/assets/download.svg";
import { useCompetition } from "@/service/competition/useCompetitionService";
import $ from "./style.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import { Document, pdfjs, Page as PdfPage } from "react-pdf";
import PdfViewer from "@/components/PdfViewer";

function Page({ params: { id } }: { params: { id: string } }) {
  const [numPages, setNumPages] = useState<number>(); // 총 페이지수
  const [pageNumber, setPageNumber] = useState(1); // 현재 페이지
  const [pageScale, setPageScale] = useState(1); // 페이지 스케일

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }
  const router = useRouter();
  // const { data } = useCompetition({ competitionId: id });
  //
  // const noRenderCondition = !data?.data.attributes;
  // if (noRenderCondition) {
  //   return null;
  // }
  //
  // const { name, start_date, end_date, location, meter, documentation, depth } = data?.data.attributes;
  // console.log("asdf", data?.data.attributes);

  const { name, start_date, end_date, location, meter, documentation, depth } = {
    name: "name",
    start_date: "2024-08-28",
    end_date: "2024-08-29",
    location: "스포츠아이랜드",
    meter: 50,
    documentation: `https://swimday-bucket.s3.ap-southeast-2.amazonaws.com/2022_%E1%84%80%E1%85%A9%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%90%E1%85%B3%E1%86%A8%E1%84%85%E1%85%A8%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%87%E1%85%A2_%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A2%E1%84%8B%E1%85%B5%E1%86%AB_%E1%84%8B%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%85%E1%85%B5%E1%86%B7_%E1%84%89%E1%85%AE%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%83%E1%85%A2%E1%84%92%E1%85%AC_221218.pdf`,
    depth: 2.5,
  };
  return (
    <main className={$["competition-detail-page"]}>
      <div className={$["competition-fixed"]}>
        <ActionIcon className={$.back} variant={"transparent"} onClick={() => router.back()}>
          <Back width={24} height={24} />
        </ActionIcon>
        <div className={$["competition-title-wrapper"]}>
          <div className={$.title}>{name}</div>
          <div className={$["update-date"]}>{start_date}</div>
        </div>
      </div>
      <div className={$["competition-detail-wrapper"]}>
        <div className={$.file}>
          <div className={$["file-title"]}>첨부파일</div>
          <Link
            href={documentation}
            className={$["file-content"]}
            target={"_blank"}
            rel="noopener noreferrer"
            locale={false}
            download
          >
            <Download width={16} height={16} />
            대회요강
          </Link>
        </div>
        <div className={$.pdf}>
          <PdfViewer path={documentation} />
        </div>
      </div>
    </main>
  );
}

export default Page;
