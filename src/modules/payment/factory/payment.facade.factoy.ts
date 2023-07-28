import PaymentfacadeInterface from "../facade/facade.interface";
import PaymentFacade from "../facade/payment.facade";
import TransactionRepository from "../repository/transaction.repository";
import ProcessPaymentUseCase from "../usecase/process-payment/process-payment.usecase";

export default class PaymentFacadeFactory {

    //A factoryvai retornar a minha facade criada
    static execute(): PaymentfacadeInterface {
        const respository = new TransactionRepository();
        const useCase = new ProcessPaymentUseCase(respository);
        const facade = new PaymentFacade(useCase);

        return facade;
    }
}