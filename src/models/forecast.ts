export interface ForecastModel {
  Date: string;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Maximum: {
      Value: number;
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
