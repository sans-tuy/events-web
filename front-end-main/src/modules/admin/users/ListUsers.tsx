import { Button, Flex, Image, Td, Tr } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  idx: number;
  name: string;
  email: string;
  profil_image: string;
  uuid: string;
  setuserIdToDelete: Dispatch<SetStateAction<string>>;
  onOpen: () => void;
}

export default function ListUsers(props: Props) {
  const { email, idx, name, profil_image, onOpen, uuid, setuserIdToDelete } =
    props;

  return (
    <>
      <Tr>
        <Td>{idx + 1}</Td>
        <Td>
          <Flex gap={6} alignItems="center">
            <Image src={profil_image} rounded="60px" boxSize="60px" />
            {name}
          </Flex>
        </Td>
        <Td>{email}</Td>
        <Td>
          <Button
            onClick={() => {
              setuserIdToDelete(uuid);
              return onOpen();
            }}
          >
            Delete
          </Button>
        </Td>
      </Tr>
    </>
  );
}
