import Image from "next/image";
import { Button, IconButton } from "@/app/_components/component";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MainContent = () => {
  const filesList = [
    {
      title: "framework.doc",
      imageSrc: "/files/framework_doc.png",
      type: "doc",
    },
    {
      title: "Italy.jpg",
      imageSrc: "/files/Italy_jpg.png",
      type: "image",
    },
    {
      title: "Kaas.jpg",
      imageSrc: "/files/Kaas_jpg.png",
      type: "image",
    },
    {
      title: "Maharashtra.jpg",
      imageSrc: "/files/Maharashtra_jpg.png",
      type: "image",
    },
    {
      title: "Maldives.jpg",
      imageSrc: "/files/Maldives_jpg.png",
      type: "image",
    },
    {
      title: "project.doc",
      imageSrc: "/files/project_doc.png",
      type: "doc",
    },
    {
      title: "sherwood.doc",
      imageSrc: "/files/sherwood_doc.png",
      type: "doc",
    },
    {
      title: "Spiti.jpg",
      imageSrc: "/files/Spiti_jpg.png",
      type: "image",
    },
    {
      title: "technical.doc",
      imageSrc: "/files/technical_doc.png",
      type: "doc",
    },
    {
      title: "uncharted.doc",
      imageSrc: "/files/uncharted_doc.png",
      type: "doc",
    },
  ];

  return (
    <div className="space-y-5 h-[inherit]">
      <div className="text-2xl font-medium">My Drive</div>
      <div className="space-x-3">
        <Button
          variant="outlined"
          endIcon={<ArrowDropDownIcon />}
          className="rounded-lg capitalize border-slate-600 text-slate-600 font-semibold px-5"
          size="small"
        >
          Type
        </Button>
        <Button
          variant="outlined"
          endIcon={<ArrowDropDownIcon />}
          className="rounded-lg capitalize border-slate-600 text-slate-600 font-semibold px-5"
          size="small"
        >
          People
        </Button>
        <Button
          variant="outlined"
          endIcon={<ArrowDropDownIcon />}
          className="rounded-lg capitalize border-slate-600 text-slate-600 font-semibold px-5"
          size="small"
        >
          Modified
        </Button>
      </div>
      <div className="text-lg font-medium">Files</div>
      <div className="flex flex-wrap gap-4 overflow-y-scroll h-[65vh]">
        {filesList.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#F0F4F9] p-2 rounded-md space-y-2 hover:bg-[#e6edf7] cursor-pointer"
          >
            <div className="flex gap-3 justify-between items-center">
              <Image
                src={
                  item.type === "doc"
                    ? "/icons/doc_icon.png"
                    : "/icons/image_icon.png"
                }
                alt={item.title}
                width={16}
                height={16}
                className="m-2"
              />
              <span className="font-medium text-sm">{item.title}</span>
              <IconButton aria-label="delete">
                <MoreVertIcon />
              </IconButton>
            </div>
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }} // optional
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
