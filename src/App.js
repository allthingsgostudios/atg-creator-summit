import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

// Components
import { Divider } from "./components/Divider/Divider";
import { Marquee } from "./components/Marquee/Marquee";

// Scenes
import { Description } from "./scenes/Description/Description";
import { Faq } from "./scenes/Faq/Faq";
import { Hero } from "./scenes/Hero/Hero";
import { Panelists } from "./scenes/Panelists/Panelists";
import { Partners } from "./scenes/Partners/Partners";

// Constants
const engine = new Styletron();

const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);
appHeight();

function App() {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <div className="app">
                    <Hero />
                    <Marquee
                        text={`PANEL 1: WOMEN X MEDIA • PANEL 1: WOMEN X MEDIA •${" "}`}
                    />
                    <Panelists type="media" />
                    <Marquee
                        text={`PANEL 2: WOMEN X MUSIC • PANEL 2: WOMEN X MUSIC •${" "}`}
                    />
                    <Panelists type="music" />
                    <Divider />
                    <Description />
                    <Divider />
                    <Faq />
                    <Divider />
                    <Partners />
                    <Divider />
                </div>
            </BaseProvider>
        </StyletronProvider>
    );
}

export default App;
