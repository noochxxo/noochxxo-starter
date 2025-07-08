export const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
    case "completed":
      return "bg-green-500/20 text-green-400";
    case "cancelled":
    case "failed":
      return "bg-red-500/20 text-red-400";
    case "past_due":
    case "pending":
      return "bg-yellow-500/20 text-yellow-400";
    case "trialing":
      return "bg-blue-500/20 text-blue-400";
    case "refunded":
      return "bg-gray-500/20 text-gray-400";
    default:
      return "bg-gray-500/20 text-gray-400";
  }
};
