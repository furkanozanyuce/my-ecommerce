import React from "react";

const EditorsPick = () => {
  const categories = [
    { id: 1, title: "MEN", img: "/images/pick1.jpg" },
    { id: 2, title: "WOMEN", img: "/images/pick2.jpg" },
    { id: 3, title: "ACCESSORIES", img: "/images/pick3.jpg" },
    { id: 4, title: "KIDS", img: "/images/pick4.jpg" },
  ];

  return (
    <div className="px-4 py-14 lg:px-16 font-monts bg-[#FAFAFA]">
      <div className="text-center mb-8">
        <h2 className="text-[24px] font-bold text-[#252B42] leading-8">
          EDITOR'S PICK
        </h2>
        <p className="text-[14px] font-normal text-[#737373] leading-5">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
        <div className="row-span-2 relative group overflow-hidden max-h-[450px]">
          <img
            src={categories[0].img}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <button className="absolute bottom-4 left-4 bg-white text-[#252B42] font-bold text-[16px] leading-6 px-14 py-2 shadow-md group-hover:bg-[#252B42] group-hover:text-white transition-colors duration-300">
            {categories[0].title}
          </button>
        </div>
        <div className="row-span-2 relative group overflow-hidden max-h-[450px]">
          <img
            src={categories[1].img}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <button className="absolute bottom-4 left-4 bg-white text-[#252B42] font-bold text-[16px] leading-6 px-10 py-2 shadow-md group-hover:bg-[#252B42] group-hover:text-white transition-colors duration-300">
            {categories[1].title}
          </button>
        </div>
        {categories.slice(2, 4).map((category) => (
          <div key={category.id} className="relative group overflow-hidden max-h-[217px]">
            <img
              src={category.img}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <button className="absolute bottom-4 left-4 bg-white text-[#252B42] font-bold text-[16px] leading-6 px-6 py-2 shadow-md group-hover:bg-[#252B42] group-hover:text-white transition-colors duration-300">
              {category.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;
