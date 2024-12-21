import { useQuery } from '@tanstack/react-query'
import React from 'react'
import FetchRecepies from './api/AxiosRequests.tsx/FetchData';

const recepies = () => {
    const {data, error, isLoading} = useQuery({
      queryFn: FetchRecepies,
      queryKey: ['recepies']
    });

    console.log(data)
    if(error) return <h1>Error detected</h1>
    if(isLoading) return <h1>Loading...</h1>

  return (
    <div>
      {data?.map(
        ({
          id,
          title,
          instructions,
          cuisine,
          cookTime,
          ingredients,
          imageUrl,
        }) => (
          <div key={id} className="m-3 p-8 w-1/2">
            <h1>{title}</h1>
            <br />
            <p className="m-3">cooktime: {cookTime}m</p>
            <p className="m-3">cuisine: {cuisine}</p>
            <h3 className="m-3">
              <strong className="text-lime-300">instructions:</strong>{" "}
              {instructions}
            </h3>
            <ul className="m-3">
              ingredients:
              <li>{ingredients}</li>
            </ul>
            <br />
            <img src={imageUrl} alt={title} />
          </div>
        )
      )}
    </div>
  );
}

export default recepies
