import { type FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useAppSelector } from "@redux/hooks";

const DefaultDashboardLayout: FunctionComponent = () => {
  const { isOpen } = useAppSelector((state) => state.global);
  return (
    <Flex display="-webkit-box">
      <Sidebar />
      <Flex flexDir="column" flexGrow={1}>
        <Topbar />
        <Box
          as="main"
          p={6}
          marginLeft={isOpen ? "260px" : "0px"}
          transition="margin-left 0.5s ease-in-out"
          gap={6}
          flexGrow={1}
          overflow="auto"
          ml={["20vw", `${isOpen ? "20vw" : "6vw"}`]}
        >
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default DefaultDashboardLayout;
