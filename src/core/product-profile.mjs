export const productProfile = {
  "repo": "physical-remote-macro-pad",
  "title": "物理リモコン・マクロパッド",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 49,
  "tier": "P2",
  "score": 56,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "M5StackボタンやBLEでPC音量、録画、ミュート、撮影、制作ショートカットを操作する。",
  "problem": "頻出操作がマウス操作に埋もれ、作業の流れが切れる。",
  "differentiation": "机上端末のボタン、傾き、画面表示を作業モードごとに切り替える。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
