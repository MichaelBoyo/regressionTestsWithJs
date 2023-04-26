import axios from "axios";

export const fetchCurrencyPairs = async (): Promise<
  Array<{ id: string; symbol: string; rate: number }>
> => {
  const response = await axios.get<
    Array<{ id: string; symbol: string; rate: number }>
  >(
    "https://foreign-exchange-api-dev.up.railway.app/api/exchange/v1/currency/all"
  );
  return response.data;
};
