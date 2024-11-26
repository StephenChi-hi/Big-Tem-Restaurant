export interface Schools {
  name: string;
  code: string;
  flag: string;
}

export const schools: Schools[] = [
  {
    name: "Federal University of Technology, Owerri",
    code: "FUTO",
    flag: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1732572861/utilities/download_7_ze93rj.jpg",
  },

  {
    name: "Imo State University",
    code: "IMSU",
    flag: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1732572861/utilities/download_1_qmia8x.png",
  },
  {
    name: "Federal Polytechnic, Nekede",
    code: "NEKEDE",
    flag: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1732572861/utilities/download_chpscu.png",
  },
];

export default schools;
