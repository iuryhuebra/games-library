import { X } from "lucide-react";

export default function Game({
  title,
  cover,
  onRemove,
}: {
  title: string;
  cover: string;
  onRemove: () => void;
}) {
  return (
    <div className="game-item">
      {cover && <img src={cover} alt={`${title} cover`} />}

      <button className="delete-btn" onClick={() => onRemove()}>
        <X size={18} strokeWidth={2.5} />
      </button>

      <h2>{title}</h2>
    </div>
  );
}
