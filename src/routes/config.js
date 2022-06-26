import { Group } from "@mui/icons-material";
import Dashboard from "../pages/Dashboard";
import Medicine from "../pages/Inventory/Medicine";

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
];
export default ROUTES;
