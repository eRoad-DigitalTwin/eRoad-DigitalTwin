export type Model = {
  name: string;
  inputs: [
    {
      type: number;
      name: string;
    },
    {
      type: string;
      name: string;
    },
    {
      type: "dataModel";
      name: string;
      context: string;
    },
    {
      type: "dropDown";
      name: string;
      values: { name: string; id: number }[];
    },
    {
      type: "entity";
      name: string;
      id: number;
    }
  ];
  outputs: [];
};
