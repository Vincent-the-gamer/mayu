import { 
    defineConfig,
    presetAttributify,
    presetIcons,
    presetWind3
} from 'unocss'

// uno.config.ts
export default defineConfig({
    presets: [
        presetWind3(),
        presetAttributify(),
        presetIcons({
            extraProperties: {
                display: "inline-block"
            }
        })
    ],
    rules: [
        [
            /^bg-rgba-([\.\d]+)-([\.\d]+)-([\.\d]+)-([\.\d]+)$/, 
            ([_, r, g, b, a]) => ({ "background-color": `rgba(${r}, ${g}, ${b}, ${a})` })
        ],
        [
            /^font-family-([a-zA-Z_-]+)$/,
            ([_, fontFamily]) => ({ "font-family": fontFamily })
        ],
        [
            /^white-space-([a-zA-Z_-]+)$/,
            ([_, whiteSpace]) => ({ "white-space": whiteSpace })
        ],
        [
            /^box-shadow-([\.\d]+)px-([\.\d]+)px-([\.\d]+)px-([a-zA-Z_-]+)$/,
            ([_, offsetX, offsetY, blur, color]) => ({ "box-shadow": `${offsetX}px ${offsetY}px ${blur}px ${color}` })
        ]
    ],
    shortcuts: [
        { 
            "btn": `bg-gray-800 border-2px border-solid border-white color-white p-2
            border-rd-2.5 hover:bg-pink` 
        },
    ]
})