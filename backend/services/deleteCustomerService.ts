import prismaClient from "../prisma"

interface DeleteCustomerProps{
    id: string
}

class deleteCustomerService{
   async execute({ id }: DeleteCustomerProps){

    if(!id){
        throw new Error("YOU NEED TO ADD SOME ID!")
    }

    const findCustomer = await prismaClient.customer.findFirst({
        where:{
            id: id
        }
    })

    if (!findCustomer) {
        throw new Error("CUSTOMER NOT EXISTS!")
    }

    await prismaClient.customer.delete({
        where:{
            id: findCustomer.id
        }
    })

    return { message: "DELETED WITH SUCCESSFULL!"}
        
   }
}

export { deleteCustomerService }
