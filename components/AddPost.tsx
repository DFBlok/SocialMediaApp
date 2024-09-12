import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AddPost = () => {
  return (
    <div className="p-4 shadow-md bg-white rounded-lg flex gap-4 justify-center text-sm">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AddPost;
