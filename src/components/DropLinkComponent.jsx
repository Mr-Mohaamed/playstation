import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropLinkComponent = ({
  linkName,
  icon,
  size = "1x",
  color = "black",
}) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const iconStyle = {
    color: hover ? "blue" : "black",
    transition: "color 0.3s",
  };
  return (
    <div
      className="text-gray-600 p-2 hover:text-blue-500 duration-300 flex justify-center items-center gap-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>{linkName}</div>
      <FontAwesomeIcon
        icon={icon}
        size={size}
        color={color}
        style={iconStyle}
      />
    </div>
  );
};

export default DropLinkComponent;
