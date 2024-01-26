import Image from "next/image";
import { IconButton } from "@/app/_components/component";

const RightSidebar = () => {
  const listItems = [
    {
      title: "Calendar",
      imageSrc: "/ls_calendar.png",
    },
    {
      title: "Contacts",
      imageSrc: "/ls_contacts.png",
    },
    {
      title: "Keep",
      imageSrc: "/ls_keep.png",
    },
    {
      title: "Tasks",
      imageSrc: "/ls_tasks.png",
    },
  ];

  return (
    <div className="flex flex-col gap-3 items-center pt-2">
      {listItems.map((item, idx) => (
        <IconButton key={idx}>
          <Image
            className="p-2"
            alt={item.title}
            src={item.imageSrc}
            width={38}
            height={38}
          />
        </IconButton>
      ))}
    </div>
  );
};

export default RightSidebar;
