import React, { useState } from "react";
import imgg from "./img/re.jpg";

export function Card({ bookData }) {
  return (
    <div className=" grid  container mx-auto justify-center lg:grid-cols-4 md:grid-cols-2 gap-x-5 grid-cols-1">
      {bookData.map((item, index) => {
        let thum = item.volumeInfo.imageLinks?.smallThumbnail
        if(thum != undefined){
            return(
                <div key={index} className = "mx-auto">
                  <img src={thum} alt="" className=" h-[450px] w-[320px]!" />
                  <h1>title : {item.volumeInfo?.title}</h1>
                  <h2>auther : {item.volumeInfo?.authors}</h2>
                  <h2> language : {item.volumeInfo?.language === "en" ? 'english' : item.volumeInfo?.language}</h2>
                    <h3>publishedDate : {item.volumeInfo?.publishedDate}</h3>
                </div>)
        }
    
      })}
    </div>
  );
}
