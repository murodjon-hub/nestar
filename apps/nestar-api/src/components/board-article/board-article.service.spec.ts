import { Test, TestingModule } from '@nestjs/testing';
import { BoardArticleService } from './board-article.service';

describe('BoardArticleService', () => {
  let service: BoardArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardArticleService],
    }).compile();

    service = module.get<BoardArticleService>(BoardArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
