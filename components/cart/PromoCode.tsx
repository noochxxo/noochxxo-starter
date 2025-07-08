import { CheckCircle, Tag, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Dispatch, SetStateAction } from "react";

interface PromoCode {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  description: string;
}

type Props = {
  promoCode: string;
  showPromoInput: boolean;
  appliedPromo: PromoCode | null;
  setShowPromoInput: Dispatch<SetStateAction<boolean>>;
  setPromoCode: Dispatch<SetStateAction<string>>;
  setPromoError: Dispatch<SetStateAction<string>>;
  removePromoCode: () => void;
  applyPromoCode: () => void;
};

export const PromoCode = ({
  promoCode,
  showPromoInput,
  appliedPromo,
  setShowPromoInput,
  setPromoCode,
  setPromoError,
  removePromoCode,
  applyPromoCode,
}: Props) => {
  return (
    <Card className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Promo Code</h3>
        {!showPromoInput && !appliedPromo && (
          <Button
            onClick={() => setShowPromoInput(true)}
            className="text-cosmic-400 hover:text-cosmic-300 text-sm transition-colors"
          >
            <Tag className="h-4 w-4 inline mr-1" />
            Add Code
          </Button>
        )}
      </div>

      {appliedPromo ? (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-green-400 font-medium">
                  {appliedPromo.code}
                </span>
              </div>
              <p className="text-green-300 text-sm">
                {appliedPromo.description}
              </p>
            </div>
            <Button
              onClick={removePromoCode}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : showPromoInput ? (
        <div className="space-y-3">
          <Input
            type="text"
            className="input"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            // error={promoError}
          />
          <div className="flex space-x-2">
            <Button
              size="sm"
              onClick={applyPromoCode}
              disabled={!promoCode.trim()}
              className="primary-btn"
            >
              Apply
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="outline-btn"
              onClick={() => {
                setShowPromoInput(false);
                setPromoCode("");
                setPromoError("");
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-gray-400 text-sm">
          Have a promo code? Click "Add Code" to apply it.
        </p>
      )}
    </Card>
  );
};
