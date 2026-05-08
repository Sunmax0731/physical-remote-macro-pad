# physical-remote-macro-pad

物理リモコン・マクロパッド の closed alpha prototype。M5StackボタンやBLEでPC音量、録画、ミュート、撮影、制作ショートカットを操作する。

## Status

- Version: 0.1.0-alpha.1
- Rank: 49 / P2 / Score 56
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
