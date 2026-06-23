import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion, scale } from "motion/react";
const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className=" text-sm leading-tight font-semibold mt-5">{data.desc}</p>
      <div className="footer absolute w-full left-0 bottom-0 ">
        <div className="flex justify-between items-center py-3 px-8 mb-3">
          <h4>{data.filesize}</h4>
          <span className="w-7 h-7 flex justify-center items-center rounded-full bg-zinc-600">
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${data.tag.tagColor} flex justify-center items-center`}
          >
            <h3 className=" text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
