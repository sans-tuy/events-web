import { Box, Button, Flex, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { UilBars, UilAngleDown } from "@iconscout/react-unicons";
// import useGlobalStore from '@store/useStore'
import { FunctionComponent, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@assets/images/logo-web.jpg";
import sidebarMenus from "./sidebar-menu.constant";
import SidebarSkeleton from "./SidebarSkeleton";
import { useAppSelector } from "@redux/hooks";
import { useDispatch } from "react-redux";
import { setIsOpen } from "@features/global/slice";

const Sidebar: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen } = useAppSelector((state) => state.global);
  const dispatch = useDispatch();
  // const permissions = useGlobalStore((state) => state.permissions)
  // const includedMenu = useMemo(
  //   () =>
  //     filter(sidebarMenus, (obj) => {
  //       if (obj.name === 'Dashboard') return true
  //       return includes(permissions?.group, obj.id)
  //     }),
  //   [permissions?.group],
  // )
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <VStack
      as="aside"
      py={7}
      px={[isOpen ? 3 : 0, 4]}
      mr={["-20vw", "0vw"]}
      spacing={12}
      h="100vh"
      border="1px"
      borderColor="neutral.100"
      position={["relative", "fixed"]}
      top="0"
      width={isOpen ? "300px" : ["0px", "95px"]}
      bg="white"
      zIndex={999}
      overflowY="auto"
      transition="all 0.5s ease-in-out"
    >
      {/* Logo */}
      <Flex flexDir="row" justify="space-between" alignItems="center" w="full">
        <Link to="/">
          <Image src={Logo} w="134px" h="34px" />
        </Link>
        {isOpen && (
          <Icon
            boxSize={6}
            as={UilBars}
            cursor="pointer"
            onClick={() => dispatch(setIsOpen())}
          />
        )}
      </Flex>
      {/* Menu */}
      <Flex flexDir="column" gap={6} justify="space-between" w="full" as="ul">
        {isLoading ? (
          <SidebarSkeleton loading />
        ) : (
          sidebarMenus.map((val, idx) => (
            <Box
              display="block"
              gap={3}
              flexDir="column"
              w="full"
              as="li"
              key={`list-menu-${idx}`}
            >
              <NavLink to={val.url} end={val.url === "/"}>
                {({ isActive }) => (
                  <Button
                    variant={isActive ? "primary" : "light"}
                    w="full"
                    justifyContent="space-between"
                    rightIcon={
                      val.isDropdown ? (
                        <Icon as={UilAngleDown} boxSize={6} />
                      ) : undefined
                    }
                  >
                    <Flex alignItems="center">
                      <Icon as={val.LeftIcon} boxSize={6} />
                      <Text pl="10px" variant="sm.tight.medium">
                        {isOpen ? val.name : ""}
                      </Text>
                    </Flex>
                  </Button>
                )}
              </NavLink>
            </Box>
          ))
        )}
      </Flex>
    </VStack>
  );
};

export default Sidebar;
