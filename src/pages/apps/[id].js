import DocDetail from "@/components/detail/DocDetail";
import { useNavbar } from "@/contexts/NavbarContext";
import { appDetailConfig } from "@/modules/core/apps";
import { useEffect } from "react";
import { useSidebar } from "@/contexts/SidebarContext";

const AppDetail = () => {
  const { updateDashboardText, updatePagesText, updateTextColor } = useNavbar();
  const { setSidebarHidden } = useSidebar();

  useEffect(() => {
    updateDashboardText("Apps");
    updatePagesText("Core");
    updateTextColor("text-gray-100");
    setSidebarHidden(false);
  }, []);
  return (
    <div>
      <DocDetail config={appDetailConfig} />
    </div>
  );
};

export default AppDetail;
