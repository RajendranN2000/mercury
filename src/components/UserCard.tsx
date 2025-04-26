import React from "react";
import { IoIosStar } from "react-icons/io";

interface UserCardProps {
  name: string;
  company: string;
  rating: number;
  avatarUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  company,
  rating,
  avatarUrl,
}) => {
  return (
    <div className="w-64 lg:w-80 p-4 rounded-xl shadow-md bg-white space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-sm font-semibold text-[#0E0E11]">{name}</h2>
            <p className="text-xs text-[#6D7079]">{company}</p>
          </div>
        </div>
        <button className="text-sm text-[#0E0E11] border border-[#E8EAED] px-3 py-1 rounded-[4px]">
          Profile
        </button>
      </div>

      <div className="text-sm">
        <p className="text-[#0E0E11]">Total Rating</p>
        <div className="flex items-center gap-1 mt-1">
          <IoIosStar className="h-4 w-4 text-[#8792F7]" />
          <span className="font-semibold text-[#6D7079]">{rating}/5</span>
          <span className="text-[#6D7079] text-sm">(overall {rating})</span>
        </div>
      </div>

      <div className="bg-[#F3F5F6] text-[#0E0E11] text-xs px-3 py-2 rounded-lg">
        Good performance needs a salary review.
      </div>
    </div>
  );
};

export default UserCard;
