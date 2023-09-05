export interface Maps {
  status: number;
  data: [
    {
      uuid: string;
      displayName: string;
      coordinates: string;
      displayIcon: string;
      listViewIcon: string;
      splash: string;
      assetPath: string;
      mapUrl: string;
      xMultiplayer: any;
      yMultiplayer: any;
      xScalarToAdd: any;
      yScalarToAdd: any;
      callouts: [
        {
          regionName: string;
          superRegionName: string;
          location: {
            x: any;
            y: any;
          };
        }
      ];
    }
  ];
}
