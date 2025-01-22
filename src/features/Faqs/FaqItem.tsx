import { useState } from "react";

const FaqItem = ({
  item,
  onClick,
}: {
  item: { title: string; body: string };
  onClick: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { title, body } = item;
  return (
    <li
      key={title}
      onClick={() => {
        setIsExpanded(!isExpanded);
        onClick();
      }}
      className='uppercase font-primary font-extrabold w-full list-decimal text-base lg:text-2xl cursor-pointer'
    >
      {title && <h2>{title}</h2>}
      {body && isExpanded && (
        <p className='w-full normal-case font-normal text-base'>{body}</p>
      )}
    </li>
  );
};

export default FaqItem;
