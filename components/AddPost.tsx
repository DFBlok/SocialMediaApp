import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AddPost = () => {
  return (
    <div className="w-full p-4 shadow-md bg-white rounded-lg flex gap-4 justify-center text-sm">
      <div className="w-full flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <textarea
          name="post"
          id=""
          placeholder="What is happening!!!"
          className="bg-slate-100 rounded-lg flex-1"
        ></textarea>
        <Image
          src="/emoji.png"
          alt={"emoji"}
          width={20}
          height={20}
          className="w-5 h-5 cursor-pointer self-end"
        />
      </div>
    </div>
  );
};

export default AddPost;
