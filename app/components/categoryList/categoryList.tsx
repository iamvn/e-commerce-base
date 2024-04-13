import React from "react";

interface CategoryList {
  image: string;
  name: string;
  availableItems: number;
  link: string;
  id: number;
}

interface ICategoryProps {
  categoryList: CategoryList[];
}

function CategoryList({ categoryList }: ICategoryProps) {
  return (
    <div className="px-5">
      <div className="flex flex-col text-center w-full">
        <h1 className="text-base font-medium title-font mb-4 text-gray-900">
          We've Got It All
        </h1>
        <h1 className="lg:w-2/3 mx-auto leading-relaxed text-4xl">
          Explore Our Range
        </h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container pt-5">
          <div className="flex flex-wrap">
            {categoryList.map((val, index) => (
              <div
                className="lg:w-1/4 md:w-1/2 p-4 w-full"
                key={`${val.id}_${val.name}`}
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={val.image}
                  />
                </a>
                <div className="mt-4 flex justify-center gap-1">
                  <h2 className="text-gray-900 title-font text-lg font-medium text-2xl font-light">
                    {val.name}
                  </h2>
                  <span>{val.availableItems}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryList;
