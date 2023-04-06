import { Group } from "@mui/icons-material";
import Dashboard from "../pages/Dashboard";
import Medicine from "../pages/Inventory/Medicine";
import Users from "../pages/Users";
import Role from "../pages/Role";

const ROUTES = [
  {
    id: 1,
    label: "Dashboard",
    path: "/Dashboard",
    element: <Dashboard />,
    icon: <Group />,
  },
  {
    id: 2,
    label: "Medicine",
    path: "/medicine",
    element: <Medicine />,
    icon: <Group />,
  },
  {
    id: 3,
    label: "Users",
    path: "/users",
    element: <Users />,
    icon: <Group />,
  },
  {
    id: 4,
    label: "Role",
    path: "/role",
    element: <Role />,
    icon: <Group />,
  },
];
export default ROUTES;
