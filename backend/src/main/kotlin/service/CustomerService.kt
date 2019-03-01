package service

import infra.domain.Customer
import infra.repository.CustomerRepository
import org.springframework.stereotype.Service

@Service
class CustomerService (val customerRepository: CustomerRepository) {

    fun findAllCustomers():Collection<Customer> = customerRepository.findAll()
    fun saveCustomer(customer: Customer):Customer = customerRepository.save(customer)

}