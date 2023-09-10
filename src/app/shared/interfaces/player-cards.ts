export interface PlayerCards {
  status: number;
  data: [{
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: string;
    themeUuid: string;
    displayIcon: string;
    smallArt: string;
    wideArt: string;
    largeArt: string;
    assetPath: string;
  }]
}
