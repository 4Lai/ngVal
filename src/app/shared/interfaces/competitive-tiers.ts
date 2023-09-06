export interface CompetitiveTiers {
  status: number;
  data: [
    {
      uuid: string;
      assetObjectName: string;
      tiers: [
        {
          tier: number;
          tierName: string;
          division: string;
          divisionName: string;
          color: string;
          backgroundColor: string;
          smallIcon: string;
          largeIcon: string;
          rankTriangleDownIcon: string;
          rankTriangleUpIcon: string;
        }
      ];
      assetPath: string;
    }
  ];
}
