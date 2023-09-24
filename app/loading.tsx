"use client";

import Loader from "@/components/loader";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-transparent flex items-center justify-center px-4 relative z-50 right-0 top-0">
      <Loader />
    </div>
  );
};

export default Loading;
