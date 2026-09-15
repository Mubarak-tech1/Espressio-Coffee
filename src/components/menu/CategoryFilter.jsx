const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onCategoryChange(category.id)}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
            activeCategory === category.id
              ? "bg-[#8B4513] text-white"
              : "bg-[#8B451321] text-[#4B2C20] hover:bg-[#8B451340]"
          }`}>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
