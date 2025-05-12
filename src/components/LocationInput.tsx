
import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}

const LocationInput: React.FC<LocationInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  icon = <MapPin size={18} className="text-gray-400" />
}) => {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          {icon}
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="rapido-input pl-10"
        />
      </div>
    </div>
  );
};

export default LocationInput;
