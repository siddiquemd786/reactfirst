import React from 'react';

const Cards = () => {
  const images = [
    {
      id: 1,
      image: <img src="./image/rec.png" alt="Card Image" />,
      h6:" Whitechapel Rd.",
      p:"Tulare County, Los Angeles, CA 23415",
      h5:"$1,456,654.00"
    },
    {
      id: 2, 
      image: <img src="./image/rec2.png" alt="Card Image" />,
      h6:" Whitechapel Rd.",
      p:"Tulare County, Los Angeles, CA 23415",
      h5:"$1,456,654.00"
    },
    {
        id: 3, 
        image: <img src="./image/rec2.png" alt="Card Image" />,
        h6:" Whitechapel Rd.",
      p:"Tulare County, Los Angeles, CA 23415",
      h5:"$1,456,654.00"
      },
      {
        id: 4, // Unique ID
        image: <img src="./image/rec3.png" alt="Card Image" />,
      },
      {
        id: 5, // Unique ID
        image: <img src="./image/rec4.png" alt="Card Image" />,
        h6:" Whitechapel Rd.",
      p:"Tulare County, Los Angeles, CA 23415",
      h5:"$1,456,654.00"
      },
      {
        id: 6, // Unique ID
        image: <img src="./image/rec5.png" alt="Card Image" />,
        h6:" Whitechapel Rd.",
      p:"Tulare County, Los Angeles, CA 23415",
      h5:"$1,456,654.00"
      },
  ];

  return (
    <div className='md:w-[1304px]'>
        <div className="w-[1304px] md:ml-[-35px]  md:h-[709px] md:mt-10 grid grid-cols-1  md:flex   flex-wrap gap-6">
          
      {images.map((data) => (
        <div
          key={data.id}
          className="md:w-[306px] md:h-[337px]  "
        >
          <div className="md:w-[306px] rounded-2xl md:h-[253px]  ">
            {data.image}
          </div>
          <h6 className="text-dashcolor text-[16px] text-start font-[700]">
          {data.h6}
          </h6>
          <p className="text-Primary text-start text-[14px]">
          {data.p}
          </p>
          <h6 className="text-dashcolor text-[16px] text-start font-[700]">
          {data.h5}
          </h6>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;
