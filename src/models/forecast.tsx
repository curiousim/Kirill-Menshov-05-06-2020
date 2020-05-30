export interface Forecast {
  Date: string;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Maximum: {
      Value: 24.4;
      Unit: string;
      UnitType: number;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: false;
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: false;
  };
}
