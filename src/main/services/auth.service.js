const fetch = require('node-fetch');
const Store = require('electron-store');
const { DISCORD, STORAGE_KEYS } = require('../../shared/constants');

class AuthService {
  constructor() {
    this.store = new Store();
    this.accessToken = null;
    this.user = null;
    this.userRoles = null;
  }

  getStoredToken() {
    return this.store.get(STORAGE_KEYS.ACCESS_TOKEN);
  }

  saveToken(token) {
    this.accessToken = token;
    this.store.set(STORAGE_KEYS.ACCESS_TOKEN, token);
  }

  clearToken() {
    this.accessToken = null;
    this.store.delete(STORAGE_KEYS.ACCESS_TOKEN);
  }

  async fetchUserInfo(token) {
    try {
      const response = await fetch(`${DISCORD.API_BASE}/users/@me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }

      this.user = await response.json();
      await this.fetchUserRoles(DISCORD.GUILD_ID, this.user.id);
      return this.user;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  }

  async fetchUserRoles(guildId, userId) {
    try {
      const response = await fetch(`${DISCORD.API_BASE}/guilds/${guildId}/members/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bot ${DISCORD.BOT_TOKEN}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user roles');
      }

      const memberData = await response.json();
      this.userRoles = memberData.roles;
      return this.userRoles;
    } catch (error) {
      console.error('Error fetching user roles:', error);
      throw error;
    }
  }

  async exchangeCodeForToken(code) {
    try {
      const params = new URLSearchParams();
      params.append('client_id', DISCORD.CLIENT_ID);
      params.append('client_secret', DISCORD.CLIENT_SECRET);
      params.append('grant_type', 'authorization_code');
      params.append('code', code);
      params.append('redirect_uri', DISCORD.REDIRECT_URI);

      const response = await fetch(`${DISCORD.API_BASE}/oauth2/token`, {
        method: 'POST',
        body: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to exchange code for token');
      }

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      throw error;
    }
  }

  hasRequiredRole() {
    if (!this.userRoles) return false;
    return DISCORD.REQUIRED_ROLES.some(roleId => this.userRoles.includes(roleId));
  }

  isAuthenticated() {
    return this.accessToken && this.user && this.userRoles && this.hasRequiredRole();
  }

  getUser() {
    return this.user;
  }

  getUserRoles() {
    return this.userRoles;
  }
}

module.exports = AuthService;

