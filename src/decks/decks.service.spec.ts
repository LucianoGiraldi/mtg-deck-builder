import { Test, TestingModule } from '@nestjs/testing';
import { DecksService } from './decks.service';
import { getModelToken } from '@nestjs/mongoose';
import { Deck } from './deck.schema';

describe('DecksService', () => {
  let service: DecksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DecksService,
        {
          provide: getModelToken(Deck.name),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<DecksService>(DecksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Mais testes aqui
});
