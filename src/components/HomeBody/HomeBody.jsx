const HomeBody = () => {
  return (
    <>
      <div className="container flex gap-4 mt-4 mx-auto">
        <div className="bg-[#fff] h-40 w-[20%] p-4 shadow-lg shadow-slate-100 rounded-md">
          <h4 className="font-Nunito text-xl text-textColor font-semibold">Fill section</h4>
        </div>
        <div className="bg-[#fff] h-40 w-[50%] p-4 shadow-lg shadow-slate-100 rounded-md">
          <h4>BUILDING A PERFECT RESUME HAS NEVER BEEN THIS EASY!</h4>
        </div>
        <div className="bg-[#fff] h-40 w-[30%] p-4 shadow-lg shadow-slate-100 rounded-md">
          <h4>Preview</h4>
        </div>
      </div>
    </>
  );
};

export default HomeBody;