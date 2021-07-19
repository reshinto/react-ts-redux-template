export const isJsonContentType = (type: string | string[] | null) =>
  type && type.indexOf("json") >= 0;

export const getHeaders = () => {
  // modify this in accordance to how token is retrieved
  const token = "123";

  return new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
};
