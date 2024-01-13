import React from "react";


const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-white  ">
      <div className="max-w-[1280px] 2xl:px-0 md:px-10 px-5 mx-auto py-9">
        <div className="flex flex-col md:flex-row md:pb-8 md:gap-0 gap-6 md:items-center">
          
          <div className="flex grow md:justify-end items-center gap-4 lg:gap-16">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 h-fit md:divide-x md:text-sm">
              
            </div>
           
          </div>
        </div>
        <hr className="border-[#383838] md:block hidden" />
        <div className="flex md:pt-8 pt-4 items-center">
          <p className="md:block hidden text-xs text-[#C0C0C0] pl-4">Copyright ©2023 nitish98888@gmail.com</p>
          <div className="flex flex-col md:flex-row grow justify-end md:items-center gap-4 md:gap-0 h-fit md:divide-x md:text-sm">
           
          </div>
        </div>
        
        <hr className="border-[#383838] md:hidden mx-6 mt-10" />
        <p className="md:hidden text-xs text-[#C0C0C0] px-6 py-5">Copyright ©2023 nitish98888@gmail.com </p>
      </div>
    </footer>
  );
};

export default Footer;
