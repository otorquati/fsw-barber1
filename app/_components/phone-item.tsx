"use client";
import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface PhoneItemProps {
  phone: string;
}
const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone);
    toast.success("Telefone copiado com sucesso");
  };

  return (
    <div className="flex items-center justify-between">
      {/* ESQUERDA */}
      <div className="flex items-center justify-center gap-2">
        <SmartphoneIcon />
        <p className="p-3 text-sm">{phone}</p>
        {/* ESQUERDA */}
        <Button
          variant="outline"
          className="absolute right-4"
          onClick={() => handleCopyPhoneClick(phone)}
        >
          <h2 className="text-sm font-bold text-gray-400">Copiar</h2>
        </Button>
      </div>
    </div>
  );
};

export default PhoneItem;
