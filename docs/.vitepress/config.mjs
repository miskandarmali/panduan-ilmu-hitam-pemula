import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/panduan-ilmu-hitam-pemula/',
    title: "Panduan Ilmu Hitam Pemula",
    description: "Panduan Ringkas Ilmu Hitam untuk Pemula",
    lang: 'ms',
    themeConfig: {
        search: { provider: 'local' },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/miskandarmali/panduan-ilmu-hitam-pemula' }
        ],
        footer: {
            message: 'Panduan Ilmu Hitam Pemula',
            copyright: 'Hak cipta © miskandarmali'
        },
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