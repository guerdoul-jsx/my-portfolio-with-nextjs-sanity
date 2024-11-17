import { metaObject } from "@/config/website";
import { Metadata } from "next";

interface AdminLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  ...metaObject(
    "Admin Dashboard | Mahmoud Guerdoul Portfolio",
    "A admin Dashboard to manage the content for mahmoud guerdoul websites"
  ),
};
const adminLayout = ({ children }: AdminLayout) => {
  return <>{children}</>;
};

export default adminLayout;
