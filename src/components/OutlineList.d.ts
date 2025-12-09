declare module "@/components/OutlineList" {
  import type React from "react";

  interface OutlineListProps {
    items?: Array<{
      id: number;
      title: string;
      type: string;
      status: string;
      target: number;
      limit: number;
      reviewer: string;
    }>;
  }

  const OutlineList: React.ComponentType<OutlineListProps>;
  export default OutlineList;
}
