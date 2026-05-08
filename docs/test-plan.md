# テスト計画

- Repo: `physical-remote-macro-pad`
- Domain: IoT
- Rank: 49 / P2 / Score 56
- Idea No: 2
- アイデア名: 物理リモコン・マクロパッド
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\physical-remote-macro-pad`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/physical-remote-macro-pad-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
