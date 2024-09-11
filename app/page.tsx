import { Button } from "@/components/ui/button";
import Stories from "@/components/Stories";
import Feed from "@/components/Feed";
import AddPost from "@/components/AddPost";

export default function Home() {
  return (
    <div className="p-6 font-[family-name:var(--font-geist-sans)] flex gap-6">
      <div className="hidden xl:block w-[20%]">Left Section</div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        Middle Section
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">Right Section</div>
    </div>
  );
}
