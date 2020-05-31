import { Forecast } from '../models/forecast';

export const acompleteRsp = [
  {
    Version: 1,
    Key: '215854',
    Type: 'City',
    Rank: 31,
    LocalizedName: 'Tel Aviv',
    Country: {
      ID: 'IL',
      LocalizedName: 'Israel',
    },
    AdministrativeArea: {
      ID: 'TA',
      LocalizedName: 'Tel Aviv',
    },
  },
  {
    Version: 1,
    Key: '3431644',
    Type: 'City',
    Rank: 45,
    LocalizedName: 'Telanaipura',
    Country: {
      ID: 'ID',
      LocalizedName: 'Indonesia',
    },
    AdministrativeArea: {
      ID: 'JA',
      LocalizedName: 'Jambi',
    },
  },
  {
    Version: 1,
    Key: '300558',
    Type: 'City',
    Rank: 45,
    LocalizedName: 'Telok Blangah New Town',
    Country: {
      ID: 'SG',
      LocalizedName: 'Singapore',
    },
    AdministrativeArea: {
      ID: '05',
      LocalizedName: 'South West',
    },
  },
  {
    Version: 1,
    Key: '325876',
    Type: 'City',
    Rank: 51,
    LocalizedName: 'Telford',
    Country: {
      ID: 'GB',
      LocalizedName: 'United Kingdom',
    },
    AdministrativeArea: {
      ID: 'TFW',
      LocalizedName: 'Telford and Wrekin',
    },
  },
  {
    Version: 1,
    Key: '169072',
    Type: 'City',
    Rank: 51,
    LocalizedName: 'Telavi',
    Country: {
      ID: 'GE',
      LocalizedName: 'Georgia',
    },
    AdministrativeArea: {
      ID: 'KA',
      LocalizedName: 'Kakheti',
    },
  },
  {
    Version: 1,
    Key: '230611',
    Type: 'City',
    Rank: 51,
    LocalizedName: 'Telsiai',
    Country: {
      ID: 'LT',
      LocalizedName: 'Lithuania',
    },
    AdministrativeArea: {
      ID: 'TE',
      LocalizedName: 'Telšiai',
    },
  },
  {
    Version: 1,
    Key: '2723742',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Telégrafo',
    Country: {
      ID: 'BR',
      LocalizedName: 'Brazil',
    },
    AdministrativeArea: {
      ID: 'PA',
      LocalizedName: 'Pará',
    },
  },
  {
    Version: 1,
    Key: '186933',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Tela',
    Country: {
      ID: 'HN',
      LocalizedName: 'Honduras',
    },
    AdministrativeArea: {
      ID: 'AT',
      LocalizedName: 'Atlántida',
    },
  },
  {
    Version: 1,
    Key: '3453754',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Telaga Asih',
    Country: {
      ID: 'ID',
      LocalizedName: 'Indonesia',
    },
    AdministrativeArea: {
      ID: 'JB',
      LocalizedName: 'West Java',
    },
  },
  {
    Version: 1,
    Key: '3453755',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Telagamurni',
    Country: {
      ID: 'ID',
      LocalizedName: 'Indonesia',
    },
    AdministrativeArea: {
      ID: 'JB',
      LocalizedName: 'West Java',
    },
  },
];

export const fiveDaysRsp: Forecast[] = [
  {
    Date: '2020-05-30T07:00:00+03:00',
    Temperature: {
      Minimum: {
        Value: 16.9,
        Unit: 'C',
        UnitType: 17,
      },
      Maximum: {
        Value: 24.4,
        Unit: 'C',
        UnitType: 17,
      },
    },
    Day: {
      Icon: 1,
      IconPhrase: 'Sunny',
      HasPrecipitation: false,
    },
    Night: {
      Icon: 34,
      IconPhrase: 'Mostly clear',
      HasPrecipitation: false,
    },
  },
  {
    Date: '2020-05-31T07:00:00+03:00',
    Temperature: {
      Minimum: {
        Value: 16.9,
        Unit: 'C',
        UnitType: 17,
      },
      Maximum: {
        Value: 24.7,
        Unit: 'C',
        UnitType: 17,
      },
    },
    Day: {
      Icon: 1,
      IconPhrase: 'Sunny',
      HasPrecipitation: false,
    },
    Night: {
      Icon: 34,
      IconPhrase: 'Mostly clear',
      HasPrecipitation: false,
    },
  },
  {
    Date: '2020-06-01T07:00:00+03:00',
    Temperature: {
      Minimum: {
        Value: 21,
        Unit: 'C',
        UnitType: 17,
      },
      Maximum: {
        Value: 26.9,
        Unit: 'C',
        UnitType: 17,
      },
    },
    Day: {
      Icon: 1,
      IconPhrase: 'Sunny',
      HasPrecipitation: false,
    },
    Night: {
      Icon: 33,
      IconPhrase: 'Clear',
      HasPrecipitation: false,
    },
  },
  {
    Date: '2020-06-02T07:00:00+03:00',

    Temperature: {
      Minimum: {
        Value: 20,
        Unit: 'C',
        UnitType: 17,
      },
      Maximum: {
        Value: 31.8,
        Unit: 'C',
        UnitType: 17,
      },
    },
    Day: {
      Icon: 1,
      IconPhrase: 'Sunny',
      HasPrecipitation: false,
    },
    Night: {
      Icon: 35,
      IconPhrase: 'Partly cloudy',
      HasPrecipitation: false,
    },
  },
  {
    Date: '2020-06-03T07:00:00+03:00',
    Temperature: {
      Minimum: {
        Value: 19.1,
        Unit: 'C',
        UnitType: 17,
      },
      Maximum: {
        Value: 26.4,
        Unit: 'C',
        UnitType: 17,
      },
    },
    Day: {
      Icon: 1,
      IconPhrase: 'Sunny',
      HasPrecipitation: false,
    },
    Night: {
      Icon: 33,
      IconPhrase: 'Clear',
      HasPrecipitation: false,
    },
  },
];

export const oneDayRsp = [
  {
    LocalObservationDateTime: '2020-05-30T11:26:00+03:00',
    EpochTime: 1590827160,
    WeatherText: 'Mostly sunny',
    WeatherIcon: 2,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 23.7,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 75,
        Unit: 'F',
        UnitType: 18,
      },
    },
    MobileLink:
      'http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    Link:
      'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
  },
];
