import Link from "next/link";
import {FiHeart, FiStar} from "react-icons/fi"

const GigCard = ({ item }) => {
  return (
    <Link href={`/gig/`} className="block max-w-[324px] h-[400px] border border-gray-300 mb-[40px] rounded hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-[50%]">
        <img src='https://images.pexels.com/photos/20447502/pexels-photo-20447502/free-photo-of-woman-wearing-a-beige-coat-and-headphones-walking-in-a-street-with-a-coffee-and-phone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-[10px] px-[20px] flex flex-col gap-[20px]">
        <div className="flex items-center gap-[10px]">
          <img src='https://images.pexels.com/photos/20792100/pexels-photo-20792100/free-photo-of-close-up-of-a-lion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" className="w-[26px] h-[26px] rounded-full object-cover" />
          <span className="text-gray-900">UserName</span>
        </div>
        <p className="text-gray-900">Description</p>
        <div className="flex items-center gap-[5px]">
            <FiStar className="w-[14px] h-[14px] text-yellow-500" />
          <span className="text-[14px] font-light">3</span>
        </div>
      </div>
      <hr className="border-t border-gray-300" />
      <div className="p-[10px] px-[20px] flex items-center justify-between">
        <FiHeart className="w-[16px] h-[16px] cursor-pointer object-cover" />
        <div className="text-right">
          <span className="text-gray-500 text-[12px]">Price</span>
          <h2 className="text-gray-700 text-[18px] font-light">
            $ 100
            <sup className="text-[12px] font-light">99</sup>
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
