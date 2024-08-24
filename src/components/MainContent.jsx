/* eslint-disable react/prop-types */

const MainContent = function ({ title, children }) {
  return (
    <main className="w-[95%] min-h-[70vh] sm:w-4/5 m-auto my-12 rounded-xl text-center shadow-lg dark:shadow-gray-700">
      <h1 className="text-4xl py-10">{title}</h1>
      {children}
    </main>
  );
};

export default MainContent;
