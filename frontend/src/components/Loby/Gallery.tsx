"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { GalleryProps } from "@/interfaces/GalleryProps";
import { Image } from "@nextui-org/react";
import { FC } from "react";
import { Skeleton } from "@nextui-org/react";

export const Gallery: FC<GalleryProps> = ({
  displayModal,
  isLoading,
  slides,
}) => {
  return (
    <div className="grid min-h-[528px] gap-6 grid-col-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 place-items-center bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-400 rounded-xl my-5">
      {slides.map((item) => (
        <Card
          id={String(item.presentationId)}
          onPress={() => displayModal(String(item.presentationId))}
          key={item.presentationId}
          className="py-4 lg:w-56 h-60 mb-6 bg-gray-100"
          shadow="md"
          isPressable
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <Skeleton className="rounded-lg" isLoaded={!isLoading}>
              <p className="text-tiny uppercase font-bold text-emerald-500">
                {" "}
                # {item.presentationId}
              </p>
            </Skeleton>
            <Skeleton className="rounded-lg" isLoaded={!isLoading}>
              <small className="text-md text-blue-500">
                {item.numberOfParticipants} people working on it
              </small>
            </Skeleton>
            <Skeleton className="rounded-lg" isLoaded={!isLoading}>
              <h4 className="font-bold text-large text-purple-500">
                {item.topic}
              </h4>
            </Skeleton>
          </CardHeader>
          <CardBody className="py-2 flex justify-center items-center">
            <Image
              isLoading={isLoading}
              alt="Card background"
              radius="sm"
              className="w-full h-28"
              src={item.previewImage}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
