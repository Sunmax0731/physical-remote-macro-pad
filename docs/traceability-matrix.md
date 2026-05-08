# Traceability Matrix

- Repo: `physical-remote-macro-pad`
- Domain: IoT
- Rank: 49 / P2 / Score 56
- Idea No: 2
- アイデア名: 物理リモコン・マクロパッド
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

| 要件 | 仕様 | 実装 | テスト | docs/release |
| --- | --- | --- | --- | --- |
| 代表フロー | 利用者フロー | src/core, app | happy-path | README, user-guide |
| 必須不足検出 | データ仕様 | src/validators | missing-required | test-plan |
| 警告保持 | 安全境界 | src/report | warning, mixed-batch | security-privacy |
| closed alpha配布 | release checklist | scripts/validate | npm test | release-evidence |
| QCDS A-以上 | evaluation criteria | src/review-model | metrics validation | qcds docs |
