import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-cols-2">
        <h2 className="font-medium text-2x1 pb-4">Testimonial</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                className="rounded-full inline-block"
                src="https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/450340700_1845822902591491_8718531753104491838_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHoF6cog2wDMAAAEoihTDFgzdfGFlkS76XN18YWWRLvpYjGJg45mS2XyFtulXDnsbk0XQlnYH28nk39eYPCg5RR&_nc_ohc=Nitlz9I-zaUQ7kNvgGmsWWZ&_nc_ht=scontent.fhan4-4.fna&_nc_gid=A8b0B3ezLJFbXbKCvUYIaE1&oh=00_AYB35GsZhatdC0svDZDp5rz2NxKQJqi-Lm6xST4PQaPAlA&oe=670D4F46"
                width={80}
                height={80}
                alt="dp"
              />
              <h2 className="text-gray-500 font-black text-[20px]">
                {" "}
                Khanh Dinh{" "}
              </h2>
              <p>CEO & Founder Invision </p>
              <Image
                className="inline-block py-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkS5-XcN1vurC7aIATDSyER2rV0xOqXDEdIYmutBkC6dQPQb1FN7QBDEjDCmMXQ-KRpg&usqp=CAU"
                width={30}
                height={30}
                alt="quotes"
              />
              <p className="max-w-[200px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet.
              </p>
            </div>
          </div>

          <div className="bg-red-600 bg-[url(https://img.freepik.com/free-photo/abstract-empty-smooth-light-pink-studio-room-background-use-as-montage-product-display-banner-template_1258-63960.jpg?t=st=1728546047~exp=1728549647~hmac=924d06d38a992234fa37bc4070cbc73c40212cd25f756799a7a3284fc48b986e&w=1380)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <button className="bg-blackish text-white p-2 rounded-sm">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-[20px]">
                Starting @ $20 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
