import UseCaseInterface from "../../@shared/use-case/use-case.interface";
import PaymentfacadeInterface, { PaymentFacadeInputDto, PaymentFacadeOutputDto } from "./facade.interface";

export default class PaymentFacade implements PaymentfacadeInterface {

    constructor(
        private processPaymentUseCase: UseCaseInterface
    ) { }

    process(input: PaymentFacadeInputDto): Promise<PaymentFacadeOutputDto> {
        return this.processPaymentUseCase.execute(input)
    }
}