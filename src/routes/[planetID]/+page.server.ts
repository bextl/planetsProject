import type { PageServerLoad } from "./$types";

type PlanetResponse = {
  id: string;
  name: string;
  rotation: number;
  revolution: number;
  radius: number;
  temperature: number;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
};

export const load: PageServerLoad = async ({ params }) => {
  // Fetch data from a URL or any other data source
  const response = await fetch(
    `http://localhost:8081/api/v1/planets/${params.planetID}`
  );
  const data: PlanetResponse = await response.json();

  return data;
};
