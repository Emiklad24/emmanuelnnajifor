import React from "react";

export const Brands = () => {
  return (
    <div className="container mx-auto pt-16 pb-40">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4 dark:text-gray-100">
          Partnerships with Coveted Brands
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto dark:text-gray-100">
          Our success has come from being committed to the property and
          investing in the development of the product to maximize sales. At the
          same time and maintaining the integrity.
        </p>
      </div>
      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
        <div
          className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center"
          title="Moniya"
        >
          <img src="/moniyalogo.png" alt="moniya-company-logo" width="170" />
        </div>
        <div
          className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center"
          title="Alphasafe"
        >
          <img src="/alphasafelogo.svg" alt="alphasafe-logo" width="170" />
        </div>
        <div
          className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center"
          title="Center for democracy & development"
        >
          <img src="cddlogo.png" alt="cdd-logo" width="300" />
        </div>
        <div
          className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center"
          title="procureX"
        >
          <img src="/procurexlogo.svg" alt="procurex-logo" width="170" />
        </div>
        <div
          className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center"
          title="Tetelestai "
        >
          <img src="/tetelestallogo.jpeg" alt width="170" />
        </div>
        <div
          className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center"
          title="Licorne Technologies"
        >
          <img src="/licorenelogo.png" alt width="170" />
        </div>
        <div
          className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16"
          title="borrowlite-logo"
        >
          <img src="/borrowlite.png" alt width="200" />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
          <img
            src="https://cdn.tuk.dev/assets/honda-dark.png"
            alt
            width="170"
          />
        </div>
      </div>
    </div>
  );
};
