import { Gift } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isGift: boolean;
  giftMessage: string;
  setIsGift: Dispatch<SetStateAction<boolean>>;
  setGiftMessage: Dispatch<SetStateAction<string>>;
};

export const GiftOptions = ({
  isGift,
  giftMessage,
  setIsGift,
  setGiftMessage,
}: Props) => {
  return (
    <Card className="card p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Gift className="h-5 w-5 text-cosmic-400" />
        <h3 className="text-lg font-semibold text-white">Gift Options</h3>
      </div>

      <label className="flex items-center space-x-3 mb-4">
        <Input
          type="checkbox"
          checked={isGift}
          onChange={(e) => setIsGift(e.target.checked)}
          className="input w-4 h-4 text-cosmic-600 bg-transparent border-gray-300 rounded focus:ring-cosmic-500"
        />
        <span className="text-white">This is a gift</span>
      </label>

      {isGift && (
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Gift Message (Optional)
          </label>
          <Textarea
            value={giftMessage}
            onChange={(e) => setGiftMessage(e.target.value)}
            placeholder="Write a personal message..."
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cosmic-500 focus:border-transparent transition-all duration-300 resize-none"
            rows={3}
            maxLength={200}
          />
          <p className="text-gray-400 text-xs mt-1">
            {giftMessage.length}/200 characters
          </p>
        </div>
      )}
    </Card>
  );
};
