import useDeleteUser from "@/service/users/hooks/deleteUser";
import useGetUsers from "@/service/users/hooks/getUsers";
import { Button, Td, useDisclosure, useToast } from "@chakra-ui/react";
import FeedbackDelete from "@components/reusable/Dialog/FeedbackDelete";
import TabelBody from "@components/reusable/tables/TabelBody";
import TabelHead from "@components/reusable/tables/TabelHead";
import TabelWrapper from "@components/reusable/tables/TabelWrapper";
import CreateModalUser from "@modules/admin/users/CreateModalUser";
import ListUsers from "@modules/admin/users/ListUsers";
import { useState } from "react";

export default function Dashboard() {
  const [userIdToDelete, setuserIdToDelete] = useState("");
  const { users } = useGetUsers();
  const { deleteUser } = useDeleteUser();
  const toast = useToast({ isClosable: true, position: "top" });
  const handleDelete = async () => {
    try {
      const res = await deleteUser(userIdToDelete);
      if (res.response) {
        toast({ description: "berhasil menghapus user", title: "hapus user" });
      }
    } catch (error) {
      toast({ description: "berhasil menghapus user", title: "hapus user" });
    }
  };
  const createUserDisclosure = useDisclosure();
  const deleteUserDisclosure = useDisclosure();

  return (
    <>
      <CreateModalUser
        isOpen={createUserDisclosure.isOpen}
        onClose={createUserDisclosure.onClose}
      />
      <FeedbackDelete
        isOpen={deleteUserDisclosure.isOpen!}
        onClose={deleteUserDisclosure.onClose!}
        label="User"
        description="secara permanen"
        onSubmit={handleDelete}
      />
      <Button mb={6} onClick={createUserDisclosure.onOpen}>
        Add User
      </Button>
      <TabelWrapper variant="simple">
        <TabelHead bg="gray.200">
          <Td>No</Td>
          <Td>Nama</Td>
          <Td>Email</Td>
          <Td>Action</Td>
        </TabelHead>
        <TabelBody>
          {users?.map((val, idx) => (
            <ListUsers
              key={`list-of-users-${idx}`}
              email={val.email}
              idx={idx}
              uuid={val.uuid}
              name={val.name}
              profil_image={val.url}
              setuserIdToDelete={setuserIdToDelete}
              onOpen={deleteUserDisclosure.onOpen}
            />
          ))}
        </TabelBody>
        {/* <TabelFooter
          currPage={currPage}
          goNext={goNextPage}
          totalPage={maxPage}
          goBack={goPrevPage}
        /> */}
      </TabelWrapper>
    </>
  );
}
