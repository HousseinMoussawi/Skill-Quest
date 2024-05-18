import { createSlice } from "@reduxjs/toolkit";

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
  level_text: string[];
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
  game_id: number;
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

interface UserState {
  fullName: string;
  username: string;
  email: string;
  password: string;
  profilePictureURL: string;
  role: string;
  userAchievements: Achievement[];
  userRewards: Reward[];
  skills: Skill[];
  favoriteGame: Game;
  userGames: UserGame[];
  balance: number;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  profilePictureURL: "",
  role: "PLAYER",
  userAchievements: [],
  userRewards: [],
  skills: [],
  favoriteGame: {
    game_id: 0,
    game_name: "",
  },
  userGames: [],
  balance: 0,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
