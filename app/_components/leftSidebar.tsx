import { Button, IconButton } from "@/app/_components/component";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import SaveIcon from "@mui/icons-material/Save";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import GroupIcon from "@mui/icons-material/Group";
import ScheduleIcon from "@mui/icons-material/Schedule";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

const sidebaritems = [
  [
    {
      icon: <HomeIcon className="w-5" />,
      title: "Home",
      focused: false,
    },
    {
      icon: <SaveIcon className="w-5" />,
      title: "My Drive",
      focused: true,
    },
    {
      icon: <PhonelinkIcon className="w-5" />,
      title: "Computers",
      focused: false,
    },
  ],
  [
    {
      icon: <GroupIcon className="w-5" />,
      title: "Shared with me",
      focused: false,
    },
    {
      icon: <ScheduleIcon className="w-5" />,
      title: "Recent",
      focused: false,
    },
    {
      icon: <StarBorderIcon className="w-5" />,
      title: "Starred",
      focused: false,
    },
  ],
  [
    {
      icon: <ReportGmailerrorredIcon className="w-5" />,
      title: "Spam",
      focused: false,
    },
    {
      icon: <DeleteForeverIcon className="w-5" />,
      title: "Trash",
      focused: false,
    },
    {
      icon: <CloudQueueIcon className="w-5" />,
      title: "Storage",
      focused: false,
    },
  ],
];

const LeftSidebar = () => {
  return (
    <div className="px-6 pt-2">
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        className="w-full py-4 bg-white text-gray-700 text-[16px] font-semibold capitalize rounded-2xl shadow-md"
      >
        New
      </Button>
      <div>
        {sidebaritems.map((item, idx) => {
          return (
            <div key={idx} className="my-4">
              {item.map((item2, idx2) => {
                return (
                  <Button
                    key={idx2}
                    className={`w-full text-gray-700 rounded-full capitalize flex items-center justify-start gap-3 px-[15px] py-[3px] ${
                      item2.focused && "bg-sky-200 text-black rounded-full"
                    }`}
                  >
                    {item2.icon}
                    <span className="text-sm font-medium">{item2.title}</span>
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSidebar;
