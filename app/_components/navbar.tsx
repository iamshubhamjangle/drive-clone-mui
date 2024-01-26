import Image from "next/image";
import {
  Avatar,
  IconButton,
  InputBase,
  Paper,
} from "@/app/_components/component";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

const Navbar = () => {
  return (
    <div className="mx-4 h-full flex justify-between align-middle">
      <div className="flex items-center">
        <Image alt="logo" width={40} height={40} src="/logo.png" />
        <span className="text-xl font-medium pl-2 pb-1">Drive</span>
      </div>
      <div className="flex items-center">
        <Paper
          component="form"
          elevation={0}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 600,
            backgroundColor: "#E9EEF6",
            borderRadius: "2rem",
            height: "full",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search in Drive"
            inputProps={{
              "aria-label": "search in drive",
              style: {},
            }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
          ></IconButton>
          <IconButton sx={{ p: "10px" }} aria-label="Filters">
            <TuneIcon />
          </IconButton>
        </Paper>
      </div>
      <div className="flex items-center gap-3">
        <IconButton aria-label="Help">
          <HelpOutlineIcon className="text-gray-600" />
        </IconButton>
        <IconButton aria-label="Help">
          <SettingsIcon className="text-gray-600" />
        </IconButton>
        <IconButton aria-label="Help">
          <AppsIcon className="text-gray-600" />
        </IconButton>
        <IconButton aria-label="Help">
          <Avatar alt="my_profile" src="./user_profile.jpg" />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
