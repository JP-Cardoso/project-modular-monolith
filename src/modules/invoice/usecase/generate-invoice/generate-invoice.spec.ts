/**
 * Para criar um novo produto você vai precisar do 
 * Repositorio
 * UseCase
 * Input
 * Output
 */


const MockRepository = () => {
    return {
        find: jest.fn(),
        generate: jest.fn(),
    }
}

describe('Generate Invoice use case unit test', () => {

    it('should create a invoice')
})