// src/routes/[your-page].server.js

// export const load = async({ fetch }) => {

//     const productRes = await fetch('http://localhost:8081/api/v1/planets')

//     const productData = await productRes.json()
//     const products = productData.products

//     return {
//         products: products
//     }
// }

// src/routes/[id].server.js

import type { PageServerLoad } from "./$types";

type PlanetItem = {
  id: string;
  name: string;
};

type PlanetsResponse = {
  count: number;
  data: PlanetItem[];
};

export const load: PageServerLoad = async ({ params }) => {
  // Fetch data from a URL or any other data source
  const response = await fetch(`http://localhost:8081/api/v1/planets`);
  const data: PlanetsResponse = await response.json();

  // Access the 'id' property from the fetched data
  //const { id, name } = data.data[0]; // Assuming there is only one item in the 'data' array

  return data;
};
