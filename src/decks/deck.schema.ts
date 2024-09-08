// deck.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Deck extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  cards: string[];
}

export const DeckSchema = SchemaFactory.createForClass(Deck);
