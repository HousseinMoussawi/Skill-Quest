interface LevelStat {
    level_stat_id: string;
    stat_name: string;
    stat_value: string;
  }

  interface GameLevel {
    level_id: string;
    level_name: string;
    level_difficulty: string;
    level_status: string;
    level_stats: LevelStat[];
  }
  
  interface GameStat {
    game_stat_id: string;
    stat_name: string;
    stat_value: string;
  }
  
  interface UserGame {
    game_name: string;
    game_stats: GameStat[];
    game_levels: GameLevel[];
  }
  
  interface Reward {
    reward_id: string;
    reward_name: string;
    reward_image_url: string;
    reward_type: string;
  }
  
  interface Game {
    game_id: string;
    game_name: string;
  }
  
  interface Achievement {
    achievement_id: string;
    achievement_name: string;
    achievement_description: string;
    achievement_medal_url: string;
    achievement_game: Game;
  }
  
  interface Skill {
    name: string;
  }