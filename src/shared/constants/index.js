const path = require('path');

const DISCORD = {
  CLIENT_ID: '1141823090750390424',
  CLIENT_SECRET: 'NoezJ0Js3D96qYCAgzdqW7KTmnyx95qN',
  BOT_TOKEN: 'MTE0MTgyMzA5MDc1MDM5MDQyNA.GmahbK.u-cPeWDu5NdW24NMlKhaqH0FxNcfl8w6iCFmmk',
  REDIRECT_URI: 'http://localhost:3000/callback',
  OAUTH_URL: 'https://discord.com/api/oauth2/authorize?client_id=1141823090750390424&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=guilds%20identify%20guilds.members.read',
  API_BASE: 'https://discord.com/api/v10',
  GUILD_ID: '1143409639640289300',
  REQUIRED_ROLES: [
    '1143409659852640408',
    '1143409936596996157',
    '1143409639640289300'
  ]
};

const APP = {
  NAME: 'Dzordi Panel',
  VERSION: '1.0.1',
  SERVER_PORT: 3000,
  DEV_MODE: true
};

const WINDOW_CONFIG = {
  LOADING: {
    width: 200,
    height: 250,
    frame: false
  },
  LOGIN: {
    width: 200,
    height: 250,
    frame: false
  },
  MAIN: {
    width: 1600,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    maxWidth: 1920,
    maxHeight: 1080,
    frame: false,
    autoHideMenuBar: true
  },
  AUTH: {
    width: 1600,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    maxWidth: 1920,
    maxHeight: 1080,
    autoHideMenuBar: true
  }
};

const FIVEM_PATHS = {
  BASE: path.join(process.env.LOCALAPPDATA, 'FiveM', 'FiveM.app'),
  get CITIZEN() { return path.join(this.BASE, 'citizen'); },
  get MODS() { return path.join(this.BASE, 'mods'); },
  get DATA() { return path.join(this.BASE, 'data'); }
};

const CACHE_FOLDERS = [
  'nui-storage',
  'cache',
  'server-cache',
  'server-cache-priv'
];

const MOD_TYPES = {
  FREEMODE: 'freemode',
  SKIN: 'skin'
};

const MODS = {
  FREEMODES: [
    { id: 'freemode1', name: 'Citizen Dzordi 11.0', file: 'freemode1.rpf' },
    { id: 'freemode2', name: 'Citizen Dzordi 12.0', file: 'freemode2.rpf' },
    { id: 'freemode3', name: 'Citizen Dzordi 13.0', file: 'freemode3.rpf' },
    { id: 'freemode4', name: 'Citizen Dzordi 14.0', file: 'freemode4.rpf' },
    { id: 'freemode5', name: 'Citizen Dzordi 15.0', file: 'freemode5.rpf' }
  ],
  SKINS: [
    { id: 'skin1', name: 'Fivem Seven Nike | Silenciador', file: 'skin1.rpf' },
    { id: 'skin2', name: 'Five Seven Nike Model Y', file: 'skin2.rpf' },
    { id: 'skin3', name: 'Glock Red Dragon', file: 'skin3.rpf' },
    { id: 'skin4', name: 'Glock Purple Water', file: 'skin4.rpf' },
    { id: 'skin5', name: 'M4MK2 Tokyo | by EXA', file: 'skin5.rpf' },
    { id: 'skin6', name: 'G3 Assault Rifle Delta', file: 'skin6.rpf' }
  ]
};

const EXTERNAL_LINKS = {
  DISCORD: 'https://discord.gg/EbxB748zPF',
  YOUTUBE: 'https://www.youtube.com/watch?v=3TLbO7qddm4&ab_channel=DzordiCommunity'
};

const STORAGE_KEYS = {
  ACCESS_TOKEN: 'discordAccessToken',
  MOD_STATE_PREFIX: 'buttonState_'
};

module.exports = {
  DISCORD,
  APP,
  WINDOW_CONFIG,
  FIVEM_PATHS,
  CACHE_FOLDERS,
  MOD_TYPES,
  MODS,
  EXTERNAL_LINKS,
  STORAGE_KEYS
};

