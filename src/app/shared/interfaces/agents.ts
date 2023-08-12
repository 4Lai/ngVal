export interface Agents {
  status: number;
  data: [
    {
      uuid: string;
      displayName: string;
      developerName: string;
      characterTags: string[];
      displayIcon: string;
      displayIconSmall: string;
      bustPortrait: string;
      fullPortrait: string;
      fullPortraitV2: string;
      killfeedPortrait: string;
      background: string;
      backgroundGradientColors: string[];
      assetPath: string;
      isFullPortraitRightFacit: boolean;
      isPlayableCharacter: boolean;
      isAvailableForTest: boolean;
      isBaseContent: boolean;
      role: {
        uuid: string;
        displayName: string;
        description: string;
        displayIcon: string;
        assetPath: string;
      };
      abilities: [
        {
          slot: string;
          displayName: string;
          descriptiopn: string;
          displayIcon: string;
        }
      ];
      voiceLine: {
        minDuration: any;
        maxDuration: any;
        mediaList: [
          {
            id: number;
            wwise: string;
            wave: string;
          }
        ];
      };
    }
  ];
}