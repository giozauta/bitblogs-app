import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectAvatarProps = {
  handleAvatarChange: (value: string) => void;
};

const SelectAfvatar: React.FC<SelectAvatarProps> = ({ handleAvatarChange }) => {
  return (
    <Select onValueChange={handleAvatarChange}>
      <SelectTrigger className="flex col-span-3 h-9 w-[full] rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
        <SelectValue placeholder="Select Avatar" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Leo">Leo</SelectItem>
          <SelectItem value="Destiny">Destiny</SelectItem>
          <SelectItem value="Vivian">Vivian</SelectItem>
          <SelectItem value="Kimberly">Kimberly</SelectItem>
          <SelectItem value="Riley">Riley</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectAfvatar;
