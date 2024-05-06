import Image from "next/image";
import {
  AiOutlineClose,
  AiOutlineEllipsis,
  AiOutlineFileSearch,
  AiOutlinePlus,
  AiOutlineWarning,
} from "react-icons/ai";
import { BiBarChartAlt, BiCalendar, BiHistory } from "react-icons/bi";
import {
  BsCheck2,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
  BsFire,
  BsMoonStars,
  BsSun,
} from "react-icons/bs";
import { FaSort, FaUserAlt } from "react-icons/fa";
import { ImSpinner8, ImStatsBars } from "react-icons/im";
import { LuSettings } from "react-icons/lu";
import { MdDeleteForever, MdOutlineLogout } from "react-icons/md";
import { RxMixerHorizontal } from "react-icons/rx";

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

// ** Custom svg or images can be used as icons by returning a JSX **
const icons = {
  // Custom icons
  blank: () => {
    return <></>;
  },
  booking: () => {
    return (
      <Image
        src={`/booking.png`}
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    );
  },
  restaurant: () => {
    return (
      <Image
        src={`/restaurant.png`}
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    );
  },
  revenue: () => {
    return (
      <Image
        src={`/revenue.png`}
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    );
  },

  // Features
  fileSearch: AiOutlineFileSearch,
  barChart: BiBarChartAlt,
  settings: LuSettings,

  // Mode Toggle
  moon: BsMoonStars,
  sun: BsSun,

  // Navigation
  back: BsChevronLeft,
  next: BsChevronRight,
  up: BsChevronUp,
  down: BsChevronDown,
  close: AiOutlineClose,

  // Common
  trash: MdDeleteForever,
  spinner: ImSpinner8,
  userAlt: FaUserAlt,
  ellipsis: AiOutlineEllipsis,
  warning: AiOutlineWarning,
  add: AiOutlinePlus,
  history: BiHistory,
  signout: MdOutlineLogout,
  calendar: BiCalendar,
  sort: FaSort,
  fire: BsFire,
  statsBar: ImStatsBars,
  mixer: RxMixerHorizontal,
  check: BsCheck2,
};

export const Icons: IconsType = icons;
