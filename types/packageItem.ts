export type packageItem = {
  id: number;
  title: string;
  image: string;
  category: string;
  masterCategory: string;
  description: string;
  price: number;
  specialistName: string;
  specialistImage: string;
  // framework:framework[]
};

// data arry ex- framework:[{id:1,title:'React},{id:2,title:'Redux'}]
// type framework={id:number, title:string}
