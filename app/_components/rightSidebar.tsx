import Image from "next/image";

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
    <div className="flex flex-col gap-7 items-center pt-2">
      {listItems.map((item, idx) => (
        <Image
          key={idx}
          className="hover:bg-slate-200 hover:cursor-pointer rounded-md p-2"
          alt={item.title}
          src={item.imageSrc}
          width={38}
          height={38}
        />
      ))}
    </div>
  );
};

export default RightSidebar;
