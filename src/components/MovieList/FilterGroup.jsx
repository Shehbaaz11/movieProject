import React from "react";

const FilterGroup = ({ minRating, handleFilter, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings.map((rate) => (
        <li
          className={
            minRating === rate
              ? "movie_filter_item active"
              : "movie_filter_item "
          }
          key={rate} //unique ke liye
          onClick={() => handleFilter(rate)} //kaise hi click hoga else wala part chalega
        >
          {rate} star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
