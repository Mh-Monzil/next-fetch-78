"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const handler = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();
      console.log(data);
      setMeals(data.meals);
    } catch (error) {
        console.log(error.message);
    }
  };
  // error ashtese tai try catch korbo

  useEffect(() => {
    loadData();
  }, [search]);

  return (
    <div className="mt-12">
      <input
        onChange={handler}
        className="p-3 outline-none border-none text-slate-900"
        type="text"
        placeholder="Search Meals...."
      />
      <button onClick={() => loadData()} className="bg-red-400 p-3">Search</button>
      <div className="mt-12 grid grid-cols-3 gap-12">
        {meals?.map((meal) => (
          <div className="border-2 p-2 border-rose-500" key={meal.idMeal}>
            <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={500} height={500} />
            <h6>{meal.strMeal}</h6>
            <p>{meal.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
