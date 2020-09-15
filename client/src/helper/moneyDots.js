const moneyDots = (n) =>  {
  return n.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

export default moneyDots;