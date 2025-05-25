export type News = {
  id: string;
  title: string;
  subTitle: string;
  content: string;
  publishedAt: string;
  isPinned: boolean;
  slug: string;
};

export const mockNews: News[] = [
  {
    id: "1",
    title: "2025年度定期演奏会のお知らせ",
    subTitle: "2025年度の定期演奏会を開催いたします。",
    content:
      "2025年度の定期演奏会を開催いたします。\n\n日時：2025年10月20日（月）14:00開場 15:00開演\n場所：海老名市文化会館小ホール\n\nプログラム：\n・未定\n・その他、詳細は後日お知らせいたします。\n\nチケット：\n詳細未定\n当日：詳細未定\n\nお問い合わせ：\nお問い合わせページよりご連絡ください。",
    publishedAt: "2025-05-25",
    isPinned: true,
    slug: "2025-regular-concert",
  },
  {
    id: "2",
    title: "新メンバー募集",
    subTitle: "座間市民混声合唱団では新メンバーを募集しています。",
    content:
      "座間市民混声合唱団では新メンバーを募集しています。\n\n対象：\n・合唱に興味のある方\n・初心者から経験者まで\n・年齢制限なし\n\n練習日時：\n月2回 13:00-15:30\n\n練習場所：\n座間市公民館｜立野台コミセン（詳細はスケジュールを参照ください）\n\n見学・体験入団も可能です。\nお気軽にお問い合わせください。",
    publishedAt: "2025-05-25",
    isPinned: true,
    slug: "new-member-recruitment",
  },
  {
    id: "3",
    title: "練習スケジュール",
    subTitle: "練習スケジュールを更新しました。",
    content:
      "練習スケジュールを更新しました。\n\n指揮：宍戸先生　ピアノ：佐藤先生\n\n練習日\t\t練習時間\t\t練習会場\n6月1日（日）\t13:00~15:30\t立野台コミセン\n6月8日（日）\t13:00~15:30\t公民館\n6月22日（日）\t13:00~15:30\t立野台コミセン\n6月29日（日）\t13:00~15:30\t立野台コミセン\n7月6日（日）\t13:00~15:30\t立野台コミセン\n7月13日（日）\t13:00~15:30\t公民館\n7月27日（日）\t13:00~15:30\t立野台コミセン\n8月10日（日）\t13:00~17:00\t公民館（強化練習）\n8月24日（日）\t13:00~15:30\t立野台コミセン\n8月31日（日）\t13:00~15:30\t立野台コミセン",
    publishedAt: "2025-05-25",
    isPinned: true,
    slug: "practice-schedule-update",
  },
];
