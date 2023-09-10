export interface PlayerTitles {
  status: number;
  data: [
    {
      uuid: string;
      displayName: string;
      titleText: string;
      isHiddenIfNotOwned: boolean;
      assetPath: string;
    }
  ];
}
