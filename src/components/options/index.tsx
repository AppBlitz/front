
import { useState } from "react";

interface DropdownMenuProps<T> {
  opciones: T[];
  onSelect: (opcion: T) => void;
}

const DropdownMenu = <T extends string>({ opciones, onSelect }: DropdownMenuProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<T | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        {selectedOption ? selectedOption : "Opciones"}
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
          {opciones.map((opcion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedOption(opcion);
                onSelect(opcion);
                setIsOpen(false);
              }}
            >
              {opcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { DropdownMenu }
