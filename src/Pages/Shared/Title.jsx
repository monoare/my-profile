const Title = ({ title }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl flex justify-center font-mont font-bold pb-2 pt-7 md:pt-14 uppercase">
        {title}
      </h1>
      <hr className="w-24 md:mt-4 border-[3px] mx-auto border-[#0099E6]" />
    </div>
  );
};

export default Title;
