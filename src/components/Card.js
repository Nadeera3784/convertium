const Card = ({ data }) => {
  return (
    <div className="border border-slate-500 rounded-tl-3xl ml-3 rounded-br-3xl p-5 h-[300px] bg-slate-300 dark:bg-black">
      <h1 className="text-3xl font-semibold text-balck text-black dark:text-white">
        {data.heading}
      </h1>
      <p className="mt-4 text-gray-500 dark:text-white">{data.text}</p>
    </div>
  );
};

export default Card;
