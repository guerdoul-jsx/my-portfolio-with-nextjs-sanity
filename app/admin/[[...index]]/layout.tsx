interface AdminLayout {
  children: React.ReactNode;
}

export const metadata = {
  title: "Admin Dashboard | Mahmoud Guerdoul Portfolio",
  description:
    "A admin Dashboard to manage the content for mahmoud guerdoul websites",
};
const adminLayout = ({ children }: AdminLayout) => {
  return <>{children}</>;
};

export default adminLayout;
