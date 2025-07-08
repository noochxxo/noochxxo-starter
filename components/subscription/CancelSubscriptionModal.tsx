import { AlertTriangle } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setShowCancelModal: Dispatch<SetStateAction<boolean>>;
};

export const CancelSubscriptionModal = ({
  setShowCancelModal
}: Props) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="card p-6 max-w-md w-full">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-8 w-8 text-red-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Cancel Subscription
          </h3>
          <p className="text-gray-300">
            Are you sure you want to cancel your subscription? You'll lose
            access to all Pro features at the end of your billing period.
          </p>
        </div>

        <div className="space-y-3">
          <Button
            variant="outline"
            className="outline-btn text-red-400 border-red-400 hover:bg-red-500/10 w-full"
          >
            Yes, Cancel Subscription
          </Button>
          <Button
            variant="outline"
            className="outline-btn w-full"
            onClick={() => setShowCancelModal(false)}
          >
            Keep Subscription
          </Button>
        </div>
      </Card>
    </div>
  );
};
