import { Category } from '../Navigation/types';

interface MenuProps {
  categories: Category[];
  onSelect?: (category: Category, index: number) => void;
}

const Menu = ({ categories, onSelect }: MenuProps) => {
  const handleSelect = (item: typeof categories[0], index: number) => {
    onSelect && onSelect(item, index);
  };
  return (
    <div className="py-2 h-[80vh] px-1 flex flex-col ">
      <h2 className="text-xl text-zinc-900 font-bold mb-2">所有分类</h2>
      <ul className="overflow-y-scroll">
        {categories.map((category, index) => (
          <p
            onClick={() => handleSelect(category, index)}
            className="text-lg text-zinc-900 py-1.5 duration-100 active:bg-zinc-100"
            key={category.id}
          >
            {category.name}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
