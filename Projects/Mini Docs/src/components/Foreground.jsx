import Card from "./Card";

const Foreground = () => {
 const data = [
   {
     desc: "Complete guide to React Hooks and state management.",
     filesize: "1.2mb",
     close: true,
     tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-600" },
   },
   {
     desc: "High-resolution background images for web development.",
     filesize: "4.5mb",
     close: false,
     tag: { isOpen: true, tagTitle: "Get Assets", tagColor: "bg-blue-600" },
   },
   {
     desc: "Monthly financial report Q3 2023 summary.",
     filesize: "0.4mb",
     close: true,
     tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "bg-blue-600" },
   },
   {
     desc: "UI/UX design wireframes for the new e-commerce app.",
     filesize: "12.8mb",
     close: true,
     tag: { isOpen: true, tagTitle: "View Figma", tagColor: "bg-green-600" },
   },
   {
     desc: "List of top 100 interview questions for frontend developers.",
     filesize: ".2mb",
     close: false,
     tag: { isOpen: true, tagTitle: "Read Online", tagColor: "bg-blue-600" },
   },
   {
     desc: "Compiled video assets for the upcoming marketing campaign.",
     filesize: "85.0mb",
     close: true,
     tag: { isOpen: true, tagTitle: "Download All", tagColor: "bg-green-600" },
   },
 ];
  return (
    <div className="fixed top-0 left-0 w-full h-full z-3 flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export default Foreground;
