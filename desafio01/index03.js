// Aplicação 03 - Abstract

class UIFactory {
    createButton() {
      throw new Error("createButton method must be implemented");
    }
    
    createWindow() {
      throw new Error("createWindow method must be implemented");
    }
  }
  
  class LightButton {
    render() {
      return "Botão branco criado";
    }
  }
  
  class DarkButton {
    render() {
      return "Botão preto criado";
    }
  }
  
  class LightWindow {
    render() {
      return "Janela clara aberta";
    }
  }
  
  class DarkWindow {
    render() {
      return "Janela escura aberta";
    }
  }
  
  class LightThemeFactory extends UIFactory {
    createButton() {
      return new LightButton();
    }
    
    createWindow() {
      return new LightWindow();
    }
  }
  
  class DarkThemeFactory extends UIFactory {
    createButton() {
      return new DarkButton();
    }
    
    createWindow() {
      return new DarkWindow();
    }
  }
  
  class ThemeFactoryProvider {
    static getFactory(theme) {
      switch(theme) {
        case "light":
          return new LightThemeFactory();
        case "dark":
          return new DarkThemeFactory();
        default:
          throw new Error("Theme not supported");
      }
    }
  }

  const theme = "dark";
  const factory = ThemeFactoryProvider.getFactory(theme);
  
  const button = factory.createButton();
  const windowUI = factory.createWindow();
  
  console.log(button.render());
  console.log(windowUI.render());