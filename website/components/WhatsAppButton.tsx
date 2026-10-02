import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a MJ INFO no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald text-midnight shadow-glow transition hover:scale-105 hover:bg-white"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
