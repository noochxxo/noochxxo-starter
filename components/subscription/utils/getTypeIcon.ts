import { Package, Plus, RefreshCw } from "lucide-react";

export const getTypeIcon = (type: string) => {
  switch (type) {
    case "subscription":
      return RefreshCw;
    case "addon":
      return Plus;
    case "one-time":
      return Package;
    default:
      return Package;
  }
};
