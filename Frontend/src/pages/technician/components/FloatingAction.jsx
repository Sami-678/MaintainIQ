import { Zap } from "lucide-react";

export default function FloatingAction() {
  return (
    <button
      className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
      aria-label="Quick actions"
    >
      <Zap size={20} />
    </button>
  );
}
