export const calculateSavings = (monthly: number, yearly: number) => {
  const monthlyCost = monthly * 12;
  const savings = monthlyCost - yearly;
  const percentage = Math.round((savings / monthlyCost) * 100);
  return { amount: savings, percentage };
};
