export const getCities = async () => {
  const res = await fetch(
    "https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e"
  );
  const data = await res.json();
  return data.result.records;
};