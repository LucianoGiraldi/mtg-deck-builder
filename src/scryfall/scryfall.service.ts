import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ScryfallService {
  private readonly apiBaseUrl = 'https://api.scryfall.com';

  async searchLegendaryCreatures() {
    const response = await axios.get(`${this.apiBaseUrl}/cards/search?q=t:legendary+t:creature`);
    return response.data;
  }

  async searchCardsByColor(color: string) {
    const response = await axios.get(`${this.apiBaseUrl}/cards/search?q=c:${color}`);
    return response.data;
  }
}
