import useCreateUser from "@/service/users/hooks/createUsers";
import {
  fileUpload,
  UserCreatePayload,
} from "@/service/users/interface/create-user-payload.types";
import {
  Box,
  Button,
  chakra,
  Flex,
  Image,
  ModalProps,
  Text,
  useToast,
} from "@chakra-ui/react";
import Dialog from "@components/reusable/Dialog";
import FormWrapper from "@components/reusable/FormWrapper";
import InputForm from "@components/reusable/InputForm";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { SubmitHandler, useForm } from "react-hook-form";

export default function CreateModalUser(props: Omit<ModalProps, "children">) {
  const { isOpen, onClose } = props;
  const [files, setFiles] = useState<fileUpload[]>([]);
  const [percentProgress, setPercentProgress] = useState(50);
  const { createUser } = useCreateUser();
  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    onDrop: (accFiles) => {
      setFiles(
        accFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const thumbs = files?.map((file) => (
    <Box key={file.name} h="290px" bgColor="blue.300">
      <Image
        w="full"
        h="full"
        src={file.preview}
        objectFit="fill"
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
    </Box>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files?.forEach((file) => URL.revokeObjectURL(file.preview));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toast = useToast({
    isClosable: true,
    position: "top",
  });

  const methods = useForm<UserCreatePayload>({
    defaultValues: {
      role: "visitor",
    },
  });

  useEffect(() => {
    if (!isOpen) {
      setPercentProgress(0);
      setFiles([]);
    }
  }, [isOpen]);

  const handleOnSubmit: SubmitHandler<UserCreatePayload> = async (data) => {
    try {
      const { progresloadded } = await createUser({
        ...data,
        profil_image: files[0],
      });
      setPercentProgress(progresloadded!);
      toast({ title: "success", description: "berhasil menambahkan user" });
      console.log(progresloadded);
    } catch (error: any) {
      toast({ title: "error", description: error.data.msg });
    }
  };

  return (
    <Dialog title="user" isOpen={isOpen} onClose={onClose}>
      <FormWrapper
        gap={6}
        display="flex"
        flexDir="column"
        handleOnSubmit={handleOnSubmit}
        {...methods}
      >
        <InputForm label="Name" name="name" placeholder="Masukkan nama" />
        <InputForm label="Email" name="email" placeholder="Masukkan email" />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="Masukkan password"
        />
        <InputForm
          label="Confirmation Password"
          name="confPassword"
          type="password"
          placeholder="Masukkan ulang password anda"
        />
        <chakra.div
          bgColor="blue.50"
          border="5px dashed"
          h="300px"
          w="full"
          borderColor="blue.500"
          {...getRootProps({ className: "dropzone" })}
        >
          <input {...getInputProps()} />
          {!files ? <p>drag gambar kesini</p> : <Box as="aside">{thumbs}</Box>}
        </chakra.div>
        <Box
          w="full"
          h="25px"
          border="1px solid"
          borderColor="blue.500"
          color="blue.500"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
        >
          <Text pos="absolute" left="48%">
            {percentProgress}%
          </Text>
          <Box
            w={`${percentProgress}%`}
            h="23px"
            display="flex"
            justifyContent="center"
            bgColor={percentProgress > 0 ? "blue.300" : "transparent"}
            borderRadius="10px"
          />
        </Box>
        <Flex w="full" justifyContent="flex-end" gap="2">
          <Button variant="outline" type="button" onClick={() => onClose()}>
            Close
          </Button>
          <Button type="submit">Submit</Button>
        </Flex>
      </FormWrapper>
    </Dialog>
  );
}
