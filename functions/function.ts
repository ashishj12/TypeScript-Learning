//optional parameter

type funcType = (n: number, m: number, l?: number) => number;

const func: funcType = (n, m, l) => {
  if (typeof l == "undefined") return m * n; //typograph
  return n * m;
};

func(12, 21);


