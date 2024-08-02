export interface NavUtilType {
  name: string;
  url: string;
  param: string;
}

export const NavUtil: NavUtilType[] = [
  {
    name: "Home",
    url: "/?home=true",
    param: "home",
  },
  {
    name: "Campaign",
    url: "/campaign?campaign=true&",
    param: "campaign",
  },
  {
    name: "Community",
    url: "",
    param: "",
  },
  // {
  //   name: "create campaign",
  //   url: "/create?create=true&",
  //   param: "",
  // },
];
