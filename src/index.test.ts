import { assert } from "chai";
import { fetchCurrencyPairs } from "./index";

describe("API endpoint /currency", () => {
  it("should return a list of currency pairs", async () => {
    const currencyPairs = await fetchCurrencyPairs();
    assert.isArray(currencyPairs);
    assert.isNotEmpty(currencyPairs);
    assert.containsAllKeys(currencyPairs[0], ["id", "symbol", "rate"]);
  });
});
