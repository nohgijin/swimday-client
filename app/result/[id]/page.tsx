"use client";

import $ from "./style.module.scss";
import { ActionIcon } from "@mantine/core";
import Back from "@/assets/back.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Medal from "@/assets/temp-meal.jpg";
import BackButton from "@/components/Back";

function Page({ params: { id } }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <main className={$["result-detail-page"]}>
      <BackButton className={$.back} />
      <div className={$.detail}>
        <div className={$.ranking}>1위</div>
        <div className={$.record}>37.11</div>
        <div className={$.participant}>
          노기진
          <div className={$.team}>팀이름</div>
        </div>
        <div className={$.name}>경기이름</div>
        <div className={$.date}>2024-01-01</div>
        <div className={$.tags}>
          <div className={$.tag}>태그1</div>
          <div className={$.tag}>태그1</div>
          <div className={$.tag}>태그1</div>
          <div className={$.tag}>태그1</div>
          <div className={$.tag}>태그1</div>
          <div className={$.tag}>태그1</div>
          <div className={$.tag}>태그1</div>
          <div className={$.tag}>태그1</div>
          <div className={$.tag}>태그1</div>
          <div className={$.tag}>태그1</div>
          <div className={$.tag}>태그1</div>
        </div>
        <Image className={$.medal} src={Medal} alt={"메달 이미지"} width={0} height={0} sizes={"100vw"} />
      </div>
    </main>
  );
}

export default Page;
