import Modes from "./Modes";

interface ModeButton_State {
    mode: string;
    setMode: (modeName: string) => void;
}


export default function ModeButtons({ mode, setMode }: ModeButton_State) {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            {
                Modes.map((m) => {
                    return (<button style={{ "margin": "0.5em", "padding": "0.5em", "transform": (mode == m ? "scale(1.2)" : "scale(1)") }}
                        onClick={() => setMode(m)
                        }
                    > {m}</button >)
                })
            }
        </div>

    )
}