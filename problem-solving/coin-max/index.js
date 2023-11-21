const coinMax = (coins, left, right) => {
  if (left + 1 === right) {
    return Math.max(coins[left], coins[right]);
  }

  return Math.max(
    coins[left] +
      Math.min(
        coinMax(coins, left + 2, right),
        coinMax(coins, left + 1, right - 1),
      ),
    coins[right] +
      Math.min(
        coinMax(coins, left + 1, right - 1),
        coinMax(coins, left, right - 2),
      ),
  );
};
