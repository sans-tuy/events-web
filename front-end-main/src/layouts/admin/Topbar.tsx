import ProfileImage from "@assets/images/profile-image.png";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { LogOut } from "@features/auth/authSlice";
import { setIsOpen } from "@features/global/slice";
import { UilSignout, UilBars } from "@iconscout/react-unicons";
import { useAppSelector } from "@redux/hooks";
import { AnyAction } from "@reduxjs/toolkit";
import { type FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Topbar: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { isOpen } = useAppSelector((state) => state.global);

  const onLogout = () => {
    dispatch(LogOut() as unknown as AnyAction);
    navigate("/login", { replace: true });
  };

  return (
    <Flex
      as="header"
      py={2.5}
      px={6}
      justify="space-between"
      alignItems="center"
      w="full"
      h="64px"
      borderBottom="1px"
      borderColor="neutral.100"
      position="sticky"
      top="0"
      left="0"
      bg="white"
      zIndex="99"
    >
      <Icon
        boxSize={6}
        as={UilBars}
        cursor="pointer"
        position="fixed"
        left={isOpen ? "-30px" : ["6vw", "8vw"]}
        opacity={isOpen ? "0" : "1"}
        transition="left 1s ease-in-out"
        onClick={() => dispatch(setIsOpen())}
      />
      <Box />
      {/* account box */}
      <Flex color="neutral.500" gap={6} alignItems="center">
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Flex as="button" alignItems="center" gap={2}>
              {!user ? (
                <Skeleton isLoaded={!!user} w="100px" h="20px" rounded="4px" />
              ) : (
                <Text variant="sm.normal.medium">{user?.name}</Text>
              )}
              <Avatar name="profile-image" src={ProfileImage} size="sm" />
            </Flex>
          </PopoverTrigger>
          <PopoverContent maxW="160px">
            <PopoverBody w="full">
              <Button
                variant="filled"
                size="sm"
                colorScheme="danger"
                w="full"
                leftIcon={<Icon as={UilSignout} boxSize={5} />}
                onClick={onLogout}
              >
                Logout
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  );
};

export default Topbar;
