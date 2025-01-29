"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { Button, ModalFooter, Input } from "@nextui-org/react";
import { FC, FormEvent, useState } from "react";
import { ModalLobyProps } from "@/interfaces";

export const ModalLoby: FC<ModalLobyProps> = ({
  presentationId,
  onSubmitForm,
  onOpenChange,
  isOpen,
}) => {
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isTitleInvalid, setIsTitleInvalid] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const userName = form.get("name")?.toString();
    const title = form.get("title")?.toString();

    if (!userName) {
      return setIsNameInvalid(true);
    }
    if (!presentationId && !title) {
      return setIsTitleInvalid(true);
    }

    setIsNameInvalid(false);
    setIsTitleInvalid(false);
    onSubmitForm(userName, title, presentationId);
  };

  return (
    <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onCloseModal) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-blue-500 font-bold text-2xl">
              {presentationId
                ? `Joining presentation: ${presentationId}`
                : "New Presentation"}
            </ModalHeader>
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <p className="pb-4 text-purple-600 text-lg font-serif">
                  {presentationId
                    ? "You will join as a viewer, meaning you won't be able to edit anything"
                    : ""}
                </p>
                <Input
                  isInvalid={isNameInvalid}
                  name="name"
                  errorMessage="You must enter your name"
                  label="Your name"
                  radius="sm"
                />
                {!presentationId && (
                  <Input
                    isInvalid={isTitleInvalid}
                    name="title"
                    errorMessage="You must enter a title"
                    label="Presentation title"
                    radius="sm"
                  />
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onCloseModal}>
                  Close
                </Button>
                <Button type="submit" color="primary">
                  {presentationId ? "Join" : "Create"}
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
