import { FakeNewsService } from '../../src/services/NewsService/FakeNewsService.ts'

describe('FakeNewsService', () => {
    it('should return error for each 3rd call', async () => {
        const service = new FakeNewsService(1)

        for (let i = 1; i < 12; i++) {
            if (i % 3 === 0) {
                await expect(
                    service.getLatestArticles(0, 1)
                ).rejects.toBeUndefined()
                continue
            }
            expect(
                (await service.getLatestArticles(0, 1)).data.length
            ).toBeGreaterThan(1)
        }
    })
})
