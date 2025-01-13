import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="xxxx@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="(630) 707-3333" Image={FiPhone} />
      <SingleInfo text="Chicago, Illinois" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
