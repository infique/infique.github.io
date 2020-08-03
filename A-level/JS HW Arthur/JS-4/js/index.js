class ClimaticZones {
    constructor(region) {
      this.region = region;
      this.climates = {
        "Экваториальные области Африки": "Экваториальный",
        "Экваториальные области Южной Америки": "Экваториальный",
        "Экваториальные области Океании": "Экваториальный",
        "Южная и Юго-Восточная Азия": "Тропический муссонный",
        "Западная и Центральная Африка": "Тропический муссонный",
        "Северная Австралия": "Тропический муссонный",
        "Северная Африка": "Тропический сухой",
        "Центральная Австралия": "Тропический сухой",
        "Южный берег Крыма": "Средиземноморский",
        "Южная Африка": "Средиземноморский",
        "Юго-Западная Австралия": "Средиземноморский",
        "Западная Калифорния": "Средиземноморский",
        "Западные части Евразии": "Умеренный морской",
        "Западные части Северной Америки": "Умеренный морской",
        "Внутренние части материков": "Умеренный континентальный",
        "Восточная окраина Евразии": "Умеренный муссонный",
        "Северные окраины Евразии": "Субарктический",
        "Северные окраины Северной Америки": "Субарктический",
      };
    }
    getClimate() {
      for (let key in this.climates) {
        if (this.region === key) return this.climates[key];
      }
    }
  }
  
  Object.defineProperty(ClimaticZones, "climates", {
    enumerable: false,
  });
  
  console.log(ClimaticZones);
  let climatZone1 = new ClimaticZones("Экваториальные области Африки");
  let climatZone2 = new ClimaticZones("Северные окраины Северной Америки");
  console.log("Climat:" + climatZone1.getClimate());
  console.log("Climat:" + climatZone2.getClimate());