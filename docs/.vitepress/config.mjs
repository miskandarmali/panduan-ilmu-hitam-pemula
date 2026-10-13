import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/panduan-ilmu-hitam-pemula/',
    title: "Panduan Ilmu Hitam Pemula",
    description: "Panduan Ringkas Ilmu Hitam untuk Pemula",
    themeConfig: {
        sidebar: [
            {
                text: 'Menu Utama',
                items: [
                    { text: 'Muka Depan', link: '/' },
                    { text: 'Pengenalan Sistem', link: '/pengenalan' }
                ]
            }
        ]
    }
})