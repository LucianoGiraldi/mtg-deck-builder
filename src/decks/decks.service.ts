import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deck } from './deck.schema';

@Injectable()
export class DecksService {
  constructor(@InjectModel(Deck.name) private deckModel: Model<Deck>) {}

  async create(deckData): Promise<Deck> {
    const createdDeck = new this.deckModel(deckData);
    return createdDeck.save();
  }

  async findAll(): Promise<Deck[]> {
    return this.deckModel.find().exec();
  }

  async findOne(id: string): Promise<Deck> {
    return this.deckModel.findById(id).exec();
  }

  async delete(id: string): Promise<any> {
    return this.deckModel.deleteOne({ _id: id }).exec();
  }
}
